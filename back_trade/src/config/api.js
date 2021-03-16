const _mockUrl = 'http://' + location.hostname + ':3000';

export const API_GET_FOO = _mockUrl + '/example';

// 語系檔
export const API_GET_COMM_LANG = '/tradeCenter/lang';

// 登入頁預設語系
export const API_GET_LOGIN_LANG = '/td/product-info';

// 站別
export const API_GET_COMM_SITE_NAME = '/td/common/siteName';

/**
 * api路徑
 * @module api
 */

/**
 * TD0001 控端共用基本資料 - 取共用基本資料
 *  @constant
 *  @default /td/common/info
 */
export const API_GET_COMM_INFO = '/td/common/info';
/**
 * TD0002 控端共用功能 - 登入
 *  @constant
 *  @default /td/common/login
 */
export const API_POST_LOGIN = '/td/common/login';
/**
 * TD0003 - 控端共用功能 - 登出
 *  @constant
 *  @default /td/common/logout
 */
export const API_DELETE_LOGOUT = '/td/common/logout';
/**
 * TD0004 - 控端賽事下載資料 – 下載單日賽程
 *  @constant
 *  @default /td/match/download
 */
export const API_GET_MATCH_DOWNLOAD = '/td/match/download';
/**
 * TD0005 – 控端賽事下載資料 -取得可選擇球種資料
 *  @constant
 *  @default /td/match/sports
 */
export const API_GET_MATCH_SPORT = '/td/match/sports';
export const API_GET_MATCH_SPORT_BY_ROUTER = '/td/common/sports-list';
/**
 * TD0006 – 控端賽事下載資料 – 取得各日期有無賽事資料
 *  @constant
 *  @default /td/match/date-data
 */
export const API_GET_MATCH_DATE_DATA = '/td/match/date-data';
/**
 * TD0007 – 控端賽事下載資料 – 取得當天所有賽事
 *  @constant
 *  @default /td/match/all
 */
export const API_GET_MATCH_ALL = '/td/match/all';
/**
 * TD0008 – 控端賽事下載資料 – 更改賽事狀態
 *  @constant
 *  @default /td/match/update
 */
export const API_POST_MATCH_UPDATE = '/td/match/update';
/**
 * TD0009 – 控端賽事下載資料 – 更改賽事順序
 *  @constant
 *  @default /td/match/sort-update
 */
export const API_POST_MATCH_SORT_UPDATE = '/td/match/sort-update';
/**
 * TD0010 – 控端賽事開盤資料 – 賠率玩法列表
 *  @constant
 *  @default /td/match/odds/list
 */
export const API_GET_MATCH_ODDS_LIST = '/td/match/odds/list';
/**
 * TD0011 – 控端賽事開盤資料 – 賠率資料
 *  @constant
 *  @default /td/match/odds
 */
export const API_GET_MATCH_ODDS = '/td/match/odds';
/**
 * TD0012 – 控端賽事開盤資料 – 更改賠率資料
 *  @constant
 *  @default /td/match/odds/update
 */
export const API_POST_MATCH_ODDS_UPDATE = '/td/match/odds/update';
export const API_POST_MATCH_ODDS_UPDATE_V2 = '/td/match/odds/update/v2';
/**
 * TD0013 – 通知控端更新賽事資料(系統用)
 *  @constant
 */
/**
 * TD0014 – 控端預設參數 – 名片預設參數資料
 *  @constant
 *  @default /td/risk-parameter/card
 */
export const API_GET_RISK_PARAMETER_CARD = '/td/risk-parameter/card';
/**
 * TD0015 – 控端預設參數 – 新增/修改名片預設參數資料
 *  @constant
 *  @default /td/risk-parameter/card
 */
export const API_POST_RISK_PARAMETER_CARD = '/td/risk-parameter/card';
/**
 * TD0016 – 控端預設參數 – 刪除名片
 *  @constant
 *  @default /td/risk-parameter/card
 */
