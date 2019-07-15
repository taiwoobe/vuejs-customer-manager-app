import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateCustomerComponent from './components/customer/create-customer-component.vue'
import EditCustomerComponent from './components/customer/edit-customer-component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customer-component" */ './components/customer/customer-component.vue')
    },
    {
      path: '/customers/create',
      name: 'createCustomer',
      component: CreateCustomerComponent
    },
    {
      path: '/customers/:id',
      name: 'editCustomer',
      component: EditCustomerComponent
    }
  ]
})
