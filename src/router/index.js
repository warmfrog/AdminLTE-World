import Router from 'vue-router'
import Vue from 'vue'
import bookRouter from '@/views/book/routers/index.js'
import appRouter from '@/views/app/routers/index.js'
import personEventRouter from '@/views/personEvent/routers/index.js'
import knowledgeRouter from '@/views/knowledge/routers/index.js'
import postRouter from '@/views/post/routers/index.js'
import albumRouter from '@/views/album/routers/index.js'
import openSourceRouter from '@/views/openSource/routers/index.js'
import movieRouter from '@/views/movie/routers/index.js'
import musicRouter from '@/views/music/routers/index.js'
import serviceRouter from '@/views/service/routers/index.js'
import siteRouter from '@/views/site/routers/index.js'
import softwareRouter from '@/views/software/routers/index.js'
import docRouter from '@/views/doc/routers/index.js'
import tutorialRouter from '@/views/tutorial/routers/index.js'
import adminRouter from '@/views/admin/routers/index.js'

Vue.use(Router)

const routes = [
  {
    
    path: '/',
    component: resolve => require(['@/views/main/Main.vue'], resolve),
    children: [
      ...bookRouter,
      ...appRouter,
      ...personEventRouter,
      ...knowledgeRouter,
      ...postRouter,
      ...albumRouter,
      ...openSourceRouter,
      ...movieRouter,
      ...musicRouter,
      ...serviceRouter,
      ...siteRouter,
      ...softwareRouter,
      ...docRouter,
      ...tutorialRouter,
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: 'home',
        component: resolve => require(['@/views/main/Home.vue'], resolve)
      },
      {
        path: '404',
        component: resolve => require(['@/views/main/404.vue'], resolve)
      },
      {
        path: '500',
        component: resolve => require(['@/views/main/500.vue'], resolve)
      }
    ]
  },
  {
    path: "/login",
    component: resolve => require(['@/views/main/Login.vue'], resolve)
  },
  {
    path: "/register",
    component: resolve => require(['@/views/main/Register.vue'], resolve)
  },
  ...adminRouter
]
export default new Router({
  routes
})