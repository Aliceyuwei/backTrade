import * as actionType from '../../actionType';
export default {
    // 更新單一屬性的值
    [actionType.COMMON_UPDATE_SINGLE_STATE] (state, updateObj) {
        try {
            state[updateObj.stateName][updateObj.keyName] = updateObj.value;
        } catch (e) {
            console.log(e);
        }
    },
    // loading遮罩
    [actionType.COMM_LOADING] (state, loadingStatus) {
        state.common.loading = loadingStatus;
    },
};