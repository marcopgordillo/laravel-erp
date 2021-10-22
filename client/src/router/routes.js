import Home from '@/views/Home.vue'
const NotFound = () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
const Register = () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const ForgotPassword = () => import(/* webpackChunkName: "forgot-password" */ '@/views/ForgotPassword.vue')

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { requiresAuth: true },
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
]
