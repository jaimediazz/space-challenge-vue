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
import { eventBus } from '../../main';

export default {
  data() {
    return {
      selectedDestination: 0
    }
  },
  methods: {
    changeSelectedDestination(planet) {
      switch(planet) {
        case 'moon':
          this.selectedDestination = 0;
          break;
        case 'mars':
          this.selectedDestination = 1;
          break;
        case 'europa':
          this.selectedDestination = 2;
          break;
        case 'titan':
          this.selectedDestination = 3;
          break;
      }
      eventBus.$emit('destinationWasChanged', this.selectedDestination);
    }    
  }
}
</script>

<style>

</style>
