<script setup>
import { useHead } from '@vueuse/head';
import { assetsImg } from '@/utils/helper';
import HeadingComp from '@/components/base/HeadingComp.vue';
import CarouselComp from '@/components/partial/CarouselComp.vue';

useHead({
  title: `Home | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Homepage Stechoq Robotika Indonesia`,
    },
  ],
});

const sliders = [
  assetsImg('product/dcs.png'),
  assetsImg('product/mps.png'),
  assetsImg('product/ventilator.png'),
  assetsImg('product/mbkm.png'),
];

const partners = [
  assetsImg('brand/ypti-vertical.svg'),
  assetsImg('brand/sugity.svg'),
  assetsImg('brand/toyota.svg'),
  assetsImg('brand/kubota.svg'),
];

const headlineHome = [
  {
    name: 'Digital Control System',
    img: assetsImg('product/dcs.png'),
    alt: 'digital control system',
  },
  {
    name: 'Mini Production System',
    img: assetsImg('product/mps.png'),
    alt: 'mini production system',
  },
  {
    name: 'ICU Ventilator',
    img: assetsImg('product/ventilator.png'),
    alt: 'ventilator icu',
  },
  {
    name: 'Kampus Merdeka',
    img: assetsImg('product/mbkm.png'),
    alt: 'merdeka belajar kampus merdeka',
  },
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
  <carousel-comp :images="sliders" />
  <section id="client" class="h-32 my-8">
    <div
      class="main-container grid grid-cols-4 md:gap-8 place-content-center text-center h-full"
    >
      <template v-for="(partner, i) in partners" :key="i">
        <div class="flex align-middle"><img :src="partner" /></div>
      </template>
    </div>
  </section>
  <section id="products" class="py-2 grid grid-flow-row gap-4 my-4">
    <template v-for="(featured, i) in headlineHome" :key="i">
      <article>
        <div
          class="h-96 overflow-hidden bg-gradient-to-l from-neutral-700 via-neutral-500 to-neutral-400"
        >
          <img
            class="object-cover h-full w-full mix-blend-overlay"
            :src="featured.img"
            :alt="featured.alt"
          />
        </div>
        <div class="absolute -mt-96 w-full h-96">
          <div
            class="grid grid-cols-2 gap-4 content-center main-container mx-auto h-full text-white"
          >
            <div class="col-start-2">
              <p class="text-3xl mb-4 font-medium">
                {{ featured.name }}
              </p>
              <p class="hidden md:block text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                laboriosam optio vel, magnam, illum mollitia explicabo cumque
                fugit ab accusamus non est? Adipisci excepturi in fugit
                molestiae consequatur obcaecati eligendi.
              </p>
            </div>
          </div>
        </div>
      </article>
    </template>
  </section>
</template>
