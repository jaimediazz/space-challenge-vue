<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './header/Header.vue';

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style>

</style>
