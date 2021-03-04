<template>
    <div v-if="loading" class="loadingMask">
        loading
        <!-- <div class="spinner loadingAni">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div> -->
    </div>
</template>
<style>
/* .loadingMask {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0);
    cursor: wait;
    align-items: center;
    justify-content: center;
}

.spinner {
    width: 70px;
    text-align: center;
}

.spinner > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
} */
</style>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            loading: state => state.common.loading
        })
    }
};
</script>
