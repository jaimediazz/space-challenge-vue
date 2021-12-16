<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5">
            <app-technology-description></app-technology-description>
        </div>    
    </div>    
</template>

<script>
import Header from './header/Header.vue';
import TechnologyDescription from './technologies/TechnologyDescription.vue';

export default {
    components: {
        appHeader: Header,
        appTechnologyDescription: TechnologyDescription
    }    
}
</script>

<style>

</style>