<script setup>
import { assetsImg } from '@/utils/helper';
import HeadingComp from '@/components/base/HeadingComp.vue';
import CarouselComp from '@/components/partial/CarouselComp.vue';

const images = [
  assetsImg('product/dcs.png'),
  assetsImg('product/mps.png'),
  assetsImg('product/ventilator.png'),
  assetsImg('product/mbkm.png'),
];
</script>

<template>
  <heading-comp>
    <template #title>Berkarya Untuk Bangsa</template>
    <template #subtitle>
      We research, develops, and build robotics for medical, education and
      industrial purposes.
    </template>
  </heading-comp>
  <carousel-comp :images="images" />
  <section id="client" class="h-32 my-8">
    <div
      class="main-container grid grid-cols-4 md:gap-8 place-content-center text-center h-full"
    >
      <div class="flex align-middle"><img :src="assetsImg('brand/ypti-vertical.svg')" /></div>
      <div class="flex align-middle"><img :src="assetsImg('brand/sugity.svg')" /></div>
      <div class="flex align-middle"><img :src="assetsImg('brand/toyota.svg')" /></div>
      <div class="flex align-middle"><img :src="assetsImg('brand/kubota.svg')" /></div>
    </div>
  </section>
  <section id="products" class="py-2 grid grid-flow-row gap-4 my-4">
    <article>
      <div class="h-96 overflow-hidden bg-gradient-to-l from-neutral-700 via-neutral-500 to-neutral-400">
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="assetsImg('product/dcs.png')"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl mb-4 font-medium">
              Digital Control System
            </p>
            <p class="hidden md:block text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              laboriosam optio vel, magnam, illum mollitia explicabo cumque
              fugit ab accusamus non est? Adipisci excepturi in fugit molestiae
              consequatur obcaecati eligendi.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="h-96 overflow-hidden bg-gradient-to-l from-neutral-700 via-neutral-500 to-neutral-400">
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="assetsImg('product/mps.png')"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl mb-4 font-medium">
              Mini Production System
            </p>
            <p class="hidden md:block text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              laboriosam optio vel, magnam, illum mollitia explicabo cumque
              fugit ab accusamus non est? Adipisci excepturi in fugit molestiae
              consequatur obcaecati eligendi.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="h-96 overflow-hidden bg-gradient-to-l from-neutral-700 via-neutral-500 to-neutral-400">
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="assetsImg('product/ventilator.png')"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl mb-4 font-medium">
              ICU Ventilator
            </p>
            <p class="hidden md:block text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              laboriosam optio vel, magnam, illum mollitia explicabo cumque
              fugit ab accusamus non est? Adipisci excepturi in fugit molestiae
              consequatur obcaecati eligendi.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="h-96 overflow-hidden bg-gradient-to-l from-neutral-700 via-neutral-500 to-neutral-400">
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="assetsImg('product/mbkm.png')"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl mb-4 font-medium">
              Kampus Merdeka
            </p>
            <p class="hidden md:block text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              laboriosam optio vel, magnam, illum mollitia explicabo cumque
              fugit ab accusamus non est? Adipisci excepturi in fugit molestiae
              consequatur obcaecati eligendi.
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
