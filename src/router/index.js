import { createRouter, createWebHistory } from 'vue-router'
// const array = require('./../pages')

// let res = await this.axios.get("/api/cursosAll/" + this.id_carrera);
const routes = [
  {
    path: '/',
    name: 'appWrapper',
    component: () => import('@/pages/AppWrapper.vue'),
    children: [
      {
        path: '/',
        name: 'homeApp',
        component: () => import('@/views/HomeCustom.vue')
      },
      {
        path: '/CURSOS',
        name: 'courses',
        component: () => import('@/views/CoursesView.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404_page',
    component: () => import('@/pages/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
