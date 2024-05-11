import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Site from '@/views/site/site'
import Project01 from '@/views/project01/project01.vue'
import Project02 from '@/views/project02/project02.vue'
import Project03 from '@/views/project03/project03.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/site', component: Site },
      { path: '/project01', component: Project01 },
      { path: '/project02', component: Project02 },
      { path: '/project03', component: Project03 }
    ]
  }

]

const router = new VueRouter({
  routes
})

// 需要权限进的页面
const authorUrls = ['/']

router.beforeEach((to, from, next) => {
  // 不是权限页面
  if (!authorUrls.includes(to.path)) {
    next()
  }

  // 是权限页面，判断token
  const token = store.state.user.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
