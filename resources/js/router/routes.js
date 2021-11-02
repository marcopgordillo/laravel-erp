import { auth, admin, guest } from '@/middleware'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Unauthorized from '@/views/Unauthorized.vue'

export default [
  {
    path: '/',
    name: 'Home',
    meta: { middleware: [guest], layout: 'empty' },
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
    meta: { middleware: [auth], can: 'users-list' },
    component: () => import(/* webpackChunkName: "users" */ '@/views/users/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'UsersId',
    meta: { middleware: [auth], can: 'users-list' },
    component: () => import(/* webpackChunkName: "users-id" */ '@/views/users/UsersId.vue'),
    children: [
      {
        path: 'edit',
        name: 'UserEdit',
        meta: {
          middleware: [auth],
          can: (to, from, can) => {
            return can('users-update', { id: +to.params.id })
          }
        },
        component: () => import(/* webpackChunkName: "user-edit" */ '@/components/users/UserEditForm.vue'),
      },
    ],
  },
  {
    path: '/roles',
    name: 'Roles',
    meta: { middleware: [auth], can: 'roles-list' },
    component: () => import(/* webpackChunkName: "roles" */ '@/views/users/Roles.vue'),
  },
  {
    path: '/roles/create',
    name: 'RolesCreate',
    meta: { middleware: [auth], can: 'roles-create' },
    component: () => import(/* webpackChunkName: "roles-create" */ '@/views/users/RolesCreate.vue'),
  },
  {
    path: '/roles/:id',
    name: 'RolesId',
    meta: { middleware: [auth], can: 'roles-list' },
    component: () => import(/* webpackChunkName: "roles-id" */ '@/views/users/RolesId.vue'),
    children: [
      {
        path: 'edit',
        name: 'RoleEdit',
        meta: { middleware: [auth], can: 'roles-update' },
        component: () => import(/* webpackChunkName: "role-edit" */ '@/components/users/RoleEditForm.vue'),
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
    meta: { middleware: [guest], layout: 'empty' },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    meta: { middleware: [guest], layout: 'empty' },
    component: () => import(/* webpackChunkName: "reset-password" */ '@/views/ResetPassword.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "forgot-password" */ '@/views/ForgotPassword.vue'),
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    meta: { layout: 'empty' },
    component: Unauthorized,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { layout: 'empty' },
    component: NotFound,
  }
]
