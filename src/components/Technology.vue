<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5">
            <app-technology-description></app-technology-description>
            <app-technology-image></app-technology-image>
        </div>    
    </div>    
</template>

<script>
import Header from './header/Header.vue';
import TechnologyImage from './technologies/TechnologyImage.vue';
import TechnologyDescription from './technologies/TechnologyDescription.vue';

export default {
    components: {
        appHeader: Header,
        appTechnologyImage: TechnologyImage,
        appTechnologyDescription: TechnologyDescription
    }    
}
</script>

<style>

</style>