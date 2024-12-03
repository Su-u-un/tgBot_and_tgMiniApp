import { createRouter, createWebHistory } from 'vue-router';

import Friend from '../pages/friend.vue';
import Tasks from '../pages/Tasks.vue';
import Merits from '../pages/Merits.vue';
import Boosts from '../pages/Boosts.vue';
import Games from '../pages/Games.vue';
import fish from '../pages/fish.vue'
import fire from '../pages/fire.vue'

const routes = [
  { path: '/', redirect: '/merits' },
  { path: '/friend', component: Friend },
  { 
    path: '/tasks',
    component: Tasks,
    children:[
      {
        path: '',
        redirect: '/tasks/rate',
      },
      {
        path: '/tasks/fish',
        component: fish,
      },
      {
        path: '/tasks/fire',
        component: fish,
      },
      {
        path: '/tasks/rate',
        component: fish,
      },
      {
        path: '/tasks/duihuakuang',
        component: fish,
      },
      {
        path: '/tasks/game',
        component: fish,
      },
      {
        path: '/tasks/lingli',
        component: fish,
      },
    ]
  },
  { path: '/merits', component: Merits },
  { path: '/boosts',  component: Boosts },
  { path: '/games',  component: Games },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
