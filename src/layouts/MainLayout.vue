<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <header-comp />
  <main id="wrapper">
    <slot />
  </main>
  <footer-comp />
</template>
