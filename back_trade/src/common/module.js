// import config from 'config/config';
// import i18n from 'config/i18n';
// import VueCookie from 'vue-cookie';

// import {
//     commonApi,
//     gameDownloadApi,
//     leagueApplyApi,
//     scoreInputApi,
//     gameOpenApi,
//     leagueReportApi,
//     operationRecordApi,
//     customerReportApi,
//     comboReportApi
// } from 'common/apiKernel';
// import {
//     findTheClosestDate,
//     setStorageItem,
//     getStorageItem
// } from 'common/func';
// import {
//     mapState,
//     mapActions,
//     mapGetters
// } from 'vuex';

// import store from 'store';

// export const mixins = {
//     hasFavorite: {
//         date () {
//             return {
//                 preFavorite: localStorage['favorite']
//             };
//         },
//         computed: {
//             ...mapState({
//                 favoriteObj: state => state.common.favoriteObject
//             }),
//             ...mapGetters({
//                 favoriteArr: 'commonGetFavoriteArray'
//             })
//         },
//         methods: {
//             ...mapActions(['actionCommonSetFavorite']),
//             /**
//              * 點選加入關注賽事
//              * @function GameOpen#_clickFavorite
//              * @param {String} MID 賽事id
//              * @param {Boolean} status 關注狀態
//              */
//             _clickFavorite ({
//                 MID,
//                 status
//             }) {
//                 const favoriteObject = _.cloneDeep(this.favoriteObj);
//                 if (status) {
//                     delete favoriteObject[MID];
//                 } else {
//                     favoriteObject[MID] = 1;
//                 }
//                 this.actionCommonSetFavorite({
//                     object: favoriteObject
//                 });
//                 // 放到localStorage
//                 setStorageItem({
//                     key: 'favorite',
//                     data: favoriteObject,
//                     expire: new Date().getTime() + 259200000
//                 });
//             },
//             // 多場賽事加入關注清單
//             addAllToFavourite ({
//                 MIDarr
//             }) {
//                 let favoriteObj = {
//                     ..._.cloneDeep(this.favoriteObj),
//                     ...MIDarr.reduce((ac, a) => ({
//                         ...ac,
//                         [a]: 1
//                     }), {})
//                 };
//                 this.actionCommonSetFavorite({
//                     object: favoriteObj
//                 });
//                 // 放到localStorage
//                 setStorageItem({
//                     key: 'favorite',
//                     data: favoriteObj,
//                     expire: new Date().getTime() + 259200000
//                 });
//             },
//             // 多場賽事取消關注清單
//             removeAllFromFavourite ({
//                 MIDarr
//             }) {
//                 let favoriteObj = _.cloneDeep(this.favoriteObj);
//                 MIDarr.forEach(id => {
//                     delete favoriteObj[id];
//                 });
//                 this.actionCommonSetFavorite({
//                     object: favoriteObj
//                 });
//                 // 放到localStorage
//                 setStorageItem({
//                     key: 'favorite',
//                     data: favoriteObj,
//                     expire: new Date().getTime() + 259200000
//                 });
//             },
//             updateFavorite () {
//                 if (this.preFavorite !== localStorage['favorite']) {
//                     this.preFavorite = localStorage['favorite'];
//                     this.actionCommonSetFavorite({
//                         object: getStorageItem('favorite') || {}
//                     });
//                 }
//             }
//         }
//     },
//     hasPage: {
//         computed: {
//             ...mapState({
//                 currentPage: state => state.common.currentPage,
//                 pageItem: state => state.common.pageItem
//             })
//         }
//     },
//     hasBatch: {
//         data () {
//             return {
//                 batch: []
//             };
//         },
//         computed: {
//             // 批次陣列組成物件搜尋方便搜尋
//             batchMap () {
//                 const _idMap = {};
//                 this.batch.forEach(item => {
//                     _idMap[item] = 1;
//                 });
//                 return _idMap;
//             },
//             // 是否處於批次狀態
//             onBatch () {
//                 return this.batch.length > 0;
//             }
//         }
//     }
// };

// export const commonModule = {
//     getInitInfo () {
//         commonApi.getInitInfo({
//             success: res => {
//                 commonApi.getLang({});
//             }
//         });
//     },
//     // 取得訊源健康狀態
//     getSourceHealthCheck () {
//         commonApi.getSourceHealthCheck().then(res => {
//             store.dispatch('actionCommonSetHealthCheck', res.data);
//             if (res.server_ts) {
//                 store.dispatch('actionCommonUpdateESTime', (res.server_ts) * 1000 - 14400000);
//             }
//         }).catch(error => {
//             console.log(error, '訊源健康api連線錯誤');
//             store.dispatch('actionCommonSetHealthCheck', {});
//         });
//         // 一分鐘更新一次訓源健康狀態
//         setInterval(() => {
//             commonApi.getSourceHealthCheck().then(res => {
//                 store.dispatch('actionCommonSetHealthCheck', res.data);
//                 if (res.server_ts) {
//                     store.dispatch('actionCommonUpdateESTime', (res.server_ts) * 1000 - 14400000);
//                 }
//             });
//         }, 60000);
//     },
//     routerLimitMode (toLimitMode, requirement) {
//         // 如果現在是限制狀態，且要導向的router並非限制狀態可取用的
//         if (requirement === false) {
//             return 0;
//         }
//         if (store.state.common.ajaxData.info) {
//             // 該使用者是否為限制用戶
//             const isLimitMode = store.state.common.ajaxData.info.permission.limit_mode;
//             // 連limit mode都沒有，代表沒登入
//             if (!isLimitMode) {
//                 return 0;
//             }
//             if (isLimitMode === 'Y' && toLimitMode !== 'Y') {
//                 store.dispatch('actionCommonLoading', false);
//                 return {
//                     name: 'scoreInputByPeriod',
//                     params: {
//                         sport_id: 1
//                     }
//                 };
//             }
//         } else {
//             return {
//                 name: 'overview'
//             };
//         }
//     },
//     newRouterPermission (toPermissionGroup, toPermissionKey, from) {
//         // 如果沒有頁面權限則轉回首頁
//         if (JSON.parse(VueCookie.get('permissionList'))) {
//             // 該使用者是否為限制用戶
//             const permissionList = JSON.parse(VueCookie.get('permissionList'));
//             // 權限表為false時，禁止進入
//             // 權限表尚未加入權限時，預設禁止進入
//             if (!permissionList[toPermissionGroup] || !permissionList[toPermissionGroup][toPermissionKey]) {
//                 // 如果是另開新頁的狀況，則導到error頁，並於三秒後關閉
//                 if (from.name === null) {
//                     return {
//                         name: 'error', // 到時候要導轉到錯誤頁面
//                         params: {hint: 'TEXT_PERMISSION_DENIED'}
//                     };
//                 }
//                 // 如果是導轉頁面的情況，則於上方顯示"此權限尚未開放"，並回原頁
//                 store.dispatch('actionCommonPushErrorMsg', {
//                     id: new Date().getTime(),
//                     msg: i18n.t('TEXT_PERMISSION_DENIED')
//                 });
//                 store.dispatch('actionCommonLoading', false);
//                 return {
//                     ...from
//                 };
//             }
//             return 0;
//         } else {
//             // 若沒取得使用者權限列表(代表沒登入)，則導回首頁
//             return {
//                 name: 'overview'
//             };
//         }
//     },
//     routerPermission (toPermission) {
//         // 如果沒有頁面權限則轉回首頁
//         // const _overviewName = `overview${to.params.single ? 'Single' : ''}`;
//         if (store.state.common.ajaxData.info) {
//             // 該使用者是否為限制用戶
//             const permission = store.state.common.ajaxData.info.permission;

