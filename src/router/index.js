import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import TechnicianView from '../views/TechnicianView.vue';
import RideSharerView from '../views/RideSharerView.vue';
import TowingView from '../views/TowingView.vue';
import UserProfileView from '../views/ProfileView.vue';
import ServiceView from '../views/ServiceViews.vue';
import DeliveryView from '../views/DeliveryView.vue';
import TransView from '../views/TransactionDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/technician',
      name: 'technician',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TechnicianView
    },
    {
      path: '/ridesharer',
      name: 'ridesharer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RideSharerView
    },
    {
      path: '/towing',
      name: 'towing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TowingView
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserProfileView
    },
    {
      path: '/service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ServiceView
    },
    {
      path: '/delivery',
      name: 'delivery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DeliveryView
    },
    {
      path: '/Transaction',
      name: 'transaction',
      component: TransView
    }
  ]
})

export default router
