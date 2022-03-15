<script setup>
import { RouterLink } from 'vue-router';

const navs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about-us',
  },
  {
    name: 'Contact',
    path: '/contact-us',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'E-Learning',
    path: '/e-learning',
  },
  {
    name: 'Kampus Merdeka',
    path: '/kampus-merdeka',
  },
  {
    name: 'News',
    path: '/news',
  },
];
</script>

<template>
  <nav id="header-nav">
    <ul>
      <template v-for="(nav, i) in navs" :key="i">
        <li>
          <router-link :to="{ path: nav.path }">{{ nav.name }}</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>
