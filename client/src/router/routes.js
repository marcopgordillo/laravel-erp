import Home from '@/views/Home.vue'
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
const Register = () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')

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
]
