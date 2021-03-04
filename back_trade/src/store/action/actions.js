import * as actionType from '../actionType';
// import axios from 'axios';

const common = {
    // 更新單一屬性的值
    actionCommonUpdateSingleState ({ commit }, updateObj) {
        commit(actionType.COMMON_UPDATE_SINGLE_STATE, updateObj);
    },
    // loading遮罩
    actionCommonLoading ({ commit }, loadingStatus) {
        commit(actionType.COMM_LOADING, loadingStatus);
    },
};

export default {
    ...common,
};