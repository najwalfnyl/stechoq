<script setup>
import { assetsImg } from '@/utils/helper';
import HeadingComp from '@/components/base/HeadingComp.vue';
import CarouselComp from '@/components/partial/CarouselComp.vue';

const imgClient = assetsImg('/brand/ypti-vertical.svg');
const imgClient2 = assetsImg('/stechoq-logo.svg');

const imgProduct = assetsImg('/product/mps.png');
</script>

<template>
  <heading-comp>
    <template #title>Berkarya Untuk Bangsa</template>
    <template #subtitle>
      We research, develops, and build robotics for medical, education and
      industrial purposes.
    </template>
  </heading-comp>
  <carousel-comp />
  <section id="client" class="h-32 my-8">
    <div
      class="container grid grid-cols-4 gap-8 place-content-center text-center h-full"
    >
      <div class="flex align-middle"><img :src="imgClient" /></div>
      <div class="flex align-middle"><img :src="imgClient2" /></div>
      <div class="flex align-middle"><img :src="imgClient" /></div>
      <div class="flex align-middle"><img :src="imgClient2" /></div>
    </div>
  </section>
  <section id="products" class="py-2 grid grid-flow-row gap-4 my-4">
    <article>
      <div class="h-96 overflow-hidden bg-neutral-900">
        <img
          class="object-cover h-full w-full"
          style="
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0.75)
            );
          "
          :src="imgProduct"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="text-lg">
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
      <div class="h-96 overflow-hidden bg-neutral-900">
        <img
          class="object-cover h-full w-full"
          style="
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0.75)
            );
          "
          :src="imgProduct"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="text-lg">
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
      <div class="h-96 overflow-hidden bg-neutral-900">
        <img
          class="object-cover h-full w-full"
          style="
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0.75)
            );
          "
          :src="imgProduct"
          alt=""
        />
      </div>
      <div class="absolute -mt-96 w-full h-96">
        <div
          class="grid grid-cols-2 content-center container mx-auto h-full text-white"
        >
          <div class="col-start-2">
            <p class="text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="text-lg">
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
