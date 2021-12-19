<template>
  <div id="background" :style="{ backgroundImage: 'url(' + backgroundImg + ')', height: '100vh'}">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: {
    appHome: Home
  },
  computed: {
    backgroundImg() {
      return this.$store.state.backgroundImg;
    }    
  }
}
</script>

<style>

</style>
