import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '/hotel/:id',
    name: 'HotelDetail',
    component: () => import('@/views/HotelDetail.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/Reservation.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/views/Payment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
