import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views//jobs/Jobs.vue'
import JobDetails from '../views//jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id', //どんなidでも遷移できるようになる
    name: 'jobDetails',
    component: JobDetails,
    props: true //:idをpropsとして認めることができます
  },
  // redirect
  {
    path: '/current-jobs', //表示したくないリンク
    redirect: '/jobs' //redirect先のリンク
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',//ここに登録されていないすべてのpathが対象になる。一字一句この通りにすること
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
