<template>
    <div class="row mb-5">
      <div class="col-2 mt-5">
        <img :src="logo" alt="logo">
      </div>
      <div class="col-10 mt-5 d-flex justify-content-end align-items-center" 
        style="background-image: url('~/assets/home/Rectangle.png');">
        <ul class="nav" id="nav-bar">
          <li class="nav-item active"> 
            <router-link to="/"> 00 Home </router-link>
          </li>
          <li class="nav-item"> 
            <router-link to="/destination"> 01 Destination </router-link> 
          </li>
          <li class="nav-item"> 
            <a href="./crew-members/crew-commander.html"> 02 Crew </a>  
          </li>
          <li class="nav-item"> 
            <a href="./technologies/technology-vehicle.html"> 03 Technology </a>  
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: '../../assets/shared/logo.svg'
        }
    }
}
</script>

<style>

</style>