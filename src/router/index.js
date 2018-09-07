import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/Index'
import Main from '../pages/Main'
import Sorts from '../pages/Sorts'
import Cart from '../pages/Cart'
import Mine from '../pages/Mine'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          component: Main
        },
        {
          path: '/sorts',
          component: Sorts
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: 'mine',
          component: Mine
        },
      ]
    }
  ]
})
