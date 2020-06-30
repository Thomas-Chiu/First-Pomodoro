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
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: 'List'
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
    meta: {
      title: 'Setting'
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue'),
    meta: {
      title: 'Report'
    }
  },
  {
    path: '*', // 404 用 *
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
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
