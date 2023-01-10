import {createRouter} from 'vue-router'
const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Now',
      component: Now
    },
    {
      path: '/Popular',
      name: 'Popular',
      component: Popular
    }
  ]
})

export default router