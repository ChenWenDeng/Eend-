import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../page/msite/msite'
import Details from '../page/details/details'
import Login from '../page/login/login'
import Order from '../page/order/order'
import Register from '../page/register/register'
import Shopping from '../page/shopping/shopping'
import Payment from '../page/payment/payment'

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
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    }
  ]
})