//             if (permission[toPermission] !== 'Y') {
//                 store.dispatch('actionCommonLoading', false);
//                 return {
//                     name: 'overview'
//                 };
//             }
//             return 0;
//         } else {
//             return {
//                 name: 'overview'
//             };
//         }
//     }
// };
// // 賽事下載Module
// export const gameDownloadModule = {
//     updatePage (sportId = 0, date = '', next = () => {}) {
//         const gameDownloadApiConfig = config.apiConfig.gameDownload;
//         let _sportId = sportId;
//         let _date = date;
//         store.dispatch('actionCommonLoading', true);
//         commonApi
//             .getSportListByRouter({
//                 stateName: 'gameDownload',
//                 ajaxName: 'sportList',
//                 data: {
//                     type: gameDownloadApiConfig.sportListType
//                 },
//                 success: res =>
//                     new Promise((resolve, reject) => {
//                         // 如果已經有選日期跟球種就直接call api
//                         if (_sportId) {
//                             const find = res.data.find(val => {
//                                 return +val.id === +_sportId;
//                             });
//                             // 選擇的球種沒有在球種列表內則取第一個球種
//                             if (!find) {
//                                 _sportId = res.data[0].id;
//                             }
//                             store.dispatch('actionCommonSelectGame', {
//                                 stateName: 'gameDownload',
//                                 gameId: _sportId
//                             });
//                             commonApi
//                                 .getDateList({
//                                     stateName: 'gameDownload',
//                                     ajaxName: 'dateList',
//                                     data: {
//                                         sport_id: _sportId,
//                                         type: gameDownloadApiConfig.matchDateType
//                                     },
//                                     success: res =>
//                                         new Promise((resolve, reject) => {
//                                             _date = findTheClosestDate({
//                                                 dateArr: res.data,
//                                                 findDate: _date
//                                             });
//                                             if (!_date) {
//                                                 store.dispatch(
//                                                     'actionCommonSetAjaxData', {
//                                                         stateName: 'gameDownload',
//                                                         ajaxName: 'gameList',
//                                                         data: {}
//                                                     }
//                                                 );
//                                                 return resolve();
//                                             }
//                                             store.dispatch(
//                                                 'actionCommonSelectDate', {
//                                                     stateName: 'gameDownload',
//                                                     dateStr: _date
//                                                 }
//                                             );
//                                             gameDownloadApi
//                                                 .getGameDownloadList({
//                                                     data: {
//                                                         date: _date,
//                                                         sport_id: _sportId
//                                                     }
//                                                 })
//                                                 .then(() => {
//                                                     resolve();
//                                                 });
//                                         })
//                                 })
//                                 .then(() => {
//                                     resolve();
//                                 });
//                         } else {
//                             resolve();
//                         }
//                     })
//             })
//             .then(() => {
//                 store.dispatch('actionCommonLoading', false);
//                 next();
//             });
//     },
//     gameSwitch (gId, isOver, matchType = 1) {
//         return new Promise((resolve, reject) => {
//             // 開啟不須詢問
//             // if (isOver === 'N') {
//             store.dispatch('actionCommonLoading', true);
//             gameOpenApi.postUpdateGameOverStatus({
//                 data: {
//                     match_id: gId,
//                     match_type: matchType,
//                     is_over: isOver === 'N' ? 'Y' : 'N'
//                 },
//                 success: () => {
//                     store.dispatch('actionCommonLoading', false);
//                     return resolve();
//                 }
//             });
//         });
//     }
// };

