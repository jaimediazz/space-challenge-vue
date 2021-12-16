<template>
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-5" style="color: #fff;"> <p style="display: inline; color: #D0D6F9;">03</p> SPACE LAUNCH 101</h5>
        </div>
        <app-technology-header></app-technology-header>
        <div class="col-9 text-format">
          <h5 style="color: #D0D6F9; font-size: 18px;"> THE TERMINOLOGY... </h5>
          <h4 class="mb-5"> {{ name }} </h4>
          <p style="color: #D0D6F9;"> {{ description }} </p>            
        </div>
      </div>
    </div>    
</template>

<script>
import TechnologyHeader from '../header/TechnologyHeader.vue';

export default {
    props: ['name','description'],
    components: {
        appTechnologyHeader: TechnologyHeader
    }    
}
</script>

<style>

</style>