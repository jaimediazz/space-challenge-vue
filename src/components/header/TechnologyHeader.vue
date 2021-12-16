<template>
    <div class="col-3">
      <div>
        <div class="d-flex justify-content-center mb-5 align-items-center border border-1 rounded-circle 
          dimensiones active-circular">
          <a href="#" @click="changeSelectedTechnology('vehicle')"> <h4>1</h4> </a>
        </div>
        <div class="d-flex justify-content-center mb-5 align-items-center border border-1 rounded-circle dimensiones">
          <a href="#" @click="changeSelectedTechnology('spaceport')"> <h4>2</h4> </a>
        </div>
        <div class="d-flex justify-content-center align-items-center border border-1 rounded-circle dimensiones">
          <a href="#" @click="changeSelectedTechnology('capsule')"> <h4>3</h4> </a>
        </div>
      </div>
    </div>    
</template>

<script>
import { eventBus } from '../../main';

export default {
    data() {
        return {
            selectedTechnology: 0
        }
    },
    methods: {
        changeSelectedTechnology(technology) {
            switch(technology) {
                case 'vehicle':
                    this.selectedTechnology = 0;
                    break;
                case 'spaceport':
                    this.selectedTechnology = 1;
                    break;
                case 'capsule':
                    this.selectedTechnology = 2;
                    break;
            }
            eventBus.$emit('technologyWasChanged', this.selectedTechnology);
        }
    }    
}
</script>

<style>

</style>