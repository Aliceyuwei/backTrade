import * as apiUrl from '../config/api';
import * as axios from 'axios';
import router from '@/config/router';
import store from '@/store';
import swal from 'sweetalert2';
// import i18n from '../config/i18n';
import config from '@/config/config';
import VueCookie from 'vue-cookie';

/**
 * 若是小於10則補0
 * @param {String} date 字串
 * @return {String} 字串
 **/
function timePreFix (date) {
    if (+date < 10) {
        return `0${date}`;
    }
    return date;
}

/**
 * 格式化日期 2017-05-05 - 07:07:07
 * @param {Object} timeObj 時間物件
 * @param {Boolean} hasTime 是否有時分秒
 * @param {Boolean} hasDash 是否有減號

 * @return {String} 時間字串
**/
export function formatTime (timeObj, hasTime = true, hasDash = true) {
    const year = timeObj.getUTCFullYear();
    const month = timeObj.getUTCMonth() + 1;
    const day = timeObj.getUTCDate();
    const hour = timeObj.getUTCHours();
    const minute = timeObj.getUTCMinutes();
    const second = timeObj.getUTCSeconds();
    if (hasTime) {
        return `${year}-${timePreFix(month)}-${timePreFix(day)}${
            hasDash ? ' - ' : ' '
        }${timePreFix(hour)}:${timePreFix(minute)}:${timePreFix(second)}`;
    }
    return `${year}-${timePreFix(month)}-${timePreFix(day)}`;
}

/**
 * Ajax GET方法
 * @param {String} urlName API網址
 * @param {Boolean} init 是否為初始API
 * @param {Object} data 傳輸資料
 * @param {Function} success 成功callback
 * @param {Function} fail 失敗callback
 * @param {String} stateName 要存資料的state名稱
 * @param {String} ajaxName 資料存進state裡的key值
 * @return {Object} Promise Object
 **/
export function ajaxGet ({
    urlName = '',
    init = false,
    data = {},
    success = () => {},
    saveToStore = true,
    fail = () => {},
    showErrorMsg = true,
    stateName = '',
    ajaxName = ''
} = {}) {
    return axios({
        method: 'get',
        url: apiUrl[urlName],
        params: data,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'If-Modified-Since': '0',
            domainURL: location.origin
        }
    })
        .then(async function (response) {
            console.log(response, 'response')
            // 初始api
            if (init) {
                // 如果不是成功就執行fail callBack
                if (+response.data.code !== 0) {
                    fail();
                } else {
                    // response.data.data.permission.limit_mode = 'Y';
                    store.dispatch('actionCommonSetAjaxData', {
                        stateName,
                        ajaxName,
                        data: response.data.data
                    });
                    // 存入 WebSocket domain
                    VueCookie.set('td_ws_domain', response.data.data.ws_domain);
                    success();
                }
            } else {
                if (+response.data.code !== 0) {
                    if (config.errorCode.includes(`${response.data.code}`)) {
                        store.dispatch('actionCommonLoading', false);
                        swal({
                            title: '請重新登入',
                            // title: i18n.t('TEXT_LOGIN_AGAIN'),
                            type: 'warning'
                        }).then(() => {
                            window.location = '/';
                        });
                    } else {
                        if (showErrorMsg) {
                            store.dispatch('actionCommonPushErrorMsg', {
                                id: new Date().getTime(),
                                msg: `API訊息：${
                                response.data.message
                            } (錯誤碼：${
                                response.data.code
                            })`
                            });
                        }
                        try {
                            fail({
                                msg: `API訊息：${
                                    response.data.message
                                } (錯誤碼：：${
                                    response.data.code
                                })`
                            });
                        } catch (e) {
                            console.warn(e);
                        }
                    }
                } else {
                    if (saveToStore) {
                        store.dispatch('actionCommonSetAjaxData', {
                            stateName,
                            ajaxName,
                            data: response.data.data
                        });
                    }
                    try {
                        await success(response.data);
                    } catch (e) {
                        console.warn(e);
                    }
                    return response.data;
                }
            }
        })
        .catch(function (err) {
            console.warn(err);
            let errorCode = '';
            if (err.response) {
                errorCode = `(${err.response.status})`;
            }
            if (JSON.parse(JSON.stringify(err)).code) {
                errorCode = `(${JSON.parse(JSON.stringify(err)).code})`;
            }
            if (init) {
                router.push({
                    name: 'error'
                });
                store.dispatch('actionCommonLoading', false);
            } else {
                if (showErrorMsg) {
                    store.dispatch('actionCommonPushErrorMsg', {
                        id: new Date().getTime(),
                        msg: '内部API错误，请稍后再试' + errorCode
                    });
                }
                fail({
                    msg: '内部API错误，请稍后再试' + errorCode,
                    apiFail: true
                });
            }
        });
}
export function ajaxGetLang ({
    urlName = '',
    lang = '',
    success = () => {},
    fail = () => {}
} = {}) {
    return axios({
        method: 'get',
        url: `${apiUrl[urlName]}/${lang}.json`,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'If-Modified-Since': '0'
        }
    })
        .then(async function (response) {
            try {
                await success(response.data);
            } catch (e) {
                console.warn(e);
            }
        })
        .catch(async function (err) {
            console.warn(err);
            await fail();
        });
}
export function ajaxGetLoginLang ({
    // urlName = '',
    // lang = '',
    success = () => {},
    fail = () => {}
} = {}) {
    return axios({
        method: 'get',
        url: apiUrl['API_GET_LOGIN_LANG'],
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'If-Modified-Since': '0'
        }
    })
        .then(async function (response) {
            try {
                await success(response.data);
            } catch (e) {
                console.warn(e);
            }
        })
        .catch(async function (err) {
            console.warn(err);
            await fail();
        });
}

