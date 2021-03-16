import {
    ajaxGet,
    // ajaxGetLang,
    // ajaxGetLoginLang,
    // ajaxPost
} from '@/common/func';
// import qs from 'qs';
// 共用
// import axios from 'axios';
export const commonApi = {
    getInitInfo ({
        ...args
    }) {
        return ajaxGet({
            urlName: 'API_GET_COMM_INFO',
            stateName: 'common',
            ajaxName: 'info',
            init: true,
            ...args
        });
    },
};

/* --------------總覽------------------ */
// 總覽
export const overviewApi = {
};
/* ------------------------------------ */

/* -------------賽事下載---------------- */
// 賽事下載
export const gameDownloadApi = {
};
/* ------------------------------------ */

/* -------------賽事開盤---------------- */
// 賽事開盤
export const gameOpenApi = {
};
/* ------------------------------------ */

/* -------------風險監控---------------- */
// 主要指標
export const mainIndicatorApi = {
};
// 賽事預測
export const forecastResultApi = {
};
// 分類帳明細報表
export const detailReportApi = {
};
// 玩法分類帳目報表
export const betTypeReportApi = {
};
// 特殊會員報表
export const customerReportApi = {
};
export const autoCloseApi = {
};
export const comboReportApi = {
};
export const leagueReportApi = {
};
// 即時注單
export const realTimeWagerApi = {
};
// 停押監控
export const stopMonitorApi = {
};
// 報表(簡易)
export const reportSimpleApi = {
};
// 即時入球
export const realTimeScoreApi = {
};
// 賽事入球查詢
export const scoreSearchApi = {
};
// 注單檢索
export const wagerSearchApi = {
};
/* ------------------------------------ */

/* -------------預設參數---------------- */
// 參數名片
export const paramCardApi = {
};
// 聯盟套用
export const leagueApplyApi = {
};
// 過關參數
export const parlayParamApi = {
};
/* ------------------------------------ */

/* -------------比分輸入---------------- */
// 比分輸入
export const scoreInputApi = {
};
/* ------------------------------------ */

/* --------------管理------------------ */
// 公告設定
export const declarationSettingApi = {
};
export const autoGameOpenApi = {
};
// 系統預設
export const systemPresetApi = {
};
// 自動結算
export const autoScoreSettleApi = {
};
// 取消注單
export const cancelWagerApi = {
};
// 註銷紀錄
export const cancelWagerRecordApi = {
};
// 操作紀錄
export const operationRecordApi = {
};
/* ------------------------------------ */

/* --------------會員------------------ */
// 標籤
export const memberApi = {
};
/* ------------------------------------ */
export const periodBetSettingApi = {
};

// XBB球種與玩法列表
export const sportTypeManageApi = {
};
/**
 * 後台(工程師專用分類標籤)
 */
export const backendApi = {
};
