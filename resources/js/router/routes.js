import { auth, admin, guest } from '@/js/middleware'
import Home from '@/js/views/Home.vue'
import NotFound from '@/js/views/NotFound.vue'
import Unauthorized from '@/js/views/Unauthorized.vue'

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
    component: () => import('@/js/views/Dashboard.vue'),
  },
  {
    path: '/user',
    name: 'User',
    meta: { middleware: [auth] },
    component: () => import('@/js/views/users/User.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    meta: { middleware: [auth], can: 'users-list' },
    component: () => import('@/js/views/users/Users.vue'),
  },
  {
    path: '/users/create',
    name: 'UsersCreate',
    meta: { middleware: [auth], can: 'users-create' },
    component: () => import('@/js/views/users/UsersCreate.vue'),
  },
  {
    path: '/users/:id',
    name: 'UsersId',
    meta: { middleware: [auth], can: 'users-list' },
    component: () => import('@/js/views/users/UsersId.vue'),
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
        component: () => import('@/js/components/users/UserEditForm.vue'),
      },
    ],
  },
  {
    path: '/roles',
    name: 'Roles',
    meta: { middleware: [auth], can: 'roles-list' },
    component: () => import('@/js/views/users/Roles.vue'),
  },
  {
    path: '/roles/create',
    name: 'RolesCreate',
    meta: { middleware: [auth], can: 'roles-create' },
    component: () => import('@/js/views/users/RolesCreate.vue'),
  },
  {
    path: '/roles/:id',
    name: 'RolesId',
    meta: { middleware: [auth], can: 'roles-list' },
    component: () => import('@/js/views/users/RolesId.vue'),
    children: [
      {
        path: 'edit',
        name: 'RoleEdit',
        meta: { middleware: [auth], can: 'roles-update' },
        component: () => import('@/js/components/users/RoleEditForm.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    meta: { middleware: [guest] },
    component: () => import('@/js/views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { middleware: [guest] },
    component: () => import('@/js/views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { middleware: [guest], layout: 'empty' },
    component: () => import('@/js/views/Login.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    meta: { middleware: [guest], layout: 'empty' },
    component: () => import('@/js/views/ResetPassword.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: { middleware: [guest] },
    component: () => import('@/js/views/ForgotPassword.vue'),
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
