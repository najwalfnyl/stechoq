<script setup>
import { RouterLink } from 'vue-router';
import useProductStore from '@/stores/product';
import HeadingComp from '@/components/base/HeadingComp.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: `Produk | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Produk Stechoq Robotika Indonesia`,
    },
  ],
});
const products = useProductStore();
</script>

<template>
  <template v-if="$route.name === 'products'">
    <heading-comp>
      <template #title>Our Products</template>
    </heading-comp>
    <section id="product-list" class="my-8 py-8">
      <div id="product-container" class="main-container">
        <template v-for="(item, i) in products.list" :key="i">
          <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
            <article class="product-item">
              <div class="product-image">
                <img
                  :src="item.img"
                />
              </div>
              <div class="product-title">
                <h3 class="text-white font-medium text-4xl">{{item.name}}</h3>
              </div>
            </article>
          </router-link>
        </template>
      </div>
    </section>
  </template>
  <router-view v-else />
</template>
