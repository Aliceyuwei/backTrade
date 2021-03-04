// export default {
// };
import VueCookie from 'vue-cookie';
// import { getStorageItem } from '../../../common/func';

export default {
    bar: 'foo',
    ip: VueCookie.get('user-ip') || '',
    loading: false,
    navSwitch: 'Y',
    currentPage: 1,
    // 預設isLogin false
    isLogin: false,
    pageItem: +VueCookie.get('pageItem') || 500,
    sortTeach: (Number(VueCookie.get('sortTeachTimes')) || 0) < 3,
    errorMsg: [],
    ajaxData: {
        info: {
            current_time: 1614754640,
            env: "gcp-production",
            last_login_time: "2021-03-03 14:51:13",
            permission: {
                bb_database: "Y",
                default_parameter: "Y",
                game_download: "Y",
                game_manager: "Y",
                game_manager_bb: "Y",
                game_manager_saba: "Y",
                game_result_key_in: "Y",
                game_setting: "Y",
                limit_mode: "N",
                odds_manager: "Y",
                risk_monitor: "Y",
                trade_manager: "Y",
                photo_color: "teal",
                product: "asia365",
            },
            sports: [
                {id: "1", name: "足球"},
                {id: "2", name: "籃球"},
                {id: "3", name: "美式足球"},
                {id: "4", name: "網球"},
                {id: "5", name: "棒球"},
                {id: "6", name: "冰上曲棍球"},
                {id: "7", name: "排球"},
                {id: "8", name: "電子競技"},
                {id: "9", name: "羽毛球"},
                {id: "10", name: "司諾克"},
                {id: "12", name: "拳擊"},
                {id: "14", name: "乒乓球"},
                {id: "18", name: "手球"},
                {id: "20", name: "賽車"},
                {id: "21", name: "高爾夫"},
                {id: "24", name: "飛鏢"},
                {id: "30", name: "板球"},
                {id: "83", name: "CS:GO"},
                {id: "84", name: "刀塔2"},
                {id: "85", name: "英雄聯盟"},
                {id: "133", name: "電競足球"},
                {id: "134", name: "電競籃球"},
                {id: "148", name: "王者榮耀"},
                {id: "160", name: "電競網球"},
                {id: "161", name: "電競冰球"},
                {id: "162", name: "電競排球"},
            ],
            username: "tradealice",
            ws_domain: "wss://td-ws2.xbbsports.com",
        }
    },
    // 訊源健康狀態
    sourceHealth: {},
    lang: VueCookie.get('lang') || 'tw',
    nowESTimeStamp: new Date().getTime() - 14400000,
    filter: {},
    // websocket
    socket: {},
    // socket io
    socketIo: undefined,
    checkStatus: {
        socket1: [{method: '', time: ''}, {method: '', time: ''}, {method: '', time: ''}],
        socket2: [{method: '', time: ''}, {method: '', time: ''}, {method: '', time: ''}]
    },
    // 關注的賽事
    // favoriteObject: getStorageItem('favorite') || {},
    // post鎖
    postLock: {},
    // 上一次刪除注單時的搜條件
    preCancelWagerParam: {},
    // 瀏覽器頁籤文字的key
    titleKey: '',
    // 修改密碼開關
    onModifyPassword: false,
    // 寬度是否大於1200
    over1200: false
};