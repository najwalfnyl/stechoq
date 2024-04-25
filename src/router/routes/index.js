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
    path: '/stechoq-academy',
    name: 'stechoqacademy',
    component: () => import('@/views/StechoqView.vue'),
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
    name: 'eLearning',
    component: () => import('@/views/LearningView.vue'),
  },
  {
    path: '/contact-us',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/digital-manufacturing',
    name: 'dmanufacture',
    component: () => import('@/views/DigitalManufacture.vue'),
  },
  {
    path: '/contact-sales',
    name: 'contact sales',
    component: () => import('@/views/ContactSales.vue'),
  },

];

export default routes;
