export default [
  {
    path: '/software',
    component: () => import('../List'),
    children: [
      {
        path: 'business',
        component: () => import('../SoftwareList')
      },
      {
        path: 'talk',
        component: () => import('../SoftwareList')
      },
      {
        path: 'development',
        component: () => import('../SoftwareList')
      }, {
        path: '',
        component: () => import('../SoftwareList')
      }
    ]
  }
]