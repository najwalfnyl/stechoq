<script setup>
import { useRoute } from 'vue-router';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import CarouselComp from '@/components/partial/CarouselComp.vue';

const router = useRoute();
</script>

<template>
  <header-comp />
  <carousel-comp v-if="router.path === '/'" />
  <main id="wrapper">
    <slot />
  </main>
  <footer-comp />
</template>
