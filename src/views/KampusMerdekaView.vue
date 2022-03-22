<script setup>
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';
import CarouselComp from '@/components/partial/CarouselComp.vue';
import TestimonialSliderComp from '@/components/partial/TestimonialSliderComp.vue';

const mbkm = [
  assetsImg('product/mps.png'),
  assetsImg('product/mbkm.png'),
];

const img = assetsImg('people/soldering.png');
</script>

<template>
  <heading-comp>
    <template #title>Kampus Merdeka</template>
    <template #subtitle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      architecto qui, nemo voluptates, similique ipsum vel officia maxime minima
      reprehenderit quam vitae pariatur provident id natus error aliquam odit
      corrupti!
    </template>
  </heading-comp>
  <section id="kampus-merdeka" class="my-8 py-8">
    <article class="main-container">
      <carousel-comp :outsidei-indicator="true" :images="mbkm" />
    </article>
  </section>
  <section id="kampus-merdeka" class="my-8 py-8">
    <article class="main-container">
      <div id="content" class="my-8">
        <div id="what-you-get">
          <h3 class="text-3xl font-medium text-center my-8">
            Apa yang akan kamu dapatkan?
          </h3>

          <div class="grid lg:grid-cols-3 gap-8 my-8">
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl text-center font-medium mb-6">
                Research Funding
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl text-center font-medium mb-6">
                1 on 1 Mentoring
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl text-center font-medium mb-6">
                Collaboration
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
          </div>
        </div>

      </div>
    </article>
  </section>
  <section id="testimonial" class="my-8 py-8">
    <h3 class="text-3xl font-medium text-center my-4">Testimoni</h3>
    <testimonial-slider-comp />
  </section>
  <section
    id="products"
    class="main-container py-2 grid grid-flow-row gap-4 my-8 py-8"
  >
    <article>
      <div
        class="h-[500px] overflow-hidden z-0 bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-400"
      >
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="img"
          alt=""
        />
      </div>
      <div class="-mt-[500px] px-8 w-full h-[500px]">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-1">
            <p class="text-3xl font-medium">
              Mari buat inovasi lokal berkualitas international
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
