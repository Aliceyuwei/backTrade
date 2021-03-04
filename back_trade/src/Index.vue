<template>
    <div id="app">
        <modify-password v-if="onModifyPassword"></modify-password>
        <loading-component></loading-component>
        <router-view :class="{ scrollStyle: scrollStyle }"></router-view>
    </div>
</template>
<style lang="scss" src="./css/index.scss"></style>
<script>
import Vue from 'vue';
import $ from "jquery";
import { mapState, mapActions } from 'vuex';
import { checkStorageItem } from '@/common/func';
import LoadingComponent from '@/components/commonComponent/LoadingComponent';
import ModifyPassword from '@/components/commonComponent/ModifyPassword';
export default {
    provide: {
        bus: new Vue()
    },
    components: {
        LoadingComponent,
        ModifyPassword
    },
    data () {
        return {
            scrollStyle: false,
            mainTitle: ''
        };
    },
    computed: {
        ...mapState({
            titleKey: state => state.common.titleKey,
            onModifyPassword: state => state.common.onModifyPassword,
            over1200: state => state.common.over1200,
            isLogin: state => state.common.isLogin,
            lang: state => state.common.lang
        })
    },
    watch: {
        // // titleKey改變時 改變title
        // titleKey (val) {
        //     document.title = `${this.$t(
        //         'TEXT_IN_TRADE_CENTER_TITLE'
        //     )} - ${this.$t(val)}`;
        // },
        // lang (val) {
        //     document.title = `${this.$t(
        //         'TEXT_IN_TRADE_CENTER_TITLE'
        //     )} - ${this.$t(this.titleKey)}`;
        // }
    },
    methods: {
        ...mapActions(['actionCommonUpdateSingleState']),
        handlerResize (event) {
            const { over1200 } = this;
            const nowOver1200 = event.target.innerWidth >= 1200;
            if (over1200 !== nowOver1200) {
                this.actionCommonUpdateSingleState({
                    stateName: 'common',
                    keyName: 'over1200',
                    value: nowOver1200
                });
            }
        }
    },
    mounted () {
        // 不是webkit的話不會有捲軸樣式
        this.scrollStyle = document.body.style.WebkitBoxShadow !== undefined;
        $(window).on('resize.over1200', this.handlerResize);
        $(window).trigger('resize');
    },
    created () {
        // title > IN體育控端
        // const _mainTitle = this.$t('TEXT_IN_TRADE_CENTER_TITLE');// XBB体育控端
        const _mainTitle = '体育控端';
        this.mainTitle = _mainTitle;
        document.title = _mainTitle;
        // 把過期的localStorage刪除
        checkStorageItem();
    },
    beforeDestroy () {
        $(window).off('resize.over1200');
    }
};
</script>

<style>
.odds-wrap-container {
    overflow-y: auto;
    height: 100%;
}
.rotate {
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
}
.oddCollapse {
    height: calc(100% - 70px);
}
.collapseTable {
    height: auto !important;
}
.oddHeadDrop {
    color: white;
    font-weight: 600;
    transition-duration: 0.2s;
}
.w100 {
    width: 100%;
}
.transitionWidth {
    transition-duration: 0.1s;
}
.flexgrow4 {
    flex-grow: 4 !important;
}
.autoHeight {
    height: auto !important;
}
.border-top {
    border-top: dotted 1px #81878b;
}
.bold {
    font-weight: 600;
}
#gameDetails {
    position: absolute;
    z-index: 99;
    right: 43px;
    bottom: 12px;
    height: 500px;
    border: solid 1px blue;
}
.w50 {
    width: 50%;
}
.flex {
    display: flex;
}
.flex-column {
    flex-direction: column;
}
[v-cloak] {
    display: none;
}
</style>
