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
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('@/views/Carousel.vue'),
  },
  {
    path: '/product-detail',
    name: 'product detail',
    component: () => import('@/views/ProductDetailView.vue'),
  },
  {
    path: '/product-detail2',
    name: 'product detail2',
    component: () => import('@/views/ProductDetailView2.vue'),
  },
];

export default routes;
