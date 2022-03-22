<script setup>
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';
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
            :src="assetsImg('list-product/agv.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Automatic Guided Vehicle</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/dcs-inject.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Digital Control System Injection</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/dcs-stamping.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Digital Control System Stamping</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/dcs-warehouse.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Digital Control System Warehouse</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/dcs-erp.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Digital Control System ERP</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/ventilator-icu.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">Ventilator ICU</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/arm-robot.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">ARM Robot Transfer</h3>
        </div>
      </article>
      <article class="product-item">
        <div class="product-image">
          <img
            :src="assetsImg('list-product/qc-camera.png')"
          />
        </div>
        <div class="-mt-28 h-28 px-8">
          <h3 class="text-white font-medium text-4xl">QC Camera</h3>
        </div>
      </article>
    </div>
  </section>
</template>
