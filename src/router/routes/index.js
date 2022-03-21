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
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: () => import('@/views/ProductDetailView.vue'),
  }
];

export default routes;
