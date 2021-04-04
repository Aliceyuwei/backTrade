<template>
    <transition name="slideTop">
        <div class="navBtns" v-show="navSwitch">
            <!-- v-show="limit_mode==='Y'?navs.limit_mode==='Y':true && navs.linkName === 'overview'? true : hasPermissionSub(navs)" -->
            <div v-for="navs in nav"
                :key="navs.uniqueKey"
                class="navWrap"
            >
                <template v-if="navs.noSub">
                    <div class="navItem">
                        <router-link
                            class="navItemTitle"
                            :to="{ name: navs.linkName, params: navs.params }"
                            :title="navs['textKey']"
                            :target="navs.target"
                        >
                            <div class="text">
                                {{ navs["textKey"] }}
                            </div>
                        </router-link>
                    </div>
                </template>
                <template v-else>
                    <div class="navItem">
                        <div class="navItemTitle hasSub">
                            <div class="text">
                                {{ navs["textKey"] }}
                            </div>
                            <i class="el-icon-arrow-down navIcon" />
                        </div>
                        <transition name="hint">
                            <div
                                class="navSub"
                                :class="{ allSport: navs.allSport }"
                            >
                                <!-- v-show="
                                    (permissionList[item.permissionGroup] !== undefined && permissionList[item.permissionGroup][item.permissionKey] !== undefined? permissionList[item.permissionGroup][item.permissionKey] : false)
                                " -->
                                <div
                                    v-for="item in navs.sub"
                                    
                                    :key="'sub-' + item.uniqueKey"
                                    class="navSub-item"
                                >
                                    <template v-if="item.hasSub">
                                        <div class="subWithMenu">
                                            <div class="name">{{ item["textKey"] }}</div>
                                            <i class="el-icon-arrow-right navIcon" />
                                            <div class="subMenu">
                                                <router-link
                                                    class="subItem"
                                                    v-for="subItem in item.sub"
                                                    :key="subItem.uniqueKey"
                                                    :to="{
                                                        name: subItem.linkName,
                                                        params: subItem.params,
                                                    }"
                                                    :target="subItem.target"
                                                >
                                                    <!--子項目名稱-->
                                                    <span>{{
                                                        subItem["textKey"]
                                                    }}</span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <router-link
                                            class="routerLink"
                                            :to="{
                                                name: item.linkName,
                                                params: item.params,
                                                query: item.query,
                                            }"
                                            :target="item.target"
                                        >
                                            <!--如果有設定球種id，則顯示球種icon-->
                                            <template
                                                v-if="
                                                    item.params &&
                                                    item.params.sport_id !== undefined 
                                                "
                                            >
                                                <!-- <SportIcon
                                                    :sportId="
                                                        item.params.sport_id
                                                    "
                                                /> -->
                                            </template>
                                            <!--子項目名稱-->
                                            <span
                                            >
                                                {{ item["textKey"] }}
                                            </span>
                                        </router-link>
                                    </template>
                                </div>
                            </div>
                        </transition>
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>

<script>
import { formatTime } from '@/common/func';
import $ from "jquery";
// import SportIcon from 'components/commonComponent/SportIconComponent';
import { mapGetters, mapState } from 'vuex';
export default {
    data () {
        return {
            permissionList:{
                backend: {
                    betTypeSetting: false
                },
                manage: {
                    announcements: true,
                    autoGameOpenSettle: true,
                    autoScoreSettle: true,
                    leagueSortSetting: true,
                    memberAccount: true,
                    memberTag: true,
                    riskManager: false,
                    sportTypeManage: true,
                    systemPreset: true,
                    wagerColorSetting: false
                },
                matchDownload: {
                    gameDownload: true,
                    tournamentDownload: true
                },
                matchOpen: {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                    6: true,
                    7: true,
                    8: true,
                    9: true,
                    10: true,
                    12: true,
                    14: true,
                    18: true,
                    20: true,
                    21: true,
                    24: true,
                    30: true,
                    83: true,
                    84: true,
                    85: true,
                    133: true,
                    134: true,
                    148: true,
                    160: true,
                    161: true,
                    162: true
                },
                presetParam: {
                    leagueApply: true,
                    paramCard: true,
                    periodBetSetting: true
                },
                report: {
                    betTypeReport: true,
                    comboReport: true,
                    customerReport: true,
                    detailReport: true,
                    leagueReport: true
                },
                riskMonitor: {
                    autoCloseSearch: true,
                    cancelRecord: false,
                    cancelWager: true,
                    forecast: true,
                    operationRecord: true,
                    realTimeWager: true,
                    wagerSearch: true
                },
                scoreInput: {
                    0: true,
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                    6: true,
                    7: true,
                    8: true,
                    9: true,
                    10: true,
                    12: true,
                    14: true,
                    18: true,
                    20: true,
                    21: true,
                    24: true,
                    30: true,
                    83: true,
                    84: true,
                    85: true,
                    133: true,
                    134: true,
                    148: true,
                    160: true,
                    161: true,
                    162: true
                }
            }
        };
    },
    components: {
        // SportIcon
    },
    computed: {
        ...mapState({
            navSwitch: state => state.common.navSwitch,
            ESDate: state =>
                formatTime(new Date(state.common.nowESTimeStamp)).slice(2),
            info: state => state.common.ajaxData.info
        }),
        ...mapGetters({
            nav: 'commonGetNav'
        }),
        limit_mode () {
            const {info} = this;
            return info.permission.limit_mode || 'N';
        }
    },
    watch: {
        // router改變時, 找出切到哪一頁, 開啟它的母選單
        $route () {
            this.$nextTick(() => {
                this.toggleOpenClass();
            });
        }
    },
    methods: {
        hasPermissionSub (navs) {
            const {permissionList} = this;
            if (permissionList) {
                if (navs.noSub) {
                    // 如果沒有子項目，直接以母項目的permissionGroup對照權限表
                    return permissionList[navs.permissionGroup];
                }
                // 如果所有子項目都沒有權限，則不顯示該母項目
                return navs.sub.some(item => (permissionList[item.permissionGroup] && permissionList[item.permissionGroup][item.permissionKey]));
            }
            return true;
        },
        toggleOpenClass () {
            const $activeSub = $('.navSub-item.router-link-active').parents(
                '.navSub'
            );
            const $activeSubTitle = $activeSub.siblings('.navItemTitle');
            $('.navItemTitle.open')
                .not($activeSubTitle)
                .removeClass('open');
            if (!$activeSubTitle.hasClass('open')) {
                $activeSubTitle.addClass('open');
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.toggleOpenClass();
        });
    }
};
</script>
