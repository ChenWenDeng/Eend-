import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../page/msite/msite'
import Details from '../page/details/details'

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
    }
  ]
})
