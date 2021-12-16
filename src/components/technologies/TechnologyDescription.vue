<template>
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-5" style="color: #fff;"> <p style="display: inline; color: #D0D6F9;">03</p> SPACE LAUNCH 101</h5>
        </div>
        <app-tecnology-header></app-tecnology-header>
        <div class="col-9 text-format">
          <h5 style="color: #D0D6F9; font-size: 18px;">THE TERMINOLOGY...</h5>
          <h4 class="mb-5">LAUNCH VEHICLE</h4>
          <p style="color: #D0D6F9;">A launch vehicle or carrier rocket is a rocket-propelled vehicle used
            to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. 
            Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
            it's quite an awe-inspiring sight on the launch pad!</p>            
        </div>
      </div>
    </div>    
</template>

<script>
import TechnologyHeader from '../header/TechnologyHeader.vue';

export default {
    components: {
        appTechnologyHeader: TechnologyHeader
    }    
}
</script>

<style>

</style>