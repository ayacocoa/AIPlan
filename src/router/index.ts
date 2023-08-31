// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
  },
  {
    path: '/mainfood',
    name:'mainfood',
    component: () => import('@/layouts/food/MainFood.vue'),
  },
  {
    path: '/video',
    name:'video',
    component: () => import('@/layouts/video/ShowVideo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
