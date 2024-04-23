import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/MainComponent.vue';
import About from './components/AboutComponent.vue';
import HowTo from './components/HowToComponent.vue';
import CityPage from './components/CityPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/howto', component: HowTo },
  { path: '/city/:id', name: 'city', component: CityPage, props: true },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Initialize Materialize components here
  // eslint-disable-next-line no-undef
  M.Sidenav.init(document.querySelector('.sidenav'));
    // eslint-disable-next-line no-undef
  M.Sidenav.init(document.querySelector('.collapsible'));
  next();
});

export default router;
