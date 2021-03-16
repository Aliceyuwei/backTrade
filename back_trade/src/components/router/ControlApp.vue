<template>
    <div id="controlApp">
        <!-- controlApp -->
        <div class="top">
            <top-nav></top-nav>
        </div>
        <div class="bottom" :class="{ navOpen: navSwitch }">
            <!-- <e-s-time v-show="false"></e-s-time> -->
            <tpl-content></tpl-content>
        </div>
    </div>
</template>
<style lang="scss" src="@/css/router/otherPage/controlApp.scss"></style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex';
// import { commonApi, memberApi } from '@/common/apiKernel';
// import store from '@/store';
import TplContent from '@/components/tpl/TplContent'
import TopNav from '@/components/tpl/TopNav';

export default {
    beforeRouteEnter (to, from, next) {
        console.log(to,from,'123')
        next();
        // // 取得初始資訊
        // store.dispatch('actionCommonLoading', true);
        // commonApi.getInitInfo({
        //     success: () => {
        //         store.dispatch('actionCommonLoading', false);
        //         memberApi.getMemberTagOption({});
        //         store.dispatch('actionCommonSetLogin', true);
        //         next();
        //     },
        //     // 如果初始資訊取得失敗就導到登入頁
        //     fail: () => {
        //         store.dispatch('actionCommonLoading', false);
        //         next({ name: 'login' });
        //     }
        // });
    },
    components: {
        TplContent,
        TopNav
    },
    computed: {
        ...mapState({
            navSwitch: state => state.common.navSwitch,
            lang: state => state.common.lang
        })
    },
}
</script>