// // 冠軍賽次下載Module
// export const TournamentDownloadModule = {
//     updatePage (sportId = 0, date = '', displayAllOutright = false, next = () => {}) {
//         const tournamentDownloadApiConfig = config.apiConfig.tournamentDownload;
//         let _sportId = sportId;
//         let _date = date;
//         store.dispatch('actionCommonLoading', true);
//         commonApi
//                 .getSportListByRouter({
//                     stateName: 'gameDownload',
//                     ajaxName: 'sportList',
//                     data: {
//                         type: tournamentDownloadApiConfig.sportListType
//                     },
//                     success: res =>
//                         new Promise((resolve, reject) => {
//                             // 如果已經有選日期跟球種就直接call api
//                             if (_sportId) {
//                                 const find = res.data.find(val => {
//                                     return +val.id === +_sportId;
//                                 });
//                                 // 選擇的球種沒有在球種列表內則取第一個球種
//                                 if (!find) {
//                                     _sportId = res.data[0].id;
//                                 }
//                                 store.dispatch('actionCommonSelectGame', {
//                                     stateName: 'gameDownload',
//                                     gameId: _sportId
//                                 });
//                                 commonApi
//                                     .getDateList({
//                                         stateName: 'gameDownload',
//                                         ajaxName: 'dateList',
//                                         data: {
//                                             sport_id: _sportId,
//                                             type: tournamentDownloadApiConfig.matchDateType
//                                         },
//                                         success: res =>
//                                             new Promise((resolve, reject) => {
//                                                 _date = findTheClosestDate({
//                                                     dateArr: res.data,
//                                                     findDate: _date
//                                                 });
//                                                 if (!_date) {
//                                                     store.dispatch(
//                                                         'actionCommonSetAjaxData', {
//                                                             stateName: 'gameDownload',
//                                                             ajaxName: 'gameList',
//                                                             data: {}
//                                                         }
//                                                     );
//                                                     return resolve();
//                                                 }
//                                                 store.dispatch(
//                                                     'actionCommonSelectDate', {
//                                                         stateName: 'gameDownload',
//                                                         dateStr: _date
//                                                     }
//                                                 );
//                                                 gameDownloadApi
//                                                     .getGameDownloadList({
//                                                         data: {
//                                                             date: displayAllOutright ? null : _date,
//                                                             sport_id: _sportId,
//                                                             match_type: tournamentDownloadApiConfig.matchType
//                                                         }
//                                                     })
//                                                     .then(() => {
//                                                         resolve();
//                                                     });
//                                             })
//                                     })
//                                     .then(() => {
//                                         resolve();
//                                     });
//                             } else {
//                                 resolve();
//                             }
//                         })
//                 })
//                 .then(() => {
//                     store.dispatch('actionCommonLoading', false);
//                     next();
//                 });
//     },
//     gameSwitch (gId, isOver) {
//         const tournamentDownloadApiConfig = config.apiConfig.tournamentDownload;
//         return new Promise((resolve, reject) => {
//                 // 開啟不須詢問
//                 // if (isOver === 'N') {
//             store.dispatch('actionCommonLoading', true);
//             gameOpenApi.postUpdateGameOverStatus({
//                 data: {
//                     match_id: gId,
//                     match_type: tournamentDownloadApiConfig.matchType,
//                     is_over: isOver === 'N' ? 'Y' : 'N'
//                 },
//                 success: () => {
//                     store.dispatch('actionCommonLoading', false);
//                     return resolve();
//                 }
//             });
//         });
//     }
// };

// export const gameOpenModule = {
//     // 定時的更新資料，不需要不斷Call球種跟Date，只需更新賽事資料
//     updateFunc ({
//         sportId = 0,
//         date = '',
//         isLive = 'N',
//         getMatch = 'Y',
//         // 是否為冠軍賽
//         isTournament = false,
//         oddsType = 'C',
//         gameId = [],
//         webSocketApi,
//         displayAllOutright = false
//     }) {
//         let _sportId = sportId;
//         if (gameId.length !== 0 && getMatch !== 'Y') {
//             gameId.forEach(id => {
//                 store.dispatch('actionGameOpenLoading', {
//                     value: true,
//                     data: +id
//                 });
//             });
//         } else {
//             store.dispatch('actionGameOpenLoading', {
//                 value: true,
//                 data: 'all'
//             });
//         }
//         const sportList = store.state.gameOpen.ajaxData.sportList;
//         const find = sportList.find(val => {
//             return +val.id === +_sportId;
//         });
//         // 確認該球種是否正確在資料中，沒有的話取第一個球種
//         if (!find) {
//             _sportId = sportList[0].id;
//         }
//         // 冠軍賽的事件
//         if (isTournament) {
//             const _tournamentData = {
//                 date: displayAllOutright ? null : date,
//                 sport_id: `${_sportId}`,
//                 get_all_match: gameId.length !== 0 ? getMatch : 'Y',
//                 match_id_list: gameId
//             };
//             const getTournamentOdds = {
//                 event: 'getTournamentOdds',
//                 data: _tournamentData
//             };
//             webSocketApi.sendWS(getTournamentOdds);
//         } else {
//             // 一般賽事
//             const _data = {
//                 date: date,
//                 sport_id: `${_sportId}`,
//                 is_live: isLive,
//                 get_match: gameId.length !== 0 ? getMatch : 'Y',
//                 odds_type: oddsType,
//                 is_for_all: 'N',
//                 MID: gameId
//             };
//             const getOddsEventV3 = {
//                 event: 'getOddsDataV3',
//                 data: _data
//             };
//             webSocketApi.sendWS(getOddsEventV3);
//         }
//     },
//     // 初始化更新頁面
//     initPage ({
//         sportId = 0,
//         date = '',
//         isLive = 'N',
//         getMatch = 'Y',
//         // 是否為冠軍賽
//         isTournament = false,
//         oddsType = 'C',
//         gameId = [],
//         template = '',
//         webSocketApi = null,
//         displayAllOutright = false
//     }) {
//         if (!webSocketApi) {
//             return;
//         }
//         store.dispatch('actionCommonLoading', true);
//         let _sportId = sportId;
//         let _date = date;
//         const gameOpenApiConfig = config.apiConfig.gameOpen[template];
//         let sportListTarget = isTournament ? 'getSportListByRouter' : 'getSportList';
//         // 第一步先Call 球種
//         commonApi[sportListTarget]({
//             stateName: 'gameOpen',
//             ajaxName: 'sportList',
//             data: {
//                 type: isTournament ? 'all' : gameOpenApiConfig.sportListType,
//                 template: gameOpenApiConfig.templateId,
//                 sport_id: sportId
//             },
//             success: res => {
//                 res.data.forEach(sport => {
//                     sport.is_for_all = 'N';
//                 });
//                 const find = res.data.find(val => {
//                     return +val.id === +_sportId;
//                 });
//                 // 選擇的球種沒有在球種列表內則取第一個球種
//                 if (!find) {
//                     _sportId = res.data[0].id;
//                 }
//                 // 把球種存起來
//                 store.dispatch('actionCommonSelectGame', {
//                     stateName: 'gameOpen',
//                     gameId: _sportId,
//                     template
//                 });
//                 // 第二部：Call可用日期清單
//                 commonApi.getDateList({
//                     stateName: 'gameOpen',
//                     ajaxName: 'dateList',
//                     data: {
//                         sport_id: _sportId,
//                         type: gameOpenApiConfig.matchDateType
//                     },
//                     success: res => {
//                         store.dispatch('actionCommonLoading', false);
//                         _date = findTheClosestDate({
//                             dateArr: res.data,
//                             findDate: _date
//                         });
//                         // 如果沒有可以用的日期，代表該球種沒任何賽事
//                         if (!_date) {
//                             store.dispatch('actionCommonSetAjaxData', {
//                                 stateName: 'gameOpen',
//                                 ajaxName: 'gameList',
//                                 data: []
//                             });
//                             store.dispatch('actionCommonSetAjaxData', {
//                                 stateName: 'gameOpen',
//                                 ajaxName: 'betList',
//                                 sportId: _sportId,
//                                 data: []
//                             });
//                             return;
//                         }
//                         // 把日期存起來
//                         store.dispatch('actionCommonSelectDate', {
//                             stateName: 'gameOpen',
//                             dateStr: _date,
//                             template
//                         });
//                         if (isTournament) {
//                             // 冠軍賽事的事件data
//                             const _tournamentData = {
//                                 date: displayAllOutright ? null : _date,
//                                 sport_id: `${_sportId}`,
//                                 get_all_match: getMatch,
//                                 match_id_list: gameId
//                             };
//                             const getTournamentOdds = {
//                                 event: 'getTournamentOdds',
//                                 data: _tournamentData
//                             };
//                             webSocketApi.sendWS(getTournamentOdds);
//                         } else {
//                             // 一般賽事
//                             // isForAll是舊參數，用不到，都用N即可
//                             const _data = {
//                                 date: _date,
//                                 sport_id: `${_sportId}`,
//                                 is_live: isLive,
//                                 get_match: getMatch,
//                                 odds_type: oddsType,
//                                 is_for_all: 'N',
//                                 MID: gameId
//                             };

