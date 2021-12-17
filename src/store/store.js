import Vue from 'vue';
import VueX from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        backgroundImg: '../assets/home/background-home-desktop.jpg'
    },
    getters: {
        changeSelectedTab: (state) => (tab) => {
            switch(tab) {
                case 'home':
                  return state.backgroundImg ='../assets/home/background-home-desktop.jpg';
                case 'destination':
                  return state.backgroundImg ='../assets/destination/background-destination-desktop.jpg';
                case 'crew':
                  return state.backgroundImg ='../assets/crew/background-crew-desktop.jpg';
                case 'technology':
                  return state.backgroundImg ='../assets/technology/background-technology-desktop.jpg';
            }            
        }
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
        }
    },
    actions: {
        changeSelectedTab: (context,payload) => {
            context.commit('changeSelectedTab',payload);
        }
    },
    plugins: [createPersistedState()]
});