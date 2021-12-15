<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5 d-flex align-items-center">
            <app-destination-image></app-destination-image>
            <div class="col d-flex flex-column">
                <app-destination-header></app-destination-header>
                <app-destination-description></app-destination-description>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './header/Header.vue';
import DestinationHeader from './header/destinationHeader.vue';
import DestinationImage from './destinations/DestinationImage.vue';
import DestinationDescription from './destinations/DestinationDescription.vue';

export default {
    components: {
        appHeader: Header,
        appDestinationImage: DestinationImage,
        appDestinationHeader: DestinationHeader,
        appDestinationDescription: DestinationDescription
    }
}
</script>

<style>

</style>
