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
      backgroundImg: '../assets/home/background-home-desktop.jpg',
/*       backgroundImgRoute: {
        home: '../assets/home/background-home-desktop.jpg',
        destination: '../assets/destination/background-destination-desktop.jpg',
        crew: '../assets/crew/background-crew-desktop.jpg',
        technology: '../assets/technology/background-technology-desktop.jpg'
      } */
    }
  },
  components: {
    appHome: Home
  },
  methods: {
    getBackgroundImageRoute() {
      return this.backgroundImg;
    }
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