export const API_DELETE_RISK_PARAMETER_CARD = '/td/risk-parameter/card';
/**
 * TD0017 – 控端預設參數 – 取得所有名片資料
 *  @constant
 *  @default /td/risk-parameter/card/all
 */
export const API_GET_RISK_PARAMETER_CARD_ALL = '/td/risk-parameter/card/all';
/**
 * TD0018 – 控端預設參數 – 取得名片的球種套用數
 *  @constant
 *  @default /td/risk-parameter/card/apply-sports
 */
export const API_GET_RISK_PARAMETER_CARD_APPLY_SPORTS = '/td/risk-parameter/card/apply-sports';
/**
 * TD0019 – 控端預設參數 – 聯盟套用資料
 *  @constant
 *  @default /td/risk-parameter/league
 */
export const API_GET_RISK_PARAMETER_LEAGUE = '/td/risk-parameter/league';
export const API_GET_LEAGUE_CARD_LIST = '/td/setting/league-card-list-by-sport';
/**
 * TD0020 – 控端預設參數 – 更改聯盟套用名片
 *  @constant
 *  @default /td/risk-parameter/league/card-update
 */
export const API_POST_RISK_PARAMETER_LEAGUE_CARD_UPDATE = '/td/risk-parameter/league/card-update';
export const API_POST_UPDATE_LEAGUE_CARD_SETTING = '/td/setting/update-league-card-setting';
/**
 * TD0021 – 控端預設參數 – 取得過關參數設定
 *  @constant
 *  @default /td/risk-parameter/combo-parameter
 */
export const API_GET_RISK_PARAMETER_COMBO_PARAMETER = '/td/risk-parameter/combo-parameter';
/**
 * TD0022 – 控端預設參數 – 更改過關參數設定
 *  @constant
 *  @default /td/risk-parameter/combo-parameter/update
 */
export const API_POST_RISK_PARAMETER_COMBO_PARAMETER_UPDATE = '/td/risk-parameter/combo-parameter/update';
/**
 * TD0023 – 控端預設參數 – 取得名片名稱列表
 *  @constant
 *  @default /td/risk-parameter/card/list
 */
export const API_GET_RISK_PARAMETER_CARD_LIST = '/td/risk-parameter/card/list';
/**
 * TD0024 – 控端賽事開盤資料 – 賽事預設參數資料
 *  @constant
 *  @default /td/match/risk-parameter
 */
export const API_GET_MATCH_RISK_PARAMETER = '/td/match/risk-parameter';
/**
 * TD0025 – 控端賽事開盤資料 – 修改賽事預設參數資料
 *  @constant
 *  @default /td/match/risk-parameter/update
 */
export const API_POST_MATCH_RISK_PARAMETER_UPDATE = '/td/match/risk-parameter/update';
/**
 * TD0026 – 控端賽事開盤資料 – 賽事套用名片預設參數資料
 *  @constant
 *  @default /td/match/risk-parameter/apply-card
 */
export const API_GET_MATCH_RISK_PARAMETER_APPLY_CARD = '/td/match/risk-parameter/apply-card';
/**
 * TD0027 – 控端賠率資料 –開盤賠率資料(簡單版)
 *  @constant
 *  @default /td/match/odds/data
 */
export const API_GET_MATCH_ODDS_DATA = '/td/match/odds/data';
/**
 * TD0028 – 控端賽事開盤資料 – 更改賠率資料(簡單版)
 *  @constant
 *  @default /td/match/odds/batch
 */
export const API_POST_MATCH_ODDS_BATCH = '/td/match/odds/batch';
/**
 * TD0029 – 控端比分輸入 - 取得當天所有賽事的結算狀態
 *  @constant
 *  @default /td/result/match
 */
export const API_GET_RESULT_MATCH = '/td/result/match';
/**
 * TD0030 – 控端比分輸入 - 取得賽事比分資料
 *  @constant
 *  @default /td/result/score
 */
export const API_GET_RESULT_SCORE = '/td/result/score';
/**
 * TD0030 – 控端比分輸入 - 取得賽事比分資料
 *  @constant
 *  @default /td/result/score
 */
