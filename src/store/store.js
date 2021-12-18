import Vue from 'vue';
import VueX from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        backgroundImg: '../assets/home/background-home-desktop.jpg',
        destinationImages: [
            '../assets/destination/image-moon.png',
            '../assets/destination/image-mars.png',
            '../assets/destination/image-europa.png',
            '../assets/destination/image-titan.png'            
        ],
        selectedDestination: 0,
        selectedMember: 0,
        selectedTechnology: 0,
        isActive: 'home',
        isActiveDestination: 'moon',
        isActiveCrew: 'commander'
    },
    mutations: {
        changeSelectedTab: (state,payload) => {
            switch(payload) {
                case 'home':
                  state.backgroundImg ='../assets/home/background-home-desktop.jpg';
                  break;
                case 'destination':
                  state.backgroundImg ='../assets/destination/background-destination-desktop.jpg';
                  break;
                case 'crew':
                  state.backgroundImg ='../assets/crew/background-crew-desktop.jpg';
                  break;
                case 'technology':
                  state.backgroundImg ='../assets/technology/background-technology-desktop.jpg';
                  break;
            }
            state.isActive = payload;            
        },
        changeSelectedDestination: (state,payload) => {
            switch (payload) {
                case 'moon':
                    state.selectedDestination = 0;                    
                    break;
                case 'mars':
                    state.selectedDestination = 1;
                    break;
                case 'europa':
                    state.selectedDestination = 2;
                    break;
                case 'titan':
                    state.selectedDestination = 3;
                    break;
            }
            state.isActiveDestination = payload;
        },
        changeSelectedMember: (state,payload) => {
            switch (payload) {
                case 'commander':
                    state.selectedMember = 0;                    
                    break;
                case 'specialist':
                    state.selectedMember = 1;
                    break;
                case 'pilot':
                    state.selectedMember = 2;
                    break;
                case 'engineer':
                    state.selectedMember = 3;
                    break;
            }  
            state.isActiveCrew = payload;         
        },
        changeSelectedTechnology: (state,payload) => {
            switch(payload) {
                case 'vehicle':
                    state.selectedTechnology = 0;
                    break;
                case 'spaceport':
                    state.selectedTechnology = 1;
                    break;
                case 'capsule':
                    state.selectedTechnology = 2;
                    break;
            }
        }        
    },
    actions: {
        changeSelectedTab: (context,payload) => {
            context.commit('changeSelectedTab',payload);
        },
        changeSelectedDestination: (context,payload) => {
            context.commit('changeSelectedDestination',payload);
        },
        changeSelectedMember: (context,payload) => {
            context.commit('changeSelectedMember',payload);
        },
        changeSelectedTechnology: (context,payload) => {
            context.commit('changeSelectedTechnology',payload);
        } 
    },
    plugins: [createPersistedState()]
});