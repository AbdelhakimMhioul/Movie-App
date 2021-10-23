import { createRouter, createWebHistory } from 'vue-router'
// Home Components
import HomeIndex from '../components/Home/index.vue';

const routes = [
  { path: '/', component: HomeIndex, name: 'Home' },
  { path: '/movies', component: () => import('../components/Movies/index.vue'), name: 'MoviesIndex' },
  { path: '/movies/:id', component: () => import('../components/Movies/show.vue'), name: 'MoviesShow', props: true },
  { path: '/actors', component: () => import('../components/Actors/index.vue'), name: 'ActorsIndex' },
  { path: '/actors/:id', component: () => import('../components/Actors/show.vue'), name: 'ActorsShow', props: true },
  { path: '/tv', component: () => import('../components/Tv/index.vue'), name: 'TvIndex' },
  { path: '/tv/:id', component: () => import('../components/Tv/show.vue'), name: 'TvShow', props: true },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
