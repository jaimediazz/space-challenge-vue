<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5 d-flex align-items-center">
            <app-destination-image 
                :destinationImage="destinationImages[selectedDestination]" 
                :name="names[selectedDestination]">
            </app-destination-image>
            <div class="col d-flex flex-column">
                <app-destination-header></app-destination-header>
                <app-destination-description 
                    :name="names[selectedDestination]"
                    :description="descriptions[selectedDestination]"
                    :distance="distances[selectedDestination]"
                    :travelTime="travelTimes[selectedDestination]">
                </app-destination-description>
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
            names: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
            descriptions: [
                'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
                'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
                'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
                'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
            ],
            distances: ['384,400 KM','225 MIL. KM','628 MIL. KM','1.6 BIL. KM'],
            travelTimes: ['3 DAYS','9 MONTHS','3 YEARS','7 YEARS']
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
