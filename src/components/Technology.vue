<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row my-5">
            <app-technology-description 
                :name="names[selectedTechnology]"
                :description="descriptions[selectedTechnology]">
            </app-technology-description>
            <app-technology-image
                :imgRoute="imgRoutes[selectedTechnology]"
                :altImg="names[selectedTechnology]">
            </app-technology-image>
        </div>    
    </div>    
</template>

<script>
import { eventBus } from '../main';
import Header from './header/Header.vue';
import TechnologyImage from './technologies/TechnologyImage.vue';
import TechnologyDescription from './technologies/TechnologyDescription.vue';

export default {
    data() {
        return {
            selectedTechnology: 0,
            names: ['LAUNCH VEHICLE', 'SPACEPORT', 'SPACE CAPSULE'],
            descriptions: [
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            ],
            imgRoutes: [
                '../../assets/technology/image-launch-vehicle-portrait.jpg',
                '../../assets/technology/image-spaceport-portrait.jpg',
                '../../assets/technology/image-space-capsule-portrait.jpg'
            ]
        }
    },
    components: {
        appHeader: Header,
        appTechnologyImage: TechnologyImage,
        appTechnologyDescription: TechnologyDescription
    },
    created() {
        eventBus.$on('technologyWasChanged', (selectedTechnology) => {
            this.selectedTechnology = selectedTechnology;
        })
    }    
}
</script>

<style>

</style>