export const API_GET_REFERENCE_SCORE = '/td/result/reference-scoreV3';
/**
 * TD0030 – 控端比分輸入 - 取得參考比分
 *  @constant
 *  @default /td/result/score
 */
export const API_GET_RESULT_SCORE_BASKETBALL = '/td/result/score-mapping';
/**
 * TD0030 – 控端比分輸入 - 取得參考比分
 *  @constant
 *  @default /td/result/score
 */
export const API_GET_EXAMPLE_SCORES = '/td/result/reference-score';
/**
 * TD0031 – 控端比分輸入 – 執行結算/取消結算
 *  @constant
 *  @default /td/result/settlement
 */
export const API_POST_RESULT_SETTLEMENT = '/td/result/settlement';
/**
 * TD0032 – 更新參考賽果 (系統用)
 *  @constant
 *  @default /td/result/settlement
 */
/**
 * TD0033 – 取即時注單
 *  @constant
 *  @default /td/result/settlement
 */
export const API_GET_RISK_CONTROL_BET_REALTIME_ORDER = '/td/risk-control/bet/real-time-order';
/**
 * TD0034 – 取注單注額列表
 *  @constant
 *  @default /td/result/settlement
 */
export const API_GET_MATCH_BET_ORDER_LIST = '/td/match/bet/order-list';
/**
 * TD0035 – 取等待單列表
 *  @constant
 *  @default /td/result/settlement
 */
export const API_GET_MATCH_BET_WAITING_ORDER = '/td/match/bet/waiting-order';
/**
 * TD0036 – 更新等待單狀態
 *  @constant
 *  @default /td/result/settlement
 */
export const API_POST_MATCH_BET_RECEIVE_BET = '/td/match/bet/receive-bet';
/**
 * TD0037 – 控端風控 -取得結算進度等主要指摽資料
 *  @constant
 *  @default /td/risk-control/indicator/data
 */
export const API_GET_RISK_CONTROL_INDICATOR_DATA = '/td/risk-control/indicator/data';
/**
 * TD0038 – 控端風控 - 取得近一小時進單警示資料
 *  @constant
 *  @default /td/risk-control/indicator/warning
 */
export const API_GET_RISK_CONTROL_INDICATOR_WARNING = '/td/risk-control/indicator/warning';
/**
 * TD0039 – 控端風控 - 取得高人氣賽事統計資料
 *  @constant
 *  @default /td/risk-control/indicator/match/rank
 */
export const API_GET_RISK_CONTROL_INDICATOR_MATCH_RANK = '/td/risk-control/indicator/match/rank';
/**
 * TD0040 – 控端風控 - 取得玩法投注分佈資料
 *  @constant
 *  @default /td/risk-control/indicator/match/bet-rank
 */
export const API_GET_RISK_CONTROL_INDICATOR_MATCH_BET_RANK = '/td/risk-control/indicator/match/bet-rank';
/**
 * TD0041 – 控端風控 - 取得主要指標高人氣單項投注排序
 *  @constant
 *  @default /td/risk-control/indicator/bet-rank
 */
export const API_GET_RISK_CONTROL_INDICATOR_BET_RANK = '/td/risk-control/indicator/bet-rank';
/**
 * TD0042 – 控端風控 - 取得主要指標高人氣過關相同串
 *  @constant
 *  @default /td/risk-control/indicator/combo-rank
 */
export const API_GET_RISK_CONTROL_INDICATOR_COMBO_RANK = '/td/risk-control/indicator/combo-rank';
/**
 * TD0043 – 控端風控 – 賽事預測/取得賽事排名資料
 *  @constant
 *  @default /td/risk-control/predict/match-order
 */
export const API_GET_RISK_CONTROL_PREDICT_MATCH_ORDER = '/td/risk-control/predict/match-order';
/**
 * TD0045 – 控端風控 – 賽事預測/預測的詳細資料
 *  @constant
 *  @default /td/risk-control/predict/bet-detail
 */
