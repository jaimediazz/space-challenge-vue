<template>
    <div class="row mb-5">
      <div class="col-2 mt-5">
        <img :src="logo" alt="logo">
      </div>
      <div class="col-10 mt-5 d-flex justify-content-end align-items-center">
        <ul class="nav" id="nav-bar">
          <li class="nav-item" :class="{active: isActive}"> 
            <router-link to="/" @click.native="changeSelectedTab('home')"> 00 HOME </router-link>
          </li>
          <li class="nav-item" :class="{active: isActive}"> 
            <router-link to="/destination" @click.native="changeSelectedTab('destination')"> 01 DESTINATION </router-link> 
          </li>
          <li class="nav-item" :class="{active: isActive}">
            <router-link to="/crewMember" @click.native="changeSelectedTab('crew')"> 02 CREW </router-link> 
          </li>
          <li class="nav-item" :class="{active: isActive}">
            <router-link to="/technology" @click.native="changeSelectedTab('technology')"> 03 TECHNOLOGY </router-link> 
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          logo: '../../assets/shared/logo.svg',
        }
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