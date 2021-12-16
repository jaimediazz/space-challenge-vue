<template>
  <div class="bg-image" :style="{ backgroundImage: 'url(' + backgroundImg + ')', height: '100vh'}">
    <router-view></router-view>
  </div>
</template>

<script>
import { eventBus } from './main';
import Home from './components/Home.vue';

export default {
  data() {
    return {
      backgroundImg: '../assets/home/background-home-desktop.jpg'
    }
  },
  components: {
    appHome: Home
  },
  created() {
    eventBus.$on('tabWasChanged', (backgroundImg) => {
      this.backgroundImg = backgroundImg;   
    })
  }
}
</script>

<style>

</style>
