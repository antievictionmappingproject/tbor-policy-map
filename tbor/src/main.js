/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createApp } from 'vue';
import App from './App.vue';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import VueMaterialize from 'vue-materialize';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/MainComponent.vue';
import About from './components/AboutComponent.vue';
import HowTo from './components/HowToComponent.vue';
import CityPage from './components/CityPage.vue';
import CartoPage from './components/CartoPage.vue';

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/howto', component: HowTo },
  { path: '/city/:id', name: 'city', component: CityPage, props: true },
  { path: '/carto/:id', name: 'carto', component: CartoPage, props: true },
  // Other routes
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Initialize Materialize components before each route navigation
router.beforeEach((to, from, next) => {
  // Initialize Materialize components here
  M.Sidenav.init(document.querySelector('.sidenav'));
  M.Collapsible.init(document.querySelector('.collapsible'));
  next();
});

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
