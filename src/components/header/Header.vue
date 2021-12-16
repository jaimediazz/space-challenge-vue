<template>
    <div class="row mb-5">
      <div class="col-2 mt-5">
        <img :src="logo" alt="logo">
      </div>
      <div class="col-10 mt-5 d-flex justify-content-end align-items-center" 
        style="background-image: url('~/assets/home/Rectangle.png');">
        <ul class="nav" id="nav-bar">
          <li class="nav-item active"> 
            <router-link to="/" @click.native="changeSelectedTab('home')"> 00 Home </router-link>
          </li>
          <li class="nav-item"> 
            <router-link to="/destination" @click.native="changeSelectedTab('destination')"> 01 Destination </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/crewMember" @click.native="changeSelectedTab('crew')"> 02 Crew </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/technology" @click.native="changeSelectedTab('technology')"> 03 Technology </router-link> 
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data() {
        return {
          logo: '../../assets/shared/logo.svg',
          backgroundImageRoute: 'home'
        }
    },
    methods: {
      changeSelectedTab(tab) {
        switch(tab) {
          case 'home':
            this.backgroundImageRoute ='../assets/home/background-home-desktop.jpg';
            break;
          case 'destination':
            this.backgroundImageRoute ='../assets/destination/background-destination-desktop.jpg';
            break;
          case 'crew':
            this.backgroundImageRoute ='../assets/crew/background-crew-desktop.jpg';
            break;
          case 'technology':
            this.backgroundImageRoute ='../assets/technology/background-technology-desktop.jpg';
            break;                                                
        }
        eventBus.$emit('tabWasChanged', this.backgroundImageRoute);
      }
    }
}
</script>

<style>

</style>