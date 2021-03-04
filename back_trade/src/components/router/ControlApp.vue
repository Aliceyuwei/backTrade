<template>
    <div id="controlApp">
        controlApp
        <div class="top">
            <top-nav></top-nav>
        </div>
        <div class="bottom" :class="{ navOpen: navSwitch }">
            <!-- <e-s-time v-show="false"></e-s-time> -->
            <tpl-content></tpl-content>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex';
import TplContent from '@/components/tpl/TplContent'
import TopNav from '@/components/tpl/TopNav';
export default {
    name: 'Home',
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
