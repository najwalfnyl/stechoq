<script setup>
import { useHead } from '@vueuse/head';
import HeadingComp from '@/components/base/HeadingComp.vue';

useHead({
  title: `E-Learning | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `E-Learning di Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <heading-comp>
    <template #title>E-Learning</template>
    <template #subtitle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      architecto qui, nemo voluptates, similique ipsum vel officia maxime minima
      reprehenderit quam vitae pariatur provident id natus error aliquam odit
      corrupti!
    </template>
  </heading-comp>
</template>
