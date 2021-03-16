<template>
    <div class="overview" :class="{rgb:rgbFlag}">
        <!-- overviewPage -->
        <div class="overviewHeader">
            <div class="lastUpdateTime">
                {{ '最後更新時間' }}：{{ updateDate }}
            </div>
            <update-timer></update-timer>
            <!-- <update-timer
                ref="updateTimer"
                @updateFunc="updateOverview"
                v-show="false"
            ></update-timer> -->
        </div>
        <div class="overviewContent">
            <div class="viewBlock block-1">
                <basic-info class="blockCell"></basic-info>
            </div>
            <div class="viewBlock block-2">
                <income-overview class="blockCell"></income-overview>
                <match-status ref="matchStatus" class="blockCell"></match-status>
            </div>
            <div class="viewBlock block-3"></div>
            <div class="viewBlock block-4"></div>
        </div>
    </div>
</template>
<style lang="scss" src="@/css/router/overview/overview.scss"></style>

<script>
import { mapState } from 'vuex';
// import { overviewApi, commonApi } from 'common/apiKernel';
import { formatTime } from '@/common/func';
// import store from 'store';
import UpdateTimer from '@/components/commonComponent/UpdateTimer';
import BasicInfo from './blockCell/BasicInfo';
import IncomeOverview from './blockCell/IncomeOverview';
import MatchStatus from './blockCell/MatchStatus';

export default {
    // beforeRouteEnter (to, from, next) {
    //     store.dispatch('actionCommonLoading', true);
    //     Promise.all([
    //         overviewApi.getOverviewIncomeData(),
    //         commonApi.getDateList({
    //             stateName: 'overview',
    //             ajaxName: 'matchStatusDateList',
    //             data: {
    //                 type: 4
    //             }
    //         }),
    //         overviewApi.getOnlineUserCount({})
    //     ]).then(() => {
    //         store.dispatch('actionCommonLoading', false);
    //         next();
    //     });
    // },
    inject: ['bus'],
    components: {
        UpdateTimer,
        BasicInfo,
        IncomeOverview,
        MatchStatus
    },
    data () {
        return {
            updateClock: 0,
            updateDate: '',
            keyQueueString: '',
            rgbFlag: false
        };
    },

    created () {
        // 不知道要幹嘛
        // this.bus.$on('overviewUpdateOperate', this.updateOperate);
        this.updateDate = this.nowESDate;
        // document.addEventListener('keyup', this.addKeyListener, true);
    },
    // watch: {
    //     '$store.state.common.lang' (val) {
    //         this.updateOverview();
    //     }
    // },
    computed: {
        ...mapState({
            nowESDate: state =>
                formatTime(new Date(state.common.nowESTimeStamp))
        })
    },
    // methods: {
    //     ...mapActions(['actionCommonLoading']),
    //     updateOverview () {
    //         this.updateOperate('stop');
    //         this.actionCommonLoading(true);
    //         Promise.all([
    //             overviewApi.getOverviewIncomeData(),
    //             new Promise((resolve, reject) => {
    //                 commonApi.getDateList({
    //                     stateName: 'overview',
    //                     ajaxName: 'matchStatusDateList',
    //                     data: {
    //                         type: 4
    //                     },
    //                     success: () => {
    //                         this.$refs.matchStatus
    //                             .updateMatchStatus({
    //                                 date: this.$refs.matchStatus
    //                                     .matchStatusDate,
    //                                 stopUpdate: false
    //                             })
    //                             .then(() => {
    //                                 resolve();
    //                             });
    //                     },
    //                     fail: () => {
    //                         resolve();
    //                     }
    //                 });
    //             }),
    //             // overviewApi.getOverviewResultChange({
    //             //     data: {
    //             //         type: 'simple',
    //             //         number: 3
    //             //     }
    //             // }),
    //             overviewApi.getOnlineUserCount({})
    //         ]).then(() => {
    //             this.updateOperate('start');
    //             this.updateDate = this.nowESDate;
    //             this.actionCommonLoading(false);
    //         });
    //     },
    //     updateOperate (type = 'start') {
    //         try {
    //             // 如果倒數計時已經暫停中就直接return
    //             switch (type) {
    //                 case 'start':
    //                     if (!this.$refs.updateTimer.isStop) return;
    //                     break;
    //                 case 'stop':
    //                     if (this.$refs.updateTimer.isStop) return;
    //                     break;
    //             }
    //             this.$refs.updateTimer[type]();
    //         } catch (e) {
    //             console.warn(e);
    //         }
    //     },
    //     addKeyListener (key) {
    //         if (key.keyCode >= 65 && key.keyCode <= 90) {
    //             this.keyQueueString = this.keyQueueString + key.key;
    //             if (this.keyQueueString.length > 3) {
    //                 this.keyQueueString = this.keyQueueString.substring(1);
    //             }
    //             if (this.keyQueueString.toLowerCase().includes('rgb')) {
    //                 this.rgbFlag = true;
    //             }
    //         }
    //     }
    // },
    beforeDestroy () {
        // 不知道要幹嘛
        // this.bus.$off('overviewUpdateOperate', this.updateOperate);
        // document.removeEventListener('keyup', this.addKeyListener, true);
    }
}
</script>
