<template>
  <div class="col-3">
    <div>
      <div 
        class="d-flex justify-content-center mb-5 align-items-center border border-1 rounded-circle dimensiones"
        :class="{'active-circular': isActiveTechnology == 'vehicle'}">
        <a @click="changeSelectedTechnology('vehicle')"> <h4>1</h4> </a>
      </div>
      <div 
        class="d-flex justify-content-center mb-5 align-items-center border border-1 rounded-circle dimensiones"
        :class="{'active-circular': isActiveTechnology == 'spaceport'}">
        <a @click="changeSelectedTechnology('spaceport')"> <h4>2</h4> </a>
      </div>
      <div 
        class="d-flex justify-content-center align-items-center border border-1 rounded-circle dimensiones"
        :class="{'active-circular': isActiveTechnology == 'capsule'}">
        <a @click="changeSelectedTechnology('capsule')"> <h4>3</h4> </a>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  data() {
    return {
      selectedTechnology: 0
    }
  },
  methods: {
    changeSelectedTechnology(technology) {
      return this.$store.dispatch('changeSelectedTechnology',technology);
    }
  },
  computed: {
    isActiveTechnology() {
      return this.$store.state.isActiveTechnology;
    }
  }    
}
</script>

<style>

</style>