//                             const getOddsEventV3 = {
//                                 event: 'getOddsDataV3',
//                                 data: _data
//                             };
//                             webSocketApi.sendWS(getOddsEventV3);
//                         }

//                         store.dispatch('actionGameOpenLoading', {
//                             value: true,
//                             data: 'all'
//                         });
//                     },
//                     fail: () => {
//                         store.dispatch('actionCommonLoading', false);
//                     }
//                 });
//             }
//         });
//     }
// };

// export const leagueApplyModule = {
//     updatePage ({
//         sportId = 0,
//         next = () => {},
//         init = false
//     }) {
//         let _sportId = sportId;
//         const _sportList = store.getters.commonGetSportList;
//         const _find = _sportList.find(item => {
//             return item.id == _sportId;
//         });
//         // 如果球種id沒在列表內則選擇第一個球種
//         if (!_find) {
//             _sportId = _sportList[0].id;
//         }
//         store.dispatch('actionCommonSelectGame', {
//             stateName: 'leagueApply',
//             gameId: _sportId
//         });
//         store.dispatch('actionCommonLoading', true);
//         Promise.all([
//             leagueApplyApi.getLeagueApplyList({
//                 data: {
//                     sport_id: _sportId
//                 }
//             }),
//             new Promise((resolve, reject) => {
//                 // 如果是第一次取才取卡片列表
//                 if (init) {
//                     commonApi.getCardList().then(() => {
//                         resolve();
//                     });
//                 } else {
//                     resolve();
//                 }
//             })
//         ]).then(() => {
//             store.dispatch('actionCommonLoading', false);
//             next();
//         });
//     }
// };
// export const tournamentScoreInputModule = {
//     updateMatchList ({
//         sportId = 0,
//         date = '',
//         saveToStore = true
//     }) {
//         return new Promise((resolve) => {
//             scoreInputApi
//             .getTournamentEventList({
//                 data: {
//                     date: date,
//                     sport_id: sportId,
//                     status: 0
//                 },
//                 saveToStore: saveToStore
//             })
//             .then((res) => {
//                 return resolve(res);
//             })
//             .catch(() => {
//                 return resolve();
//             });
//         });
//     },
//     updateScoreSet (gameId) {
//         return new Promise((resolve, reject) => {
//             scoreInputApi
//                 .getTournamentScoreList({
//                     data: {
//                         match_id: gameId
//                     },
//                     saveToStore: false
//                 })
//                 .then((res) => {
//                     return resolve(res);
//                 })
//                 .catch(() => {
//                     return reject();
//                 });
//         });
//     },
//     updateTournamentScoreSettlement ({
//         sportId = 0,
//         date = '',
//         // firstTime = false,
//         // nowOpenGameId = 0,
//         clock = 'N'
//     }) {
//         let _sportId = sportId;
//         let _date = date;
//         // let _gameId = nowOpenGameId;
//         if (clock === 'N') {
//             // store.dispatch('actionCommonLoading', true);
//         }
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonSelectGame', {
//                 stateName: 'scoreInput',
//                 gameId: _sportId
//             });
//             commonApi
//                 .getDateList({
//                     stateName: 'scoreInput',
//                     ajaxName: 'dateList',
//                     data: {
//                         sport_id: _sportId,
//                         // 冠軍賽
//                         type: 1
//                     },
//                     success: res => {
//                         _date = findTheClosestDate({
//                             dateArr: res.data,
//                             findDate: _date
//                         });
//                             // 如果沒有任何日期就清空資料並離開
//                         if (!_date) {
//                             store.dispatch(
//                                 'actionCommonSetAjaxData', {
//                                     stateName: 'scoreInput',
//                                     ajaxName: 'scoreInputList',
//                                     data: []
//                                 }
//                             );
//                             store.dispatch(
//                                 'actionCommonSetAjaxData', {
//                                     stateName: 'scoreInput',
//                                     ajaxName: 'scoreInputContent',
//                                     data: []
//                                 }
//                             );
//                             return resolve();
//                         }
//                         store.dispatch(
//                             'actionCommonSelectDate', {
//                                 stateName: 'scoreInput',
//                                 dateStr: _date
//                             }
//                         );
//                         scoreInputApi
//                             .getTournamentEventList({
//                                 data: {
//                                     date: _date,
//                                     sport_id: _sportId
//                                 }
//                             })
//                             .finally(() => {
//                                 return resolve();
//                             });
//                     }
//                 })
//                 .finally(() => {
//                     if (clock === 'N') {
//                         // store.dispatch('actionCommonLoading', false);
//                     }
//                 });
//         });
//     }

