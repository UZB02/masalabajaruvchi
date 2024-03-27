import { createRouter, createWebHistory } from 'vue-router'
import For from '../views/for.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'for',
      component: For
    },
    {
      path: '/if',
      name: 'If',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/if.vue')
    },
    {
      path: '/if2',
      name: 'If2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/if2.vue')
    },
    {
      path: '/if3',
      name: 'If3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/if3.vue')
    },
    {
      path: '/if4',
      name: 'If4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/if4.vue')
    },
    {
      path: '/begin2',
      name: 'Begin2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/begin2.vue')
    },
    {
      path: '/begin3',
      name: 'Begin3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/begin3.vue')
    },
    
    {
      path: '/begin',
      name: 'Begin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/begin.vue')
    },
  ]
})

export default router
