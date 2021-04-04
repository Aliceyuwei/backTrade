<template>
    <div class="topNav">
        <div class="navHeader clearfix">
            <div
                class="burgerIcon"
                @click="$_navSwitch"
                :class="{ open: navSwitch }"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navTitle routeTitle" @click="$_routerPush">
                <!-- {{ getCurProduct }}&nbsp;{{ $t("TEXT_SPORT_CONTROL") }} -->
                <span class="env" v-if="displayEnvName">
                    <!-- {{displayEnvName}} -->
                </span>
            </div>
            <!--現在在哪個router-->
            <div class="routerName">&nbsp;
                <!-- {{ routerName }} -->
            </div>
            <div class="topNavRight">
                <!--時間-->
                <div class="esTime">
                    <!-- {{ ESDate }}({{ $t("TEXT_ES") }}) -->
                </div>
                <!--網路狀態-->
                <div class="status-wrap">
                    <!-- <div class="current-status">
                        <div class="status" :class="networkHealthStatus" />
                        <span class="title">Network</span>
                    </div> -->
                    <!-- <div class="status-drop">
                        <span class="name">Websocket-Api</span>
                        <br />
                        <div
                            class="companyItem"
                            v-for="(ws1, index) in networkStatus.socket1"
                            :key="'ws1-' + index"
                        >
                            <div>
                                {{ timeDisplay(ws1.time) }}
                                {{ $t(ws1.textKey) }}
                            </div>
                        </div>
                        <hr />
                        <span class="name">WebSocket-Event</span>
                        <br />
                        <div
                            class="companyItem"
                            v-for="(ws2, index) in networkStatus.socket2"
                            :key="'ws2-' + index"
                        >
                            <div>
                                {{ timeDisplay(ws2.time) }}
                                {{ $t(ws2.textKey) }}
                            </div>
                        </div>
                    </div> -->
                </div>
                <!--訊源狀態-->
                <!-- 如果 api 錯誤-->
                <div class="status-wrap" v-if="!sourceHealth || Object.keys(sourceHealth).length === 0">
                    <!-- <div class="current-status">
                        <div class="status error" />
                        <span class="title">Source</span>
                    </div>

                    <div class="status-drop">
                        <div class="companyItem">
                            {{ $t('TEXT_SOURCE_HEALTH_DISCONNECT') }}
                        </div>
                    </div> -->
                </div>
                <!-- 如果 api 正確回傳-->
                <div class="status-wrap" v-else>
                    <!-- <div class="current-status">
                        <div class="status" :class="sourceHealthStatus" />
                        <span class="title">Source</span>
                    </div>
                    <div class="status-drop">
                        <div
                            class="companyItem"
                            v-for="(company, companyName) in sourceHealth"
                            :key="companyName"
                        >
                            <div class="name">{{ companyName }}：</div>
                            <div class="status">
                                {{ $t(`TEXT_${company.status.toUpperCase()}`) }}
                            </div>
                        </div>
                    </div> -->
                </div>

                <!--語系選擇-->
                <div
                    class="langSelect"
                    tabindex="1"
                    @blur="showLangDrop = false"
                    :class="{ active: showLangDrop }"
                    @click="showLangDrop = !showLangDrop"
                >
                    <!-- <div class="currentLang">
                        <span>{{ curLangText }}</span>
                        <i
                            class="triangle el-icon-caret-bottom"
                            :class="{ rotate: showLangDrop }"
                        />
                    </div>
                    <div class="langDrop" v-show="showLangDrop">
                        <div
                            class="langSelection"
                            v-for="lang in langList"
                            :key="lang.value"
                            v-if="lang.value !== curLang"
                            @click="selectLang(lang.value)"
                        >
                            {{ lang.textKey }}
                        </div>
                    </div> -->
                </div>
                <!--使用者功能選擇、改密碼、登出-->
                <div
                    class="userInfo"
                    @mouseleave="showUserDrop = false"
                    :class="{ active: showUserDrop }"
                    @click="showUserDrop = true"
                >
                    <!-- <div class="userName">
                        <span> {{ userInfo.username }}</span>
                        <i
                            class="triangle el-icon-caret-bottom"
                            :class="{ rotate: showUserDrop }"
                        />
                    </div>

                    <div class="userDrop" v-show="showUserDrop">
                        <div class="changePassword" @click="$_changePassword">
                            <div class="keyIcon" />
                            {{ $t("TEXT_CHANGE_PASSWORD") }}
                        </div>
                        <div class="logOut" @click="$_logout">
                            <div class="logoutIcon" />
                            {{ $t("TEXT_LOGOUT") }}
                        </div>
                        <div class="ip">
                            <CopyComponent :shownText="`IP: ${userIp}`" :copyText="userIp"/>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <NavBtns />
    </div>
