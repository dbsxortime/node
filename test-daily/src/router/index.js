import { createRouter, createWebHistory } from 'vue-router'

import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
import About from '@/components/About'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/day/:date',
    name: 'Day',
    component: Day
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
