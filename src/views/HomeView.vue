<script setup>
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router';
import { assetsImg } from '@/utils/helper';
import HeadingComp from '@/components/base/HeadingComp.vue';
import useHomeStore from '../stores/home';

useHead({
  title: `Home | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Homepage Stechoq Robotika Indonesia`,
    },
  ],
});

const partners = [
  assetsImg('brand/ypti-vertical.svg'),
  assetsImg('brand/sugity.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
  assetsImg('brand/ypti-vertical.svg'),
  assetsImg('brand/sugity.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
  assetsImg('brand/ypti-vertical.svg'),
  assetsImg('brand/sugity.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
  assetsImg('brand/ypti-vertical.svg'),
  assetsImg('brand/sugity.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
];


const homelists = useHomeStore();

</script>

<template>
  <heading-comp>
    
    <template #title>
      <span class="company-name text-white">RnD Company</span> <br>
      <span class="subtitle text-white">From Idea to Mass Production</span>
    </template>
    <template #subtitle>
      Berkarya untuk Bangsa
    </template>
    <div class="btn-heading">
    </div>
  </heading-comp>
  <section id="home-list" class="my-8 py-8">
    <div id="list-container" class="main-container">
      <template v-for="(item, i) in homelists.list" :key="i">
        <article class="list-item">
          <div class="list-image" :style="{ backgroundImage: `url(${item.img})` }">
            <div class="list-container">
            <div class="list-title text-white font-bold text-md mt-2">{{ item.name }}</div>
            <div class="list-sub text-white text-sm">{{ item.sub }}</div>
            <div class="btn-heading ">
                  <button type="button" class="bg-white text-black hover:bg-gray-200">
                    Learn More  
                  </button>
              </div>
              </div>
          </div>
        </article>
      </template>
    </div>
  </section>
  <section id="client" class="h-580 my-10" >
    <div>
      <h3 class="font-bold text-6xl text-center text-navy-prim mb-10">
        Our<br>
        Clients
      </h3>
    </div>
    <div
      class="main-container grid grid-cols-6 grid-rows-4 md:gap-2 place-content-center text-center h-full"
    >
      <template v-for="(partner, i) in partners" :key="i">
        <div class="flex align-middle "><img :src="partner" /></div>
      </template>
    </div>
  </section>
</template>