export const API_GET_RISK_CONTROL_PREDICT_BET_DETAIL = '/td/risk-control/predict/bet-detail';
/**
 * TD0046 – 控端總覽 - 取得收益總覽與高人氣賽事統計
 *  @constant
 *  @default /td/dashboard/overview
 */
export const API_GET_DASHBOARD_OVERVIEW = '/td/dashboard/overview';
/**
 * TD0047 – 控端總覽 – 取的賽事狀況資料
 *  @constant
 *  @default /td/dashboard/match-status
 */
export const API_GET_DASHBOARD_MATCH_STATUS = '/td/dashboard/match-status';
/**
 * TD0048 – 控端總覽 – 各個球種的賽事數量
 *  @constant
 *  @default /td/dashboard/match-sports
 */
export const API_GET_DASHBOARD_MATCH_SPORTS = '/td/dashboard/match-sports';
/**
 * TD0049 – 控端總覽 – 賽果異動資料
 *  @constant
 *  @default /td/dashboard/change-data/result
 */
export const API_GET_DASHBOARD_CHANGED_DATA_RESULT = '/td/dashboard/change-data/result';
/**
 * TD0050 – 控端總覽 – 賽程中心資訊異動資料
 *  @constant
 *  @default /td/dashboard/change-data/game
 */
export const API_GET_DASHBOARD_CHANGED_DATA_GAME = '/td/dashboard/change-data/game';
/**
 * TD0051 – 控端系統預設 – 取得系統預設參數設定
 *  @constant
 *  @default /td/admin/system-default/parameter
 */
export const API_GET_ADMIN_SYSTEM_DEFAULT_PARAMETER_AVAILABLE = '/td/admin/system-default/parameter/available';
/**
 * TD0052 – 控端管理 – 取得系統可設定的參數清單
 *  @constant
 *  @default /td/admin/system-default/parameter/available
 */
export const API_GET_ADMIN_SYSTEM_DEFAULT_PARAMETER = '/td/admin/system-default/parameter';  // [GET]
export const API_POST_ADMIN_SYSTEM_DEFAULT_PARAMETER = '/td/admin/system-default/parameter'; // [POST]
/**
 * TD0053 – 控端管理 – 更改系統預設參數設定
 *  @constant
 *  @default /td/admin/system-default/parameter/update
 */
export const API_GET_ADMIN_SYSTEM_DEFAULT_LEAGUE_COMBO = '/td/admin/system-default/league-combo';
/**
 * TD0054 – 控端管理 – 更改聯盟過關串數
 *  @constant
 *  @default /td/admin/system-default/league-combo/update
 */
export const API_POST_ADMIN_SYSTEM_DEFAULT_LEAGUE_COMBO_UPDATE = '/td/admin/system-default/league-combo/update';
/**
 * TD0055 – 控端管理 – 註銷下注
 *  @constant
 *  @default /td/management/cancel-bet
 */
export const API_DELETE_MANAGEMENT_CANCEL_BET = '/td/management/cancel-bet';
/**
 * TD0056 – 控端管理 – 取消註銷下注
 *  @constant
 *  @default /td/management/rollback-cancel-bet
 */
export const API_PUT_MANAGEMENT_ROLLBACK_CANCEL_BET = '/td/management/rollback-cancel-bet';
/**
 * TD0057 – 控端管理 – 註銷功能的玩法下拉選項列表
 *  @constant
 *  @default /td/management/bet-type-list
 */
export const API_GET_MANAGEMENT_BET_TYPE_LIST = '/td/management/bet-type-list';
/**
 * TD0058 – 控端管理 – 註銷功能的搜尋注單
 *  @constant
 *  @default /td/management/wager-for-cancel-bet
 */
export const API_GET_MANAGEMENT_WAGER_FOR_CANCEL_BET = '/td/management/wager-for-cancel-bet';
/**
 * TD0059 – 控端風控 - 停押監控
 *  @constant
 *  @default /td/risk-control/odds/monitor
 */
