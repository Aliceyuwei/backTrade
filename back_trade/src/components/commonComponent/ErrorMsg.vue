<template>
    <div>errorMsg</div>
    <!-- <transition name="errorMsg">
        <div class="errorMsg-wrap" v-if="errorMsg.length > 0">
            <div class="errorMsg">{{errorMsg[0].msg}}</div>
        </div>
    </transition> -->
</template>
<style lang="scss">
</style>
<script>
// <style lang="scss" src="css/commonComponent/errorMsg.scss"></style>
    // import { mapState, mapActions } from 'vuex';
    // export default {
    //     data () {
    //         return {
    //             clock: 0
    //         };
    //     },
    //     computed: {
    //         ...mapState({
    //             'errorMsg': state => state.common.errorMsg || []
    //         }),
    //         errorMsgSwitch () {
    //             return this.errorMsg.length > 0;
    //         }
    //     },
    //     watch: {
    //         errorMsgSwitch (val, oldVal) {
    //             if (!val && oldVal) {
    //                 clearTimeout(this.clock);
    //             } else if (val && !oldVal) {
    //                 this.clock = setTimeout(this.clockDel, 2500);
    //             }
    //         }
    //     },
    //     methods: {
    //         ...mapActions([
    //             'actionCommonDelErrorMsg'
    //         ]),
    //         clockDel () {
    //             if (this.errorMsg.length > 0) {
    //                 this.actionCommonDelErrorMsg();
    //             }
    //             this.clock = setTimeout(this.clockDel, 2500);
    //         }
    //     },
    //     mounted () {
    //         if (this.errorMsgSwitch) {
    //             this.clock = setTimeout(this.clockDel, 2500);
    //         }
    //     }
    // };
</script>
