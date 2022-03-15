<script setup>
import NavComp from '@/components/base/NavComp.vue';
import brandImg from '@/assets/img/stechoq-logo.svg';
</script>

<template>
  <header id="header">
    <div id="brand">
      <img :src="brandImg" :alt="siteMeta.title" />
    </div>
    <nav-comp />
  </header>
</template>
