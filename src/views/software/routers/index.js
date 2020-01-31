export default [
  {
    path: 'software/:clazz',
    component: () => import('../List.vue'),
    children: [
      {
        path: '',
        component: () => import('../SoftwareList.vue')
      }
    ]
  }
]