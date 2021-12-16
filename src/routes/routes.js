import Home from '../components/Home.vue';
import CrewMember from '../components/CrewMember.vue';
import Technology from '../components/Technology.vue';
import Destination from '../components/Destination.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/crewMember', component: CrewMember},
    {path: '/technology', component: Technology},
    {path: '/destination', component: Destination}
];