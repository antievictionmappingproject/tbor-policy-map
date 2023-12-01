/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import VueMaterialize from 'vue-materialize';

// Create the app instance
const app = createApp(App);

// Register a custom directive for Materialize
app.directive('materialize', {
  mounted(el, binding) {
    M.AutoInit();
    M.Collapsible.init(el);
  },
});

// Use VueMaterialize plugin and Vue Router before mounting the app
app.use(router).use(VueMaterialize).mount('#app');
