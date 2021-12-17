<template>
    <div class="mt-5">
      <a href="#" @click="changeSelectedMember('commander')">
        <div class="me-4 border border-0 rounded-circle dimensiones-crew active-circular hijo"></div>              
      </a>         
      <a href="#" @click="changeSelectedMember('specialist')">
        <div class="me-4 border border-0 rounded-circle dimensiones-crew non-active hijo"></div>              
      </a>
      <a href="#" @click="changeSelectedMember('pilot')">
        <div class="me-4 border border-0 rounded-circle dimensiones-crew non-active hijo"></div>              
      </a>
      <a href="#" @click="changeSelectedMember('engineer')">
        <div class="border border-0 rounded-circle dimensiones-crew non-active hijo"></div>              
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
  }    
}
</script>

<style>

</style>