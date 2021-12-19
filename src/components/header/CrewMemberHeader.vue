<template>
    <div class="mt-5">
      <a @click="changeSelectedMember('commander')">
        <div 
          class="me-4 border border-0 rounded-circle dimensiones-crew hijo" 
          :class="[isActiveCrew == 'commander' ? 'active-circular' : 'non-active']"></div>              
      </a>         
      <a @click="changeSelectedMember('specialist')">
        <div 
          class="me-4 border border-0 rounded-circle dimensiones-crew hijo"
          :class="[isActiveCrew == 'specialist' ? 'active-circular' : 'non-active']"></div>              
      </a>
      <a @click="changeSelectedMember('pilot')">
        <div 
          class="me-4 border border-0 rounded-circle dimensiones-crew hijo"
          :class="[isActiveCrew == 'pilot' ? 'active-circular' : 'non-active']"></div>              
      </a>
      <a @click="changeSelectedMember('engineer')">
        <div 
          class="border border-0 rounded-circle dimensiones-crew hijo"
          :class="[isActiveCrew == 'engineer' ? 'active-circular' : 'non-active']"></div>              
      </a>
    </div>    
</template>

<script>
export default {
  data() {
    return {
      selectedMember: 0
    }
  },
  methods: {
    changeSelectedMember(member) {
      this.$store.dispatch('changeSelectedMember',member);
    }        
  },
  computed: {
    isActiveCrew() {
      return this.$store.state.isActiveCrew;
    }
  }    
}
</script>

<style>

</style>