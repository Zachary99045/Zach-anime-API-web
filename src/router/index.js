import {createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/Now',
      name: 'Now',
      component: ()=>import ('../components/Now.vue')
    },
    {
      path: '/Popular',
      name: 'Popular',
      component: ()=>import ('../components/Popular.vue')
    }
  ]
})

export default router