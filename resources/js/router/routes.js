import { auth, admin, guest, can } from '@/middleware'
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    meta: { middleware: [guest] },
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
  },
  {
    path: '/user',
    name: 'User',
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ '@/views/users/User.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    meta: { middleware: [auth, can], permission: 'users-list' },
    component: () => import(/* webpackChunkName: "users" */ '@/views/users/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'UsersId',
    meta: { middleware: [auth, can], permission: 'users-list' },
    component: () => import(/* webpackChunkName: "users-id" */ '@/views/users/UsersId.vue'),
    children: [
      {
        path: 'edit',
        name: 'UserEdit',
        component: () => import(/* webpackChunkName: "users-edit" */ '@/views/users/UsersEdit.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "reset-password" */ '@/views/ResetPassword.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "forgot-password" */ '@/views/ForgotPassword.vue'),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
  }
]
