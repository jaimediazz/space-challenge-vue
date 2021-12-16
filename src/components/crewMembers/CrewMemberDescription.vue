<template>
    <div class="col">
      <div class="text-format">
        <h5 class="mb-5"> <p style="display: inline; color: #D0D6F9;">02</p> MEET YOUR CREW </h5>
        <h5 class="mt-5" style="color: #D0D6F9;"> {{ title }} </h5>
        <h4 class="mb-4"> {{ name }} </h4>
        <p class="mb-5"> {{ description }} </p>
        <app-crew-member-header></app-crew-member-header>
      </div>
    </div>      
</template>

<script>
import CrewMemberHeader from '../header/CrewMemberHeader.vue';

export default {
  props: ['title','name','description'],
  components: {
    appCrewMemberHeader: CrewMemberHeader
  }
}
</script>

<style>

</style>