</template>
<script>
import moment from 'moment';
// import CopyComponent from 'components/commonComponent/CopyComponent';
// import { formatTime, logout } from 'common/func';
// import menuIcon from 'vue-material-design-icons/Menu.vue';
import NavBtns from '@/components/tpl/NavBtns';
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
    components: {
        // menuIcon,
        // CopyComponent,
        NavBtns
    },
    data () {
        return {
            showLangDrop: false,
            showUserDrop: false,
            langList: [
                {
                    textKey: '繁體中文',
                    value: 'tw'
                },
                {
                    textKey: '简体中文',
                    value: 'cn'
                },
                {
                    textKey: 'English',
                    value: 'en'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            // ESDate: state =>
            //     formatTime(new Date(state.common.nowESTimeStamp)).slice(2),
            navSwitch: state => state.common.navSwitch,
            // 訊源健康狀態
            sourceHealth: state => state.common.sourceHealth,
            // 網路狀態
            networkStatus: state => state.common.checkStatus,
            // 現在語系
            curLang: state => state.common.lang,
            // 帳戶資訊
            userInfo: state => state.common.ajaxData.info || {},
            userIp: state => state.common.ip
        }),
        ...mapGetters(['getCurProduct', 'getCurEnv']),
        routerName () {
            if (this.$route.meta && this.$route.meta.titleKey) {
                return ' - ' + this.$t(this.$route.meta.titleKey);
            }
            return '';
        },
        curLangText () {
            const { curLang, langList } = this;
            const selectedLang = langList.find(lang => lang.value === curLang);
            if (selectedLang) {
                return selectedLang.textKey;
            }
            return '';
        },
        networkHealthStatus () {
            const { networkStatus } = this;
            if (
                networkStatus.socket1[networkStatus.socket1.length - 1]
                    .method !== 'connected'
            ) {
                return 'error';
            }
            if (
                networkStatus.socket2[networkStatus.socket1.length - 1]
                    .method !== 'connected'
            ) {
                return 'error';
            }
            return 'connected';
        },
        sourceHealthStatus () {
            const { sourceHealth } = this;
            const connectingStatus = ['maintenance', 'connecting', 'reconnect'];
            const errorStatus = ['unknown', 'error', 'disconnect'];
            if (sourceHealth) {
                // 紅色狀態優先
                if (Object.keys(sourceHealth).length === 0) return 'error';
                if (Object.values(sourceHealth).find(sourceData => errorStatus.includes(sourceData.status))) return 'error';
                // 其次灰色狀態
                if (Object.values(sourceHealth).find(sourceData => connectingStatus.includes(sourceData.status))) return 'connecting';
                // 都沒有就是綠色
                return 'work';
            }
            return 'error';
        },
        displayEnvName () {
            const { getCurEnv } = this;
            switch (getCurEnv) {
                case 'gcp-qatest':
                    return 'QA';
                case 'gcp-development':
                    return 'DEV';
                default:
                    return '';
            }
        }
    },
    methods: {
        ...mapActions([
            'actionCommonNavSwitch',
            'actionCommonSetLang',
            'actionGameOpenSwitchGameOpenType',
            'actionCommonUpdateSingleState'
        ]),
        selectLang (lang) {
            this.selectLang = false;
            this.actionCommonSetLang({ lang });
        },
        timeDisplay (val) {
            if (val) {
                return moment(val).format('MM-DD HH:mm:ss');
            } else {
                return '';
            }
        },
        // 登出
        // $_logout () {
        //     logout();
        // },
        // 變更密碼
        $_changePassword () {
            this.actionCommonUpdateSingleState({
                stateName: 'common',
                keyName: 'onModifyPassword',
                value: true
            });
        },
        $_navSwitch () {
            this.actionCommonNavSwitch();
        },
        $_routerPush () {
            this.$router.push({ name: 'overview' });
        }
    }
};
</script>
