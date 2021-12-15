import Home from '../components/Home.vue';
import Moon from '../components/destinations/Moon.vue';
/* import Mars from '../components/destinations/Moon.vue';
import Moon from '../components/destinations/Moon.vue';
import Moon from '../components/destinations/Moon.vue'; */
import Destination from '../components/Destination.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/destination', component: Destination}
];