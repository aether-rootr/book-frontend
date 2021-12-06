import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Setting from '../views/Setting.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import ProductDetail from "../views/ProductDetail"
import ProductList from "@/views/ProductList";
import Card from '../views/Cart.vue'
import Address from "@/views/Address";
import AddressEdit from "@/views/AddressEdit";
import Order from "@/views/Order";
import OrderDetail from "@/views/OrderDetail";
import CreateOrder from "@/views/CreateOrder";
import Category from "@/views/Category";
import About from "@/views/About"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      index: 1
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      index: 1
    },
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue'),
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    meta: {
      index: 3
    },
    component: () => import(/* webpackChunkName: "order-detail" */ '../views/OrderDetail.vue'),
  },
  {
    path: '/create-order',
    name: 'create-order',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue'),
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      index: 1
    },
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue'),
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    meta: {
      index: 3
    },
    component: () => import(/* webpackChunkName: "address-edit" */ '../views/AddressEdit.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      index: 1
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
  },
  {
    path: '/product-list',
    name: 'product-list',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "product-list" */ '../views/ProductList.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    meta: {
      index: 3
    },
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductDetail.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
