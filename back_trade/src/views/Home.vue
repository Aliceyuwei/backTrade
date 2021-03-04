<template>
  <div class="home">
    home
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tpl-content></tpl-content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TplContent from '@/components/tpl/TplContent'
export default {
  name: 'Home',
  components: {
    TplContent
  }
}
</script>
