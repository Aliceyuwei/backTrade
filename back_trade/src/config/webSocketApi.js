/* websocket框架
    // 線上人數
    {
        "event":"online_user_count",
        "data":{
            "smart_punter":0,
            "snake_user":0,
            "special_user_count":0,
            "total_count":1
        }
    }
 */
import VueCookie from 'vue-cookie';
export default class Socket {
    constructor (vue) {
        this.vue = vue;
        this.reConnectCount = 0;
        this.heartbeatClock = 0;
        this.listeners = new Map();
        this.init();
    }
    // 每次都會確認websocket是否連接完成
    waitForWebsocketConnection () {
        return new Promise((resolve, reject) => {
            if (this.webSocket.readyState === 1) {
                return resolve(true);
            }
            for (let count = 0; count < 10; count++) {
                setTimeout(() => {
                    let netWorkStatus = this.webSocket.readyState;
                    if (netWorkStatus !== 1) {
                        if (count === 9) {
                            return reject(false);
                        }
                    } else {
                        return resolve(true);
                    }
                }, count * 500);
            }
        });
    }
    sendWS (msg) {
        this.waitForWebsocketConnection().then(() => {
            this.webSocket.send(JSON.stringify(msg));
        }).catch(() => {
            // 五秒後都沒有正確回傳就直接重整
            location.reload();
        });
    }
    init () {
        let _webSocket = {};

        // const protocol = window.location.protocol;
        // const webSocketProtocol = protocol.includes('https') ? 'wss://' : 'ws://';

        // var index = window.location.hostname.search('d') + 1; // 尋找td的位置
        // let hostname = window.location.hostname; // hostname
        // hostname = [
        //     hostname.slice(0, index),
        //     '-ws2',
        //     hostname.slice(index)
        // ].join(''); // 塞進去-ws
        // let wsUrl = webSocketProtocol + hostname;
        const wsUrl = VueCookie.get('td_ws_domain');
        // 開發環境會使用開發站socket io
        // if (process.env.NODE_ENV === 'development') {
        //     wsUrl = 'ws://td-ws2-dev.xbbsports.asia'; // 開發站ws
        //     // wsUrl = 'wss://td-ws2-qa.xbbsports.com'; // 測試站ws
        // };
        const langTable = {
            tw: 'zh-tw',
            cn: 'zh-cn',
            en: 'en'
        };
        const wsLang = langTable[VueCookie.get('lang') || 'en'];

        _webSocket = new WebSocket(`${wsUrl}/ws-trade-api?token=lgsports&lang=${wsLang}`);

        _webSocket.onopen = () => {
            // 開啟時先隨便送資料過去
            const _initMag = {
                foo: 'bar'
            };

            this.vue.$store.state.common.checkStatus.socket1.push({
                method: 'connected',
                textKey: 'TEXT_WORK',
                time: new Date()
            });
            this.vue.$store.state.common.checkStatus.socket1.shift();
            _webSocket.send(JSON.stringify(_initMag));

            // 開始呼吸檢查
            this.startHeartbeat();
        };
        _webSocket.onmessage = (res) => {
            try {
                // 接到資料時, 根據event名稱廣播事件
                const _res = JSON.parse(res.data);
                const _eventName = _res.event;
                const _data = _res.data;
                let updateData = {};
                switch (_eventName) {
                    case 'getOddsDataV3': {
                        _data.forEach(dataSet => {
                            const data = JSON.parse(dataSet).data;
                            this.vue.$store.dispatch('actionGameOpenLoading', {
                                value: false,
                                data: _res.get_match === 'Y' ? 'all' : +data.selected_MID
                            });
                            // 更新賽事賠率資料
                            this.vue.$store.dispatch('actionGameOpenUpdateEventOdds', {
                                data
                            });
                            // 更新賽事資訊，有可能多場或單場
                            if (data.match_data) {
                                this.vue.$store.dispatch('actionGameOpenUpdateGameInfo', {
                                    data: data.match_data,
                                    selected_MID: +data.selected_MID,
                                    get_match: _res.get_match
                                });
                            }
                            // 更新賽事事件
                            if (data.select_match_action) {
                                const matchAction = data.select_match_action;
                                if (matchAction !== []) {
                                    this.vue.$store.dispatch('actionGameOpenUpdateEventData', {
                                        action: 'update_source_event',
                                        data: {
                                            match_id: data.selected_MID,
                                            event: matchAction[0],
                                            updated_at: matchAction[2],
                                            timestamp: matchAction[1]
                                        }
                                    });
                                }
                            }
                        });
                        break;
                    }
                    case 'getTournamentOdds' : {
                        const data = _res.data.data;
                        this.vue.$store.dispatch('actionGameOpenLoading', {
                            value: false,
                            data: data.get_all_match === 'Y' ? 'all' : +data.selected_match_id_list[0]
                        });
                        // 更新賽事賠率資料
                        this.vue.$store.dispatch('actionTournamentOpenUpdateEventOdds', {
                            data
                        });
                        // 更新賽事資訊，有可能多場或單場
                        if (data.matches) {
                            this.vue.$store.dispatch('actionTournamentOpenUpdateGameInfo', {
                                data: data.matches,
                                selected_MID: +data.selected_match_id_list[0],
                                get_match: data.get_all_match
                            });
                        }
                        // // 更新賽事事件
                        // if (_data.select_match_action) {
                        //     const matchAction = _data.select_match_action;
                        //     if (matchAction !== []) {
                        //         this.vue.$store.dispatch('actionGameOpenUpdateEventData', {
                        //             action: 'update_source_event',
                        //             data: {
                        //                 match_id: _data.selected_match_id_list,
                        //                 event: matchAction[0],
                        //                 updated_at: matchAction[2],
                        //                 timestamp: matchAction[1]
                        //             }
                        //         });
                        //     }
                        // }
                        break;
                    }
                    
                    // 更新關注會員下注的單量
                    case 'getMemberTagBet':
                        if (res) {
                            const _res = JSON.parse(res.data);
                            const _data = _res.data;
                            _data.forEach(dataSet => {
                                let homeBetCount = 0;
                                let awayBetCount = 0;
                                let otherBetCount = 0;
                                let tagIdArr = [];
                                const eventData = JSON.parse(dataSet).data;
                                for (const [key, countData] of Object.entries(eventData)) {
                                    // console.log(key, countData);
                                    if (countData) {
                                        // 讓球主客隊單量統計
                                        homeBetCount += countData.bet_type.handicap ? +countData.bet_type.handicap.home_count : 0;
                                        awayBetCount += countData.bet_type.handicap ? +countData.bet_type.handicap.away_count : 0;
                                        // 單雙主客隊單量統計
                                        homeBetCount += countData.bet_type.oddEven ? +countData.bet_type.oddEven.home_count : 0;
                                        awayBetCount += countData.bet_type.oddEven ? +countData.bet_type.oddEven.away_count : 0;
                                        // 大小主客隊單量統計
                                        homeBetCount += countData.bet_type.overUnder ? +countData.bet_type.overUnder.home_count : 0;
                                        awayBetCount += countData.bet_type.overUnder ? +countData.bet_type.overUnder.away_count : 0;
                                        // 其他玩法單量統計
                                        otherBetCount += countData.bet_type.other ? +countData.bet_type.other.count : 0;
                                        tagIdArr = countData.tag_id;
                                    }
                                    updateData[key] = {
                                        homeBetCount,
                                        awayBetCount,
                                        otherBetCount,
                                        tagIdArr
                                    };
                                }
                            });
                        }
                        this.vue.$store.dispatch('actionUpdateMemberTagBetCount', updateData);
                        break;
                    default:
                        break;
                }
                // 發送事件，讓Vue本身可以監聽
                this.emit(_eventName, _res.data);
                // 重新開始呼吸檢查
                this.reStartHeartbeat();
            } catch (e) {e}
        };
        _webSocket.onclose = () => {
            // 關閉時停止呼吸檢查
            console.log('closing  websocket');
            this.vue.$store.state.common.checkStatus.socket1.push({
                method: 'disconnect',
                textKey: 'TEXT_ERROR',
                time: new Date()
            });
            this.vue.$store.state.common.checkStatus.socket1.shift();
            this.stopHeartbeat();
            // 並且重新連線
            this.reConnect();
            // 把這一個實例的close事件清掉, 因為重新連線後又是一個新的實例
            _webSocket.onclose = () => {};
        };
        this.webSocket = _webSocket;
    }
    on (eventName, callBack, vm) {
        if (typeof callBack === 'function') {
            // 看該事件有沒有被註冊過了, 沒有的話就建立一個callback陣列
            this.listeners.has(eventName) || this.listeners.set(eventName, []);
            // 把傳進來的callback與vm存進陣列
            this.listeners.get(eventName).push({
                callBack,
                vm
            });
            return true;
        }
        return false;
    }
    off (eventName, callBack, vm) {
        const listeners = this.listeners.get(eventName);
        let index;
        // 如果該事件已經有被註冊 並且陣列中有callback
        if (listeners && listeners.length) {
            // 找出移除目標callback的index
            index = listeners.reduce((i, listener, index) => {
                let _i = i;
                if (typeof listener.callBack === 'function' && listener.callBack === callBack && listener.vm === vm) {
                    _i = index;
                }
                return _i;
            }, -1);
            // 如果有找到要刪除的目標 把它移除
            if (index > -1) {
                listeners.splice(index, 1);
                this.listeners.set(eventName, listeners);
                return true;
            }
        }
        return false;
    }
    // 廣播事件
    emit (eventName, resData) {
        const listeners = this.listeners.get(eventName);
        // 如果事件有註冊, 就把裡面所有的callback執行
        if (listeners && listeners.length) {
            listeners.forEach((listener) => {
                listener.callBack.call(listener.vm, resData);
            });
            return true;
        }
        return false;
    }
    startHeartbeat () {
        // 閒置30秒時發送一次呼吸檢查
        this.heartbeatClock = setInterval(() => {
            const _breathMsg = {
                foo: 'bar'
            };
            this.webSocket.send(JSON.stringify(_breathMsg));
        }, 30000);
    }
    stopHeartbeat () {
        clearInterval(this.heartbeatClock);
    }
    reStartHeartbeat () {
        // this.stopHeartbeat();
        // this.startHeartbeat();
        this.reConnectCount = 0;
        return;
    }
    reConnect () {
        console.log('reconnecting  websocket');
        this.vue.$store.state.common.checkStatus.socket1.push({
            method: 'reconnect',
            textKey: 'TEXT_CONNECTING',
            time: new Date()
        });
        this.vue.$store.state.common.checkStatus.socket1.shift();
        // 最大重新連線次數
        if (this.reConnectCount >= 5) {
            return;
        }

        this.reConnectCount += 1;
        this.init();
    }
}