export const API_GET_RISK_CONTROL_ODDS_MONITOR = '/td/risk-control/odds/monitor';
/**
 * TD0060 – 控端管理 – 取得公告用玩法選項
 *  @constant
 *  @default /td/management/bet-type-list-for-declaration
 */
export const API_GET_MANAGEMENT_BET_TYPE_LIST_FOR_DECLARATION = '/td/management/bet-type-list-for-declaration-v2';
/**
 * TD0061 – 控端管理 – 取得公告範本
 *  @constant
 *  @default /td/management/declaration-template
 */
export const API_GET_MANAGEMENT_DECLARATION_TEMPLATE = '/td/management/declaration-template';
/**
 * TD0062 – 控端管理 – 取得公告預覽
 *  @constant
 *  @default /td/management/declaration-preview
 */
export const API_POST_MANAGEMENT_DECLARATION_PREVIEW = '/td/management/declaration-preview-v2';
/**
 * TD0063 – 控端管理 – 新增公告
 *  @constant
 *  @default /td/management/add-declaration
 */
export const API_POST_MANAGEMENT_ADD_DECLARATION = '/td/management/add-declaration';
/**
 * TD0064 – 控端管理 – 取得公告
 *  @constant
 *  @default /td/management/declaration
 */
export const API_GET_MANAGEMENT_DECLARATION = '/td/management/declaration';
/**
 * TD0065 – 控端管理 – 編輯公告
 *  @constant
 *  @default /td/management/edit-declaration
 */
export const API_PUT_MANAGEMENT_EDIT_DECLARATION = '/td/management/edit-declaration';
/**
 * TD0066 – 控端管理 – 編輯跑馬燈
 *  @constant
 *  @default /td/management/edit-marquee
 */
export const API_PUT_MANAGEMENT_EDIT_MARQUEE = '/td/management/edit-marquee';
/**
 * TD0067 – 總覽 – 在線人數
 *  @constant
 *  @default /td/dashboard/online-user-count
 */
export const API_GET_DASHBOARD_ONLINE_USER_COUNT = '/td/dashboard/online-user-count';
/**
 * TD0068 – 控端管理 – 取得公告範本群組
 *  @constant
 *  @default /td/management/declaration-template-group
 */
export const API_GET_MANAGEMENT_DECLARATION_TEMPLATE_GROUP = '/td/management/declaration-template-group';
/**
 * TD0069 – 控端管理 – 修改密碼
 *  @constant
 *  @default /td/common/change-password
 */
export const API_POST_COMMON_CHANGE_PASSWORD = '/td/common/change-password';
/**
 * TD0070 – 控端管理 – 取得操作紀錄分類下拉選項
 *  @constant
 *  @default /td/common/operation-category
 */
export const API_GET_COMM_OPERATION_CATEGORY = '/td/common/operation-category';
/**
 * TD0071 – 控端管理 – 取得操作紀錄
 *  @constant
 *  @default /td/common/operation-record
 */
export const API_GET_COMM_OPERATION_RECORD = '/td/common/operation-record';
/**
 * TD0072 – 控端風控 – 取得最佳或是最差損益的賽事排名資料(新)
 *  @constant
 *  @default /td/risk-control/profit-estimation/match-income-rank
 */
export const API_GET_RISK_CONTROL_PROFIT_ESTIMATION_MATCH_INCOME_RANK = '/td/risk-control/profit-estimation/match-income-rank';
/**
 * TD0073 – 控端風控 – 賽事預測/預測的詳細資料(新)
 *  @constant
 *  @default /td/risk-control/profit-estimation/predict-match-income
 */
export const API_GET_RISK_CONTROL_PROFIT_ESTIMATION_PREDICT_MATCH_INCOME = '/td/risk-control/profit-estimation/predict-match-income';
/**
 * TD0074 – 控端風控 – 取得該場賽事被計算的所有可能損益列表
 *  @constant
 *  @default /td/risk-control/profit-estimation/match-income-summation
 */
