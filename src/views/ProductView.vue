<script setup>
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';

const imgProduct = assetsImg('product/mps.png');
</script>

<template>
  <heading-comp>
    <template #title>Our Products</template>
  </heading-comp>
  <section id="product-list" class="my-8 py-8">
    <div class="container grid grid-cols-3 gap-4">
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96 bg-gradient-to-t from-neutral-600 via-neutral-500 to-neutral-400">
          <img
            :src="imgProduct"
            class="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
    </div>
  </section>
</template>
