<template>
    <div class="content">
        tplContent
        <!-- <error-msg></error-msg> -->
        <router-view id="routeContent"></router-view>
    </div>
</template>
<script>
    // import ErrorMsg from 'components/commonComponent/ErrorMsg';
    export default {
        components: {
            // ErrorMsg
        }
    };
</script>
<style scoped>
.content {
    height: 100%;
}
</style>
