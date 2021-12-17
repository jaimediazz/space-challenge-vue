<template>
  <div class="container d-flex flex-column">
    <!-- HEADER -->
    <app-header></app-header>
    <div class="row mt-5 d-flex align-items-center">
      <!-- MAIN TEXT -->
      <div class="col">
        <div class="text-format">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
      <!-- EXPLORE BUTTON -->
      <div class="col d-flex justify-content-end">
        <router-link to="/destination"  @click.native="changeSelectedTab('destination')">
          <div 
            class="d-flex justify-content-center align-items-center rounded-circle bg-light align-middle" 
            style="width: 250px; height: 250px; color: #000; font-family: Bellefair; font-size: 28px;">EXPLORE</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header/Header.vue';

export default {
  components: {
    appHeader: Header
  },
  methods: {
    changeSelectedTab(tab) {
      this.$store.dispatch('changeSelectedTab',tab);
    }
  }  
}
</script>

<style>

</style>