// };
// export const scoreInputModule = {
//     updateScoreSet (gameId) {
//         return new Promise((resolve, reject) => {
//             scoreInputApi
//                 .getScoreInputContentByPeriod({
//                     data: {
//                         match_id: gameId
//                     },
//                     saveToStore: false
//                 })
//                 .then((res) => {
//                     return resolve(res);
//                 })
//                 .catch(() => {
//                     return reject();
//                 });
//         });
//     },
//     updateMatchList ({
//         sportId = 0,
//         date = ''
//     }) {
//         scoreInputApi
//             .getScoreInputList({
//                 data: {
//                     date: date,
//                     sport_id: sportId,
//                     status: 0
//                 }
//             });
//     },
//     updateScoreInputList ({
//         sportId = 0,
//         date = ''
//     }) {
//         return new Promise((resolve, reject) => {
//             scoreInputApi.getScoreInputList({
//                 data: {
//                     date: date,
//                     sport_id: sportId,
//                     status: 0
//                 }
//             }).then((res) => {
//                 if (res.data.length) {
//                     store.dispatch(
//                         'actionCommonSetAjaxData', {
//                             stateName: 'scoreInput',
//                             ajaxName: 'scoreInputList',
//                             data: res.data
//                         }
//                     );
//                 }
//                 resolve();
//             });
//         });
//     },
//     getScoreInputScores ({
//         gameId = 0
//     }) {
//         return new Promise((resolve, reject) => {
//             scoreInputApi
//                 .getScoreInputRawContent({
//                     data: {
//                         match_id: gameId
//                     }
//                 })
//                 .then((res) => {
//                     resolve(res);
//                 });
//         });
//     },
//     updateScoreInputByPeriod ({
//         sportId = 0,
//         date = '',
//         nowOpenGameId = 0,
//         clock = 'N'
//     }) {
//         const scoreInputApiConfig = config.apiConfig.scoreInput;
//         let _sportId = sportId;
//         let _date = date;
//         // let _gameId = nowOpenGameId;
//         if (clock === 'N') {
//             // store.dispatch('actionCommonLoading', true);
//         }
//         this.onUpdate = true;

//         // const inputListSuccessFunction = res =>
//         //     new Promise((resolve, reject) => {
//         //         const find = res.data.find(item => {
//         //             return item['match_id'] === _gameId;
//         //         });
//         //         // 如果是初次呼叫或賽事id不在賽事列表中 則取第一場賽事id
//         //         if (!find || firstTime) {
//         //             _gameId = res.data[0]['match_id'];
//         //         }
//         //         // 如果不是初次呼叫 則觸發點選賽事事件, 否則直接取賽事資料就好
//         //         if (!firstTime) {
//         //             console.log('module更新啦');
//         //             this.$_clickGame({
//         //                 gameId: _gameId,
//         //                 clock: clock
//         //             });
//         //         } else {
//         //             scoreInputApi
//         //                 .getScoreInputContentByPeriod({
//         //                     data: {
//         //                         match_id: _gameId
//         //                     }
//         //                 })
//         //                 .then(() => {
//         //                     resolve();
//         //                 });
//         //         }
//             // });
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonSelectGame', {
//                 stateName: 'scoreInput',
//                 gameId: _sportId
//             });
//             commonApi
//                 .getDateList({
//                     stateName: 'scoreInput',
//                     ajaxName: 'dateList',
//                     data: {
//                         sport_id: _sportId,
//                         type: scoreInputApiConfig.dateType
//                     },
//                     success: res => {
//                         _date = findTheClosestDate({
//                             dateArr: res.data,
//                             findDate: _date
//                         });
//                             // 如果沒有任何日期就清空資料並離開
//                         if (!_date) {
//                             store.dispatch(
//                                 'actionCommonSetAjaxData', {
//                                     stateName: 'scoreInput',
//                                     ajaxName: 'scoreInputList',
//                                     data: []
//                                 }
//                             );
//                             store.dispatch(
//                                 'actionCommonSetAjaxData', {
//                                     stateName: 'scoreInput',
//                                     ajaxName: 'scoreInputContent',
//                                     data: []
//                                 }
//                             );
//                             return resolve();
//                         }
//                         store.dispatch(
//                             'actionCommonSelectDate', {
//                                 stateName: 'scoreInput',
//                                 dateStr: _date
//                             }
//                         );
//                         scoreInputApi
//                             .getScoreInputList({
//                                 data: {
//                                     date: _date,
//                                     sport_id: _sportId,
//                                     status: 0
//                                 }
//                             })
//                         .finally(() => {
//                             return resolve();
//                         });
//                     }

//                 })
//                 .finally(() => {
//                     if (clock === 'N') {
//                         // store.dispatch('actionCommonLoading', false);
//                     }
//                 });
//             this.onUpdate = false;
//         });
//     },
//     getReferenceScores ({
//         gameId = 0
//     }) {
//         // 這裡直接將訊源id寫死，讓module控管要抓的訊源參考比分
//         // 11是Sunplus
//         // store.dispatch('actionCommonLoading', true);
//         let sunplusUpdateObj = {};
//         let matrixUpdateObj = {};

