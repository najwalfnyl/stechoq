<script setup>
import { RouterLink } from 'vue-router';
import useProductStore from '@/stores/product';
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
  <div>
      <h3 class="font-bold text-4xl text-center text-navy-prim mb-8 mt-10">
        Featured Products
      </h3>
      <div class="flex justify-center">
  <div class="w-20 border border-solid border-navy-prim"></div>
</div>
    </div>
    <div class="font-bold text-6xl text-center text-navy-prim mt-10">
      Stechoq Academy
    </div>
    <div class="full-box main-container " :style="{ 'background-image': 'url(src/assets/img/product/stechoq.png)' }">
    <div class="text-center">
      <h1 class="text-white font-bold text-4xl">Learn More</h1>
    </div>
  </div>
  <div class="font-bold text-6xl text-center text-navy-prim mt-10">
      Digital Manufacturing
    </div>
    <template v-if="$route.name === 'products'">
    <section id="product-list" class="my-8 py-8">
      <div id="product-container" class="main-container">
        <template v-for="(item, i) in products.list" :key="i">
          <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
            <article class="product-item">
              <div class="product-image" :style="{ backgroundImage: `url(${item.img})` }">
              </div>
              <div class="product-title text-black font-bold text-xl mt-2 ml-4">{{ item.name }}</div>
              <div class="product-sub text-black text-md mt-2 ml-4">{{ item.sub }}</div>
            </article>
          </router-link>
        </template>
      </div>
    </section>
  </template>
  <div class="font-bold text-6xl text-center text-navy-prim mt-10">
      Robotics and Automations
    </div>
    <template v-if="$route.name === 'products'">
    <section id="product-list" class="my-8 py-8">
      <div id="product-container" class="main-container">
        <template v-for="(item, i) in products.list" :key="i">
          <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
            <article class="product-item">
              <div class="product-image" :style="{ backgroundImage: `url(${item.img})` }">
              </div>
              <div class="product-title text-black font-bold text-xl mt-2 ml-4">{{ item.name }}</div>
              <div class="product-sub text-black text-md mt-2 ml-4">{{ item.sub }}</div>
            </article>
          </router-link>
        </template>
      </div>
    </section>
  </template>
  <router-view v-else />
</template>

<style scoped>
.full-box {
  @apply mt-10 object-fill overflow-hidden w-3/4 h-40 bg-gradient-to-t from-neutral-700 via-neutral-500 to-neutral-400;
  background-image: src="src\assets\img\product\ventilator.png";
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
}
</style>
