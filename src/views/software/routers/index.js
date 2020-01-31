export default [
  {
    path: '/software',
    component: () => import('../List')
  },
  {
    path: '/software/:clazz',
    component: () => import('../List')
  }
]