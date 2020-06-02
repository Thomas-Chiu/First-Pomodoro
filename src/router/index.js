import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue'),
    meta: {
      title: 'List'
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue'),
    meta: {
      title: 'Setting'
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report.vue'),
    meta: {
      title: 'Setting'
    }
  },
  {
    path: '*', // 404 用 *
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 Error'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
