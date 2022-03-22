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
    <div id="product-container" class="main-container">
      <article class="product-item">
        <div class="product-image">
          <img
            :src="imgProduct"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="imgProduct"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="imgProduct"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="imgProduct"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="imgProduct"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
    </div>
  </section>
</template>
