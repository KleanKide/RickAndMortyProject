import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import EpisodesPage from '@/pages/EpisodesPage.vue';
import CharactersPage from '@/pages/CharactersPage.vue';
import LocationPage from '@/pages/LocationPage.vue';
import CharacterDetailsPage from '@/pages/CharacterDetailsPage.vue';
import LocationDetailsPage from '@/pages/LocationDetailsPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/characters',
    name: 'CharactersPage',
    component: CharactersPage
  },      
  { 
    path: '/episodes',
    component: EpisodesPage 
  },
  { 
    path: '/Locations',
    component: LocationPage
  },
  {
    path: '/character/:id',
    name: 'CharacterDetailsPage',
    component: CharacterDetailsPage,
    props: true
  },
  {
    path: '/episode/:id',
    name: 'EpisodeDetails',
    component: () => import('@/pages/EpisodeDetailsPage.vue'),
  },
  {
    path: '/location/:id',
    name: 'LocationDetailsPage',
    component: LocationDetailsPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
