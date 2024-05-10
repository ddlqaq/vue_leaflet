import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Site from '@/views/site/site'
import Project01 from '@/views/project01/project01.vue'
import Project02 from '@/views/project02/project02.vue'
import Project03 from '@/views/project03/project03.vue'

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

export default router