export const API_GET_RISK_CONTROL_PROFIT_ESTIMATION_MATCH_INCOME_SUMMATION = '/td/risk-control/profit-estimation/match-income-summation';
/**
 * TD0075 – 控端風控 – 結算進度
 *  @constant
 *  @default /td/risk-control/indicator/settlement-status
 */
export const API_GET_RISK_CONTROL_INDICATOR_SETTLEMENT_STATUS = '/td/risk-control/indicator/settlement-status';
/**
 * TD0076 – 控端風控 – 未結算損益預測
 *  @constant
 *  @default /td/risk-control/indicator/income-prediction
 */
export const API_GET_RISK_CONTROL_INDICATOR_INCOME_PREDICTION = '/td/risk-control/indicator/income-prediction';
/**
 * TD0077 – 控端風控 – 玩法損益排名TOP20
 *  @constant
 *  @default /td/risk-control/indicator/bet-type-rank-for-income
 */
export const API_GET_RISK_CONTROL_INDICATOR_BET_TYP_RANK_FOR_INCOME = '/td/risk-control/indicator/bet-type-rank-for-income';
/**
 * TD0078 – 控端風控 – 取得輸入比分開關
 *  @constant
 *  @default /td/management/settlement-switch
 */
export const API_GET_MANAGEMENT_SETTLEMENT_SWITCH = '/td/management/settlement-switch';
/**
 * TD0079 – 控端風控 – 編輯輸入比分開關
 *  @constant
 *  @default /td/management/settlement-switch
 */
export const API_PUT_MANAGEMENT_SETTLEMENT_SWITCH = '/td/management/settlement-switch';
/**
 * TD0080 – 控端風控 – 簡易報表
 *  @constant
 *  @default /td/engineer/simple-income-report
 */
export const API_GET_ENGINEER_SIMPLE_INCOME_REPORT = '/td/engineer/simple-income-report';
/**
 * TD0081 – 控端風控 – 簡易報表球種
 *  @constant
 *  @default /td/engineer/sport-id-for-simple-income-report
 */
export const API_GET_ENGINEER_SPORT_ID_FOR_SIMPLE_INCOME_REPORT = '/td/engineer/sport-id-for-simple-income-report';
/**
 * TD0082 – 控端風控 – 即時入球
 *  @constant
 *  @default /td/risk-control/score/real-time-record
 */
export const API_GET_RISK_CONTROL_SCORE_REAL_TIME_RECORD = '/td/risk-control/score/real-time-record';
/**
 * TD0082 – 控端風控 – 賽事的進球時間
 *  @constant
 *  @default /td/result/goals-time-by-match
 */
export const API_GET_RESULT_GOALS_TIME_BY_MATCH = '/td/result/goals-time-by-match';
/**
 * TD0083 – 控端比分 – 所有有比分未結算的賽事
 *  @constant
 *  @default /td/result/not-settled-match
 */
export const API_GET_RESULT_NOT_SETTLED_MATCH = '/td/result/not-settled-match';
/**
 * TD0084 – 控端風控 – 取得搜尋注單的下拉選項API
 *  @constant
 *  @default /td/risk-control/bet/drop-down-list-for-search-wager
 */
export const API_GET_RISK_CONTROL_BET_DROP_DOWN_LIST_FOR_SEARCH_WAGER = '/td/risk-control/bet/drop-down-list-for-search-wager';
/**
 * TD0085 – 控端風控 – 取得球種的聯盟
 *  @constant
 *  @default /td/risk-control/bet/league-by-sport
 */
export const API_GET_RISK_CONTROL_BET_LEAGUE_BY_SPORT = '/td/risk-control/bet/league-by-sport';
/**
 * TD0086 – 控端風控 – 搜尋注單
 *  @constant
 *  @default /td/risk-control/bet/search-wager
 */
export const API_GET_RISK_CONTROL_BET_SEARCH_WAGER = '/td/risk-control/bet/search-wager';
/**
 * TD0086 – 控端風控 – 搜尋注單 -時間區間by 派彩日期
 *  @constant
 *  @default /td/report/leagues/stakes-by-wager
 */
