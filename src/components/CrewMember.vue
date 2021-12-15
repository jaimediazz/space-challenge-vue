<template>
    <div class="container d-flex flex-column">
        <app-header></app-header>
        <div class="row mt-5 d-flex align-items-center">
            <app-crew-member-description 
                :title="titles[selectedMember]" 
                :name="names[selectedMember]" 
                :description="descriptions[selectedMember]">
            </app-crew-member-description>
            <app-crew-member-image :imgRoute="imgRoutes[selectedMember]" :altImg="names[selectedMember]"></app-crew-member-image>
        </div>
    </div>        
</template>

<script>
import { eventBus } from '../main';
import Header from './header/Header.vue';
import CrewMemberImage from './crewMembers/CrewMemberImage.vue';
import CrewMemberDescription from './crewMembers/CrewMemberDescription.vue';

export default {
    data() {
        return {
            selectedMember: 0,
            titles: ['COMMANDER','SPECIALIST','PILOT','ENGINEER'],
            names: ['DOUGLAS HURLEY','MARK SHUTTLEWORTH','VICTOR GLOVER','ANOUSHEH ANSARI'],
            imgRoutes: [
                '../assets/crew/image-douglas-hurley.png',
                '../assets/crew/image-mark-shuttleworth.png',
                '../assets/crew/image-victor-glover.png',
                '../assets/crew/image-anousheh-ansari.png'
            ],
            descriptions: [
                'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
                'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
                'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
                'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
            ]
        }
    },
    components: {
        appHeader: Header,
        appCrewMemberImage: CrewMemberImage,
        appCrewMemberDescription: CrewMemberDescription
    },
    created() {
        eventBus.$on('memberWasChanged', (selectedMember) => {
            this.selectedMember = selectedMember;
        })
    } 
}
</script>

<style>

</style>
