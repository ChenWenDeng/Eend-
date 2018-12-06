import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../page/msite/msite'
import Details from '../page/details/details'
import Login from '../page/login/login'
import Order from '../page/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