export const API_STAKES_BY_WAGER = '/td/report/leagues/stakes-by-wager';
/**
 * TD0088 – 控端 – 設定使用者特殊標籤
 *  @constant
 *  @default /td/member/tag/update
 */
export const API_PUT_USER_EDIT_USER_TAG = '/td/member/tag/update';
/**
 * TD0089 – 控端 – 會員標籤數量統計
 *  @constant
 *  @default /td/user/edit-user-tag
 */
export const API_GET_MEMBER_TAG_TOTAL = '/td/member/tag/total';
/**
 * TD0090 – 控端 – 取使用者特殊標籤
 *  @constant
 *  @default /td/member/tag
 */
export const API_GET_USER_TAG = '/td/member/tag';
/**
 * TD0091 – 控端 – 取使用者特殊標籤設定
 *  @constant
 *  @default /td/member-tag/setting
 */
export const API_GET_MEMBER_TAG_SETTING = '/td/member-tag/setting';
/**
 * TD0092 – 控端 – 修改會員特殊標籤設定
 *  @constant
 *  @default /td/member-tag/setting/update
 */
export const API_PUT_MEMBER_TAG_SETTING = '/td/member-tag/setting/update';
/**
 * TD0093 – 控端 – 修改會員特殊標籤設定2
 *  @constant
 *  @default /td/member/tag/update
 */
export const API_PUT_MEMBER_TAG_UPDATE = '/td/member/tag/update';
/**
 * TD0094 – 控端 – 取會員特殊標籤列表
 *  @constant
 *  @default /td/member-tag/list
 */
export const API_GET_MEMBER_TAG_LIST = '/td/member-tag/list';
/**
 * TD0095 – 控端 – 取會員特殊標籤項目
 *  @constant
 *  @default /td/member-tag/option
 */
export const API_GET_MEMBER_TAG_OPTION = '/td/member-tag/option';
/**
 * TD0096 – 控端 – 取會員列表
 *  @constant
 *  @default /td/member/list
 */
export const API_GET_MEMBER_LIST = '/td/member/list';
/**
 * TD0091 – 控端 – 創建標籤
 *  @constant
 *  @default /td/member-tag/setting/create
 */
export const API_PUT_MEMBER_TAG_SETTING_CREATE = '/td/member-tag/setting/create';
/**
 * TD0092 – 控端 – 刪除標籤
 *  @constant
 *  @default td/member-tag/setting/delete
 */
export const API_DELETE_MEMBER_TAG = 'td/member-tag/setting/delete';

export const API_POST_GAME_OVER_STATUS = 'td/match/over';

export const API_GET_MATRIX_LOG = 'td/result/matrix-event-change-log';

export const API_GET_SUNPLUS_LOG = 'td/result/sunplus-event-change-log';

export const API_POST_SOURCE_LIST = 'td/match/source-list';
export const API_GET_STAKES_BY_BET_TYPE = '/td/report/match/stakes-by-bettype';
export const API_GET_MEMBER_TAG_BET_DETAIL = '/td/match/bet/member-tag-bet-detail';
export const API_GET_AUTO_CLOSE_RESULT_BY_CONDITIONS = 'td/risk-control/indicator/auto-close-monitor';
export const API_GET_PERIOD_SETTING_BY_SPORT = 'td/risk-control/v2/period-bet-setting-by-sport';

export const API_EDIT_PERIOD_SETTING_BY_SPORT = 'td/risk-control/v2/update-period-bet-setting-by-sport';

export const API_GET_PERIOD_SETTING_BY_EVENT = 'td/risk-control/v2/period-bet-setting-by-match';

export const API_EDIT_PERIOD_SETTING_BY_EVENT = 'td/risk-control/v2/update-period-bet-setting-by-match';

export const API_POST_COMBO_STAKES_BY_DATETIME = 'td/report/leagues/combo-stakes-by-datetime';

export const API_POST_COMBO_STAKES_BY_MEMBER = 'td/report/leagues/combo-stakes-by-member';

export const API_GET_COMBO_STAKES_BY_WAGER = 'td/report/leagues/combo-stakes-by-wager';

