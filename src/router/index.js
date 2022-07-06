import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import('@/views/HomeCustom.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: import('@/views/CoursesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