/**
 * Ajax POST|DELETE|PUT方法
 * @param {String} method ajax方式 (因delete, put處理與post相同  故用同一個function)
 * @param {String} urlName API網址
 * @param {Object} data 傳輸資料
 * @param {Object} success 成功callback
 * @param {Object} fail 失敗callback
 * @return {Object} Promise Object
 **/
export function ajaxPost ({
    method = 'post',
    urlName = '',
    data = {},
    success = () => {},
    fail = () => {}
} = {}) {
    const _postToken = `${apiUrl[urlName]}-${JSON.stringify(data)}`;
    const _postLock = store.state.common.postLock[_postToken];
    if (_postLock) return;
    store.dispatch('actionCommonPostLock', {
        status: true,
        token: _postToken
    });
    return axios({
        method,
        url: apiUrl[urlName],
        data: data,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'If-Modified-Since': '0'
        }
    })
        .then(async function (response) {
            store.dispatch('actionCommonPostLock', {
                status: false,
                token: _postToken
            });
            if (`${response.data.code}` !== '0') {
                if (config.errorCode.includes(`${response.data.code}`)) {
                    store.dispatch('actionCommonLoading', false);
                    swal({
                        title: '請重新登入',
                        type: 'warning'
                    }).then(() => {
                        window.location = '/';
                    });
                } else {
                    store.dispatch('actionCommonPushErrorMsg', {
                        id: new Date().getTime(),
                        msg: `API訊息：${
                            response.data.message
                        } (錯誤碼：${
                            response.data.code
                        })`
                    });
                    try {
                        fail();
                    } catch (e) {
                        console.warn(e);
                    }
                }
            } else {
                try {
                    await success(response.data);
                } catch (e) {
                    console.warn(e);
                }
                return response.data;
            }
        })
        .catch(function (err) {
            store.dispatch('actionCommonPostLock', {
                status: false,
                token: _postToken
            });
            console.warn(err);
            let errorCode = '';
            if (err.response) {
                errorCode = `(${err.response.status})`;
            }
            if (JSON.parse(JSON.stringify(err)).code) {
                errorCode = `(${JSON.parse(JSON.stringify(err)).code})`;
            }
            store.dispatch('actionCommonPushErrorMsg', {
                id: new Date().getTime(),
                msg: '内部API错误，请稍后再试' + errorCode
            });
            try {
                fail();
            } catch (e) {
                console.warn(e);
            }
        });
}

/**
 * 金額格式化 - 每千位數加逗號
 * @param  {Number|String} num 欲格式化的數字
 * @param  {boolean} hasSymbol 是否有正號
 * @return {String}            格式化結果
 */
export function formatMoney (num = 0, hasSymbol = false) {
    if (isNaN(+num)) return num;
    const _symbol = +num > 0 ? '+' : '';
    const _num = `${num}`.split('.');
    return `${hasSymbol ? _symbol : ''}${`${_num[0]}`.replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
    )}${_num[1] ? '.' + _num[1] : ''}`;
}
/**
 * 小數點到第二位
 * @param  {Number|String} num 欲格式化的數字
 * @return {String}            格式化結果
 */
export function formatOdds (num) {
    if (typeof num === 'string') return num;
    return num.toFixed(2);
}
/**
 * 檢查localStorage中的資料
 * 把過期的資料刪除
 */
export function checkStorageItem () {
    const now = new Date().getTime();
    Object.keys(localStorage).forEach(item => {
        try {
            const storageItemExpire = JSON.parse(localStorage.getItem(item))
                .expire;
            if (storageItemExpire && now > storageItemExpire) {
                localStorage.removeItem(item);
            }
        } catch (e) {e;}
    });
}