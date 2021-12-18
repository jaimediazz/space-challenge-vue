<template>
    <ul class="nav" id="nav-bar">
      <li class="nav-item" :class="{active: isActiveDestination == 'moon'}">
        <a href="#" @click="changeSelectedDestination('moon')">MOON</a>
      </li>
      <li class="nav-item" :class="{active: isActiveDestination == 'mars'}">
        <a href="#" @click="changeSelectedDestination('mars')">MARS</a>
      </li>
      <li class="nav-item" :class="{active: isActiveDestination == 'europa'}">
        <a href="#" @click="changeSelectedDestination('europa')">EUROPA</a>
      </li>
      <li class="nav-item" :class="{active: isActiveDestination == 'titan'}">
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
  },
  computed: {
    isActiveDestination() {
      return this.$store.state.isActiveDestination;
    }
  }
}
</script>

<style>

</style>
