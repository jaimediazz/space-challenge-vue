<template>
    <ul class="nav" id="nav-bar">
      <li class="nav-item active">
        <a href="#" @click="changeSelectedDestination('moon')">MOON</a>
      </li>
      <li class="nav-item">
        <a href="#" @click="changeSelectedDestination('mars')">MARS</a>
      </li>
      <li class="nav-item">
        <a href="#" @click="changeSelectedDestination('europa')">EUROPA</a>
      </li>
      <li class="nav-item">
        <a href="#" @click="changeSelectedDestination('titan')">TITAN</a>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedDestination: 0
    }
  },
  methods: {
    changeSelectedDestination(planet) {
      this.$store.dispatch('changeSelectedDestination',planet);
    }    
  }
}
</script>

<style>

</style>
