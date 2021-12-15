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
import { eventBus } from '../../main';

export default {
  data() {
    return {
      selectedMember: 0
    }
  },
  methods: {
    changeSelectedMember(member) {
      switch(member) {
        case 'commander':
          this.selectedMember = 0;
          break;
        case 'specialist':
          this.selectedMember = 1;
          break;
        case 'pilot':
          this.selectedMember = 2;
          break;
        case 'engineer':
          this.selectedMember = 3;
          break;
      }
      eventBus.$emit('memberWasChanged', this.selectedMember);
    }        
  }    
}
</script>

<style>

</style>