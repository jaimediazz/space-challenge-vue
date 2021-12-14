<template>
  <div class="bg-image" style="background-image: url('./assets/home/background-home-desktop.jpg'); height: 100vh;">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: {
    appHome: Home
  }
}
</script>

<style>

</style>
