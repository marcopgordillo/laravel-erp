import Home from '@/views/Home.vue'
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
