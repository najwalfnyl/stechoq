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
];

export default routes;
