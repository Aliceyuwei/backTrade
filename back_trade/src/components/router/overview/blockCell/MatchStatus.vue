<template>
    <div>matchStatus</div>
</template>
<script>
    // import { mapState, mapActions } from 'vuex';

    // import { overviewApi } from 'common/apiKernel';
    // import { findTheClosestDate } from 'common/func';
    // import config from 'config/config';

    // import DatePicker from 'components/commonComponent/DatePicker';
    // import MatchSportCount from '../components/MatchSportCount';

    export default {
        inject: ['bus'],
        components: {
            // DatePicker,
            // MatchSportCount
        },
        // data () {
        //     return {
        //         matchSportCountConfig: {},
        //         templateMap: config.templateMap
        //     };
        // },
        // computed: {
        //     ...mapState({
        //         dateList: state => state.overview.ajaxData.matchStatusDateList || [],
        //         matchStatus: state => state.overview.ajaxData.matchStatus || {},
        //         matchStatusDate: state => state.overview.matchStatusDate
        //     })
        // },
        // methods: {
        //     ...mapActions([
        //         'actionCommonUpdateSingleState'
        //     ]),
        //     $_selectDate (date) {
        //         const { matchStatusDate } = this;
        //         if (matchStatusDate === date) return;
        //         this.updateMatchStatus({date});
        //     },
        //     $_openMatchSportCount ({countType = 0, count = 0, type = '', isLive = 'Y', title = '', filter = ''}) {
        //         const { matchStatusDate } = this;
        //         if (!+count) return;
        //         overviewApi.getOverviewMatchSportCount({
        //             data: {
        //                 date: matchStatusDate,
        //                 type: countType
        //             },
        //             success: () => {
        //                 this.matchSportCountConfig = {
        //                     date: matchStatusDate,
        //                     type,
        //                     title,
        //                     isLive,
        //                     filter,
        //                     open: 1
        //                 };
        //             }
        //         });
        //     },
        //     $_closeMatchSportCount () {
        //         this.matchSportCountConfig = {};
        //     },
        //     updateMatchStatus ({date = '', stopUpdate = true}) {
        //         const { dateList, matchStatusDate } = this;
        //         if (dateList.length === 0) {
        //             return;
        //         }
        //         // overview.vue監聽該事件
        //         if (stopUpdate) {
        //             this.bus.$emit('overviewUpdateOperate', 'stop');
        //         }
        //         const _closestDate = findTheClosestDate({dateArr: dateList, findDate: date});
        //         return overviewApi.getOverviewMatchStatus({
        //             data: {
        //                 date: _closestDate
        //             }
        //         }).then(() => {
        //             if (stopUpdate) {
        //                 this.bus.$emit('overviewUpdateOperate', 'start');
        //             }
        //             if (matchStatusDate !== _closestDate) {
        //                 this.actionCommonUpdateSingleState({
        //                     stateName: 'overview',
        //                     keyName: 'matchStatusDate',
        //                     value: _closestDate
        //                 });
        //             }
        //         });
        //     }
        // },
        // created () {
        //     this.updateMatchStatus({date: this.matchStatusDate, stopUpdate: false});
        // }
    };
</script>