export const API_GET_DETAIL_STAKES_BY_DATETIME = '/td/report/leagues/detail-stakes-by-datetime';

export const API_GET_BET_DETAIL_STAKES_BY_DATETIME = '/td/report/leagues/bet-detail-stakes-by-datetime';

// 聯盟排序設定 api 可以使用 get post put 三種方法
export const API_LEAGUE_SORT_SETTING = '/td/management/client-render-data';
// 聯盟排序撈聯盟的 api
export const API_GET_LEAGUE_LIST_BY_SPORT = '/td/setting/league-list-by-sport';
export const API_GET_TOURNAMENT_EVENT_LIST = '/td/result/tournament/list';

export const API_GET_TOURNAMENT_SCORE_LIST = '/td/result/tournament/score-mapping';

export const API_SETTLE_TOURNAMENT_SCORE = '/td/result/tournament/score';
export const API_GET_AUTO_SETTLEMENT_CONFIG = '/td/auto-settlement/config-list';

export const API_UPDATE_AUTO_SETTLEMENT_CONFIG = '/td/auto-settlement/update-config';
export const API_GET_BET_TYPE_BY_SPORT_ID = '/td/doc/bet-type-list';

export const API_GET_BET_TYPE_REPORT = '/td/report/bet-type/detail-bet-type-stakes-by-datetime';
export const API_GET_BET_TYPE_REPORT_DETAILS = '/td/report/bet-type/detail-bet-type-stakes-by-wager';

export const API_POST_DELETE_EVENT = 'td/match/delete';
// 自動開放賽事設定 - 查詢球種清單
export const API_GET_AUTO_GAME_OPEN = '/td/management/sports-list';
// 自動開放賽事設定 - 新增球種
export const API_POST_AUTO_GAME_OPEN = '/td/management/insert-sports';
// 自動開放賽事設定 - 更新指定球種設定
export const API_PUT_AUTO_GAME_OPEN = '/td/management/update-sports';

export const API_GET_MEMBER_OPERATION_LOG = '/td/member/change-course';

export const API_GET_EVENT_DATE_AND_SPORT_BY_ID = '/td/match/search';

export const API_GET_WAGER_CANCEL_RECORD = 'td/risk-control/bet/search-canceled-wager';
export const API_GET_BET_TYPE_LIST_BY_SPORT = 'td/management/bet-type/bet-type-list';
export const API_GET_BET_TYPE_OPTION_LIST_BY_SPORT = 'td/management/bet-type-option/bet-type-option-list';
export const API_UPDATE_BET_TYPE = 'td/management/bet-type/update-bet-type';
export const API_UPDATE_BET_TYPE_OPTION = 'td/management/bet-type-option/update-bet-type-option';
export const API_GET_SETTLEMENT_TYPE = 'td/management/bet-type/setting/settlement-type';
export const API_GET_BET_TYPE_GROUP = 'td/management/bet-type/setting/risk-group';
export const API_POST_NEW_BET_TYPE = 'td/management/bet-type/insert-bet-type';
export const API_POST_NEW_BET_TYPE_OPTION = 'td/management/bet-type-option/insert-bet-type-option';
export const API_GET_BET_TYPE_OPTION_SETTLEMENTS = '/td/management/bet-type-option/setting/settlement-option';
export const API_GET_BET_TYPE_OPTION_TEAM = '/td/management/bet-type-option/setting/bet-type-team';
export const API_GET_RISK_MANAGE_SPORTLIST = 'td/risk-manager/sports-list';
export const API_GET_RISK_MANAGE_SETTING = 'td/risk-manager/setting-by-sport';
export const API_POST_RISK_MANAGE_UPDATE_SETTING = 'td/risk-manager/update-setting';
export const API_GET_BET_TYPE_LIST_BY_MATCH = 'td/doc/bet-type-list-by-match';
export const API_GET_BET_TYPE_LIST_BY_SCORE_TYPE = 'td/doc/bet-type-list-by-score-type';
