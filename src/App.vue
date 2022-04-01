<script setup>
import { RouterView } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

import { useHead } from '@vueuse/head';

useHead({
  title: `STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `COMPANY PROFILE STECHOQ ROBOTIKA INDONESIA`,
    },
  ],
});
</script>

<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<style></style>
