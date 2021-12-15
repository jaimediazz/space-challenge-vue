<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5 d-flex align-items-center">
            <app-destination-image 
                :destinationImage="destinationImages[selectedDestination]" 
                :altImage="altImages[selectedDestination]">
            </app-destination-image>
            <div class="col d-flex flex-column">
                <app-destination-header></app-destination-header>
                <app-destination-description></app-destination-description>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';
import Header from './header/Header.vue';
import DestinationHeader from './header/destinationHeader.vue';
import DestinationImage from './destinations/DestinationImage.vue';
import DestinationDescription from './destinations/DestinationDescription.vue';

export default {
    data() {
        return {
            selectedDestination: 0,
            destinationImages: [
                '../assets/destination/image-moon.png',
                '../assets/destination/image-mars.png',
                '../assets/destination/image-europa.png',
                '../assets/destination/image-titan.png'
            ],
            altImages: ['Moon']
        }
    },
    components: {
        appHeader: Header,
        appDestinationImage: DestinationImage,
        appDestinationHeader: DestinationHeader,
        appDestinationDescription: DestinationDescription
    },
    created() {
        eventBus.$on('destinationWasChanged', (selectedDestination) => {
            this.selectedDestination = selectedDestination;
        })
    }
}
</script>

<style>

</style>
