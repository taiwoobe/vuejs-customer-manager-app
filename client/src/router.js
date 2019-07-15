import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginComponent from './components/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/customers',
      // route level code-splitting
      // this generates a separate chunk (customer.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customer-component" */ './components/customer/customers-component.vue'),
      children: [
        {
          path: '',
          name: 'allCustomers',
          component: () => import(/* webpackChunkName: "all-customers-component" */ './components/customer/all-customers-component.vue')
        },
        {
          path: 'create',
          name: 'createCustomer',
          component: () => import(/* webpackChunkName: "create-customer-component" */ './components/customer/create-customer-component.vue')
        },
        {
          path: ':id',
          name: 'editCustomer',
          component: () => import(/* webpackChunkName: "edit-customer-component" */ './components/customer/edit-customer-component.vue')
        }
      ]
    }
  ]
})
