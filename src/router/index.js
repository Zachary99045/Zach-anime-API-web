import {createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Favorite',
      component: ()=>import ('../components/Favorite.vue')
    },
    {
      path: '/Popular',
      name: 'Popular',
      component: ()=>import ('../components/Popular.vue')
    },
    {
      path: '/intro/:id',
      name: 'intro',
      component: ()=>import ('../components/intro.vue')
    },
  ]
})

export default router