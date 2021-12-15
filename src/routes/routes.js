import Home from '../components/Home.vue';
import CrewMember from '../components/CrewMember.vue';
import Destination from '../components/Destination.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/crewMember', component: CrewMember},
    {path: '/destination', component: Destination}
];