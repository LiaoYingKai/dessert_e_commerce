import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DessertPage from '@/components/DessertPage'
import Login from '@/components/Login'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/DessertPage',
    name: 'DessertPage',
    component: DessertPage
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  }]
})