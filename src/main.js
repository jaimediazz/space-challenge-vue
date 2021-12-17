import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store.js';
import {routes} from './routes/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
