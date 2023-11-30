/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import VueMaterialize from 'vue-materialize';

const app = createApp(App);

app.directive('materialize', {
  mounted(el, binding) {
    M.AutoInit();
    M.Collapsible.init(el);
  },
});

// Use VueMaterialize plugin before creating the app instance
createApp(App).use(router).use(VueMaterialize).mount('#app');
