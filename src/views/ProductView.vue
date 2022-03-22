<script setup>
import { RouterLink } from 'vue-router';
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';

const products = [
  {
    id: 'agv',
    name: 'Automatic Guided Vehicle',
    img: assetsImg('list-product/agv.png'),
  },
  {
    id: 'dcs-inject',
    name: 'Digital Control System Injection',
    img: assetsImg('list-product/dcs-inject.png'),
  },
  {
    id: 'dcs-stamping',
    name: 'Digital Control System Stamping',
    img: assetsImg('list-product/dcs-stamping.png'),
  },
  {
    id: 'dcs-warehouse',
    name: 'Digital Control System Warehouse',
    img: assetsImg('list-product/dcs-warehouse.png'),
  },
  {
    id: 'dcs-erp',
    name: 'Digital Control System ERP',
    img: assetsImg('list-product/dcs-erp.png'),
  },
  {
    id: 'ventilator-icu',
    name: 'Ventilator ICU',
    img: assetsImg('list-product/ventilator-icu.png'),
  },
  {
    id: 'arm-robot',
    name: 'ARM Robot Transfer',
    img: assetsImg('list-product/arm-robot.png'),
  },
  {
    id: 'qc-camera',
    name: 'QC Camera',
    img: assetsImg('list-product/qc-camera.png'),
  },
]
</script>

<template>
  <heading-comp>
    <template #title>Our Products</template>
  </heading-comp>
  <section id="product-list" class="my-8 py-8">
    <div id="product-container" class="main-container">
      <template v-for="(item, i) in products" :key="i">
      <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
        <article class="product-item">
          <div class="product-image">
            <img
              :src="item.img"
            />
          </div>
          <div class="-mt-28 h-28 px-8">
            <h3 class="text-white font-medium text-4xl">{{item.name}}</h3>
          </div>
        </article>
      </router-link>
      </template>
    </div>
  </section>
</template>
