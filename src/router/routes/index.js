const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/kampus-merdeka',
    name: 'kampusMerdeka',
    component: () => import('@/views/KampusMerdekaView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductView.vue'),
    children: [
      {
        path: '/products/:id',
        name: 'productDetail',
        component: () => import('@/views/ProductDetailView.vue'),
      },
    ],
  },
  {
    path: '/e-learning',
    // name: 'eLearning',
    // component: () => import('@/views/LearningView.vue'),
    beforeEnter : () => {
      window.location.href = 'https://academy.stechoq.com/'
    },
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/contact',
    name: 'contactus',
    component: () => import('@/views/ContactView.vue')
  }
];

export default routes;
