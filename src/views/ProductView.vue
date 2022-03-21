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
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="h-full">
        <div class="object-fill overflow-hidden w-full h-96">
          <img
            style="
              mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.75)
              );
            "
            :src="imgProduct"
            class="w-full h-full object-cover bg-neutral-900"
            alt=""
          />
        </div>
        <div class="-mt-28 mb-8 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
    </div>
  </section>
</template>
