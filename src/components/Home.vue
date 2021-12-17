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
        <div class="card border border-1 rounded-circle">
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
            <h4> <a href="./destinations/destination-moon.html"> EXPLORE </a> </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header/Header.vue';

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style>

</style>
