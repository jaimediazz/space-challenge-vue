<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5 d-flex align-items-center">
            <app-destination-image :destinationImage="destinationImages[0]" :altImage="altImages[0]"></app-destination-image>
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
    data() {
        return {
            destinationImages: ['../assets/destination/image-moon.png'],
            altImages: ['Moon']
        }
    },
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
