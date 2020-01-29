import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: resolve => require(['@/views/main/Home.vue'], resolve),
    children: [
      {
        path: '/post',
        component: resolve => require(['@/views/post/List.vue'], resolve)
      },
      {
        path: '/software',
        component: resolve => require(['@/views/software/List.vue'], resolve)
      },
      {
        path: '/photo',
        component: resolve => require(['@/views/photo/List.vue'], resolve)
      },
      {
        path: '/book',
        component: resolve => require(['@/views/book/List.vue'], resolve)
      },
      {
        path: '/service',
        component: resolve => require(['@/views/service/List.vue'], resolve)
      },
      {
        path: '/app',
        component: resolve => require(['@/views/app/List.vue'], resolve)
      },
      {
        path: '/movie',
        component: resolve => require(['@/views/movie/List.vue'], resolve)
      },
      {
        path: '/music',
        component: resolve => require(['@/views/music/List.vue'], resolve)
      }
      ,
      {
        path: '/url',
        component: resolve => require(['@/views/url/List.vue'], resolve)
      },
      {
        path: '/openSource',
        component: resolve => require(['@/views/openSource/List.vue'], resolve)
      }
    ]
  },
]
export default new Router({
  routes
})