//         const sunplusRef =
//             scoreInputApi.getReferenceScores({
//                 data: {
//                     xbb_event_id: gameId,
//                     source_id: 11
//                 }
//             }).then(res => {
//                 if (res) {
//                     if (res.status === 'Y') {
//                         sunplusUpdateObj = {
//                             ...res.data[0],
//                             source: 11
//                         };
//                         // store.dispatch('actionSetReferenceScores', {
//                         //     ...res.data[0],
//                         //     source: 11,
//                         //     gameId: gameId
//                         // });
//                     } else {
//                         sunplusUpdateObj = {
//                             source: 11,
//                             score_data: []
//                         };
//                         // store.dispatch('actionSetReferenceScores', {
//                         //     source: 11,
//                         //     score_data: [],
//                         //     gameId: gameId
//                         // });
//                     }
//                 } else {
//                     sunplusUpdateObj = {
//                         source: 11,
//                         score_data: []
//                     };
//                     // store.dispatch('actionSetReferenceScores', {
//                     //     source: 11,
//                     //     score_data: [],
//                     //     gameId: gameId
//                     // });
//                 };
//             });
//         // 10是Matrix
//         const matrixRef =
//             scoreInputApi.getReferenceScores({
//                 data: {
//                     xbb_event_id: gameId,
//                     source_id: 10
//                 }
//             }).then(res => {
//                 if (res) {
//                     if (res.status === 'Y') {
//                         matrixUpdateObj = {
//                             ...res.data[0],
//                             source: 10
//                         };
//                         // store.dispatch('actionSetReferenceScores', {
//                         //     ...res.data[0],
//                         //     source: 10,
//                         //     gameId: gameId
//                         // });
//                     } else {
//                         matrixUpdateObj = {
//                             source: 10,
//                             score_data: []
//                         };
//                         // store.dispatch('actionSetReferenceScores', {
//                         //     source: 10,
//                         //     score_data: [],
//                         //     gameId: gameId
//                         // });
//                     }
//                 } else {
//                     matrixUpdateObj = {
//                         source: 10,
//                         score_data: []
//                     };
//                     // store.dispatch('actionSetReferenceScores', {
//                     //     source: 10,
//                     //     score_data: [],
//                     //     gameId: gameId
//                     // });
//                 };
//             });
//         return new Promise((resolve) => {
//               // 賽事id不得為0或null
//             if (gameId === 0 || !gameId) {
//                 return resolve({});
//             }
//             Promise.all([matrixRef, sunplusRef]).then(() => {
//                 return resolve({
//                     matrixUpdateObj,
//                     sunplusUpdateObj
//                 });
//             });
//         });
//     }
// };
// export const forecastModule = {
//     updatePage ({
//         sportId = 0,
//         date = ''
//     }) {
//         let _sportId = sportId;
//         let _date = date;
//         return commonApi.getSportListByRouter({
//             stateName: 'forecastResult',
//             ajaxName: 'sportList',
//             data: {
//                 sport_id: _sportId,
//                 type: 'all'
//             },
//             success: res =>
//                 new Promise((resolve, reject) => {
//                     const find = res.data.find(val => {
//                         return +val.id === +_sportId;
//                     });
//                     // 選擇的球種沒有在球種列表內則取第一個球種
//                     if (!find) {
//                         _sportId = res.data[0].id;
//                     }
//                     store.dispatch('actionCommonSelectGame', {
//                         stateName: 'forecastResult',
//                         gameId: _sportId
//                     });
//                     commonApi.getDateList({
//                         stateName: 'forecastResult',
//                         ajaxName: 'dateList',
//                         data: {
//                             sport_id: _sportId,
//                             type: 2
//                         },
//                         success: res =>
//                             new Promise((resolve, reject) => {
//                                 _date = findTheClosestDate({
//                                     dateArr: res.data,
//                                     findDate: _date
//                                 });

