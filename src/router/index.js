import Vue from 'vue'
import Router from 'vue-router'
// import Msite from '../page/msite/msite'
// import Details from '../page/details/details'
// import Login from '../page/login/login'
// import Order from '../page/order/order'
// import Register from '../page/register/register'
// import Shopping from '../page/shopping/shopping'
// import Payment from '../page/payment/payment'


const msite = () => import('../page/msite/msite')
const details = () => import('../page/details/details')
const login = () => import('../page/login/login')
const order = () => import('../page/order/order')
const register = () => import('../page/register/register')
const shopping = () => import('../page/shopping/shopping')
const payment = () => import('../page/payment/payment')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'msite',
      component: msite
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
