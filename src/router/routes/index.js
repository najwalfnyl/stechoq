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
    // name: 'eLearning',
    // component: () => import('@/views/LearningView.vue'),
    beforeEnter : () => {
      window.open('https://academy.stechoq.com/');
    },
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/views/ContactUs.vue'),
  },
  // {
  //   path: '/contact',
  //   name: 'contactus',
  //   component: () => import('@/views/ContactView.vue')
  // }
  {
    path: '/product-category/:category_name',
    name: 'product-category',
    component: () => import('@/views/DigitalManufacture.vue'),
  },
  {
    path: '/contact-sales',
    name: 'contact sales',
    component: () => import('@/views/ContactSales.vue'),
  },

];

export default routes;