//                                 store.dispatch(
//                                     'actionCommonSelectDate', {
//                                         stateName: 'forecastResult',
//                                         dateStr: _date
//                                     }
//                                 );
//                                 return resolve();
//                             })
//                     });
//                 })
//         });
//     }
// };
// export const customerReportModule = {
//     /**
//      * 取得所有標籤列表，預設如果沒有輸入時間則會回傳一個月內資料
//      */
//     getAllReport ({
//         startTime = '',
//         endTime = '',
//         member = '',
//         action = 'default'
//     }) {
//         const _startTime = startTime;
//         const _endTime = endTime;
//         const _member = member;
//         store.dispatch('actionCommonLoading', true);
//         if (action === 'default') {
//             customerReportApi.getAllReport({
//                 data: {
//                     startTime: _startTime,
//                     endTime: _endTime,
//                     member: _member
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 store.dispatch(
//                     'actionCommonSetAjaxData', {
//                         stateName: 'customerReport',
//                         ajaxName: 'allTagData',
//                         data: res
//                     }
//                 );
//             }).catch(() => {
//                 store.dispatch('actionCommonLoading', false);
//             });
//         }
//         if (action === 'top500') {
//             customerReportApi.getTop500Report({
//                 data: {
//                     startTime: _startTime,
//                     endTime: _endTime,
//                     member: _member
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 const {rank, member_list} = res;
//                 const rankResult = [{
//                     color: 'red',
//                     id: 1,
//                     member_total: rank.members_count,
//                     selection_count: rank.selection_count,
//                     name: i18n.t('TEXT_PROFIT_TOP_500'),
//                     gross_cny: rank.gross_cny,
//                     stake_cny: rank.stake_cny,
//                     gross_percent_cny: rank.gross_percent_cny
//                 }];
//                 store.dispatch(
//                     'actionCommonSetAjaxData', {
//                         stateName: 'customerReport',
//                         ajaxName: 'allTagData',
//                         data: rankResult
//                     }
//                 );
//                 const memberResult = [];
//                 member_list.forEach(val => {
//                     memberResult.push({
//                         id: val.member_id,
//                         username: val.member_total,
//                         selection_count: val.selection_count,
//                         gross_cny: val.gross_cny,
//                         stake_cny: val.stake_cny,
//                         tag_id: val.tag_id,
//                         tag_name: val.tag_name,
//                         tag_color: val.tag_color,
//                         domain: val.domain,
//                         domain_partner: val.domain_partner,
//                         gross_percent_cny: val.gross_percent_cny
//                     });
//                 });

//                 store.dispatch(
//                     'actionCommonSetAjaxData', {
//                         stateName: 'customerReport',
//                         ajaxName: 'reportByTag',
//                         data: memberResult
//                     }
//                 );
//             }).catch(() => {
//                 store.dispatch('actionCommonLoading', false);
//             });
//         }
//     },
//     /**
//      * 取得所有標籤列表，預設如果沒有輸入時間則會回傳一個月內資料
//      */
//     getReportByTags ({
//         startTime = '',
//         endTime = '',
//         member = '',
//         tagId = ''
//     }) {
//         const _startTime = startTime;
//         const _endTime = endTime;
//         const _tagId = tagId;
//         const _member = member;
//         store.dispatch('actionCommonLoading', true);
//         customerReportApi.getReportByTags({
//             data: {
//                 startTime: _startTime,
//                 endTime: _endTime,
//                 tag_id: _tagId,
//                 member: _member
//             }
//         }).then(res => {
//             store.dispatch('actionCommonLoading', false);
//             store.dispatch(
//                 'actionCommonSetAjaxData', {
//                     stateName: 'customerReport',
//                     ajaxName: 'reportByTag',
//                     data: res
//                 }
//             );
//         }).catch(() => {
//             store.dispatch('actionCommonLoading', false);
//         });
//     },
//     /**
//      * 取得該會員所有注單明細
//      */
//     getWagerInfoByMember ({
//         startTime = '',
//         endTime = '',
//         member = ''
//     }) {
//         const _startTime = startTime;
//         const _endTime = endTime;
//         const _member = member;
//         store.dispatch('actionCommonLoading', true);
//         customerReportApi.getWagerInfoByMember({
//             data: {
//                 startTime: _startTime,
//                 endTime: _endTime,
//                 member: _member
//             }
//         }).then(res => {
//             store.dispatch('actionCommonLoading', false);
//             store.dispatch(
//                 'actionCommonSetAjaxData', {
//                     stateName: 'customerReport',
//                     ajaxName: 'memberWagerData',
//                     data: res.wager_data
//                 }
//             );
//         }).catch(() => {
//             store.dispatch('actionCommonLoading', false);
//         });
//     },
//     /**
//      * 清空所有資料(在更新輸入的query時清空)
//      */
//     clearData () {
//         store.dispatch('actionCommonSetAjaxData', {
//             stateName: 'customerReport',
//             ajaxName: 'allTagData',
//             data: []
//         });
//         store.dispatch('actionCommonSetAjaxData', {
//             stateName: 'customerReport',
//             ajaxName: 'reportByTag',
//             data: []
//         });
//     }
// };

// export const leagueReportModule = {
//     getSportList () {
//         commonApi.getSportListByRouter({
//             stateName: 'leagueReport',
//             ajaxName: 'sportList',
//             data: {
//                 type: 'all'
//             }
//         });
//     },
//     clearFirstLayer () {
//         store.dispatch(
//             'actionCommonSetAjaxData', {
//                 stateName: 'leagueReport',
//                 ajaxName: 'firstLayerData',
//                 data: []
//             }
//         );
//     },
//     /**
//      * 取得列表by日期 第一層
//      */
//     getStakesByDate ({
//         start_date = '',
//         end_date = '',
//         mode = 'date',
//         sports = [],
//         is_live = undefined,
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N',
//         gid = []
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeByDate({
//                 data: {
//                     start_date: start_date,
//                     end_date: end_date,
//                     mode: mode,
//                     sports: sports,
//                     is_live,
//                     member_fuzzy: member_fuzzy,
//                     member: member,
//                     is_test: is_test,
//                     gid: gid
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 store.dispatch(
//                     'actionCommonSetAjaxData', {
//                         stateName: 'leagueReport',
//                         ajaxName: 'firstLayerData',
//                         data: res
//                     }
//                 );
//                 return resolve(res);
//             }).catch((err) => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     /**
//      * 取得列表by球種 第二層
//      */
//     getStakeBySports ({
//         start_date = '',
//         is_live = undefined,
//         end_date = '',
//         sports = [],
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N',
//         gid = []
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeBySports({
//                 data: {
//                     start_date: start_date,
//                     is_live,
//                     end_date: end_date,
//                     sports: sports,
//                     gid: gid,
//                     member: member,
//                     member_fuzzy: member_fuzzy,
//                     is_test: is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     /**
//      * 取得列表by聯盟 第三層
//      */
//     getStakeByLeagues ({
//         start_date = '',
//         end_date = '',
//         sport_id = 0,
//         is_live = undefined,
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N',
//         gid = []
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeByLeagues({
//                 data: {
//                     start_date: start_date,
//                     end_date: end_date,
//                     sport_id: sport_id,
//                     gid: gid,
//                     is_live,
//                     member: member,
//                     member_fuzzy: member_fuzzy,
//                     is_test: is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     /**
//      * 取得列表by玩法 第四層
//      */
//     getStakeByBetType ({
//         start_date = '',
//         end_date = '',
//         league_id = '',
//         gid = [],
//         is_live = undefined,
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N'
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeByBetType({
//                 data: {
//                     start_date: start_date,
//                     end_date: end_date,
//                     gid: gid,
//                     is_live,
//                     member: member,
//                     league_id: league_id,
//                     member_fuzzy: member_fuzzy,
//                     is_test: is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     /**
//      * 取得列表by賽事 3.5層
//      */
//     getStakeByMatch ({
//         start_date = '',
//         end_date = '',
//         league_id = '',
//         is_live = undefined,
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N',
//         gid = []
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeByMatch({
//                 data: {
//                     start_date: start_date,
//                     end_date: end_date,
//                     league_id: league_id,
//                     member: member,
//                     is_live,
//                     member_fuzzy: member_fuzzy,
//                     is_test: is_test,
//                     gid: gid
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 store.dispatch(
//                     'actionCommonSetAjaxData', {
//                         stateName: 'leagueReport',
//                         ajaxName: 'firstLayerData',
//                         data: res
//                     }
//                 );
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     /**
//      * 取得列表by會員 第五層
//      */
//     getStakeByMember ({
//         start_date = '',
//         end_date = '',
//         bet_id = undefined,
//         member_fuzzy = 'Y',
//         member = '',
//         league_id = '',
//         is_live = undefined,
//         is_test = 'N',
//         gid = []
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             leagueReportApi.getStakeByMember({
//                 data: {
//                     start_date: start_date,
//                     end_date: end_date,
//                     bet_id: bet_id,
//                     is_live,
//                     gid: gid,
//                     member: member,
//                     league_id: league_id,
//                     member_fuzzy: member_fuzzy,
//                     is_test: is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     }
// };

// export const comboReportModule = {
//     clearFirstLayer () {
//         store.dispatch(
//             'actionCommonSetAjaxData', {
//                 stateName: 'comboReport',
//                 ajaxName: 'firstLayerData',
//                 data: []
//             }
//         );
//     },
//     /**
//      * 取得列表by日期 第一層
//      */
//     getStakesByDate ({
//         start_date = '',
//         end_date = '',
//         mode = 'date',
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N'
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             comboReportApi.getStakesByDate({
//                 data: {
//                     start_date,
//                     end_date,
//                     mode,
//                     member_fuzzy,
//                     member,
//                     is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 // store.dispatch(
//                 //     'actionCommonSetAjaxData', {
//                 //         stateName: 'comboReport',
//                 //         ajaxName: 'firstLayerData',
//                 //         data: res
//                 //     }
//                 // );
//                 return resolve(res);
//             }).catch((err) => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     },
//     getStakeByMember ({
//         start_date = '',
//         end_date = '',
//         member_fuzzy = 'Y',
//         member = '',
//         is_test = 'N'
//     }) {
//         return new Promise((resolve, reject) => {
//             store.dispatch('actionCommonLoading', true);
//             comboReportApi.getStakeByMember({
//                 data: {
//                     start_date,
//                     end_date,
//                     member,
//                     member_fuzzy,
//                     is_test
//                 }
//             }).then(res => {
//                 store.dispatch('actionCommonLoading', false);
//                 return resolve(res);
//             }).catch(err => {
//                 store.dispatch('actionCommonLoading', false);
//                 return reject(err);
//             });
//         });
//     }
// };

// export const operationRecordModule = {
//     /**
//      * 更新頁面
//      * @function operationRecordModule#updatePage
//      * @param {Number} sportId 球種ID
//      * @param {String} date 日期字串
//      * @this ScoreInput
//      * @return Promise物件
//      */
//     updatePage ({
//         sportId = 0,
//         date = '',
//         isTournament = false,
//         clock = 'N'
//     }) {
//         const operationRecordApiConfig = config.apiConfig.operationRecord;
//         let _sportId = sportId;
//         let _date = date;
//         if (clock === 'N') {
//             store.dispatch('actionCommonLoading', true);
//         }
//         this.onUpdate = true;

//         return commonApi
//             .getSportListByRouter({
//                 stateName: 'operationRecord',
//                 ajaxName: 'sportList',
//                 data: {
//                     sport_id: operationRecordApiConfig.sportId,
//                     type: operationRecordApiConfig.sportType
//                 },
//                 success: res =>
//                     new Promise((resolve, reject) => {
//                         const find = res.data.find(val => {
//                             return +val.id === +_sportId;
//                         });
//                         // 選擇的球種沒有在球種列表內則取第一個球種
//                         if (!find) {
//                             _sportId = res.data[0].id;
//                         }
//                         store.dispatch('actionCommonSelectGame', {
//                             stateName: 'operationRecord',
//                             gameId: _sportId
//                         });
//                         commonApi
//                             .getDateList({
//                                 stateName: 'operationRecord',
//                                 ajaxName: 'dateList',
//                                 data: {
//                                     sport_id: _sportId,
//                                     type: isTournament ? 1 : 2
//                                 },
//                                 success: res =>
//                                     new Promise((resolve, reject) => {
//                                         _date = findTheClosestDate({
//                                             dateArr: res.data,
//                                             findDate: _date
//                                         });
//                                         // 如果沒有任何日期就清空資料並離開
//                                         if (!_date) {
//                                             store.dispatch(
//                                                 'actionCommonSetAjaxData', {
//                                                     stateName: 'operationRecord',
//                                                     ajaxName: 'gameList',
//                                                     data: []
//                                                 }
//                                             );
//                                             return resolve();
//                                         }
//                                         store.dispatch(
//                                             'actionCommonSelectDate', {
//                                                 stateName: 'operationRecord',
//                                                 dateStr: _date
//                                             }
//                                         );
//                                         if (isTournament) {
//                                             operationRecordApi
//                                             .getTournamentRecordGameList({
//                                                 data: {
//                                                     date: _date,
//                                                     sport_id: _sportId,
//                                                     status: 0
//                                                 }
//                                             })
//                                             .then(() => {
//                                                 resolve();
//                                             });
//                                         } else {
//                                             operationRecordApi
//                                             .getOperationRecordGameList({
//                                                 data: {
//                                                     date: _date,
//                                                     sport_id: _sportId,
//                                                     status: 0
//                                                 }
//                                             })
//                                             .then(() => {
//                                                 resolve();
//                                             });
//                                         }
//                                     })
//                             })
//                             .then(() => {
//                                 resolve();
//                             });
//                     })
//             })
//             .then(() => {
//                 if (clock == 'N') store.dispatch('actionCommonLoading', false);
//                 this.onUpdate = false;
//             });
//     }

// };
