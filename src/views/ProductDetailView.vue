<script setup>
import { useRoute } from 'vue-router';
import useProductStore from '@/stores/product';
import { assetsImg } from '@/utils/helper';
import { useHead } from '@vueuse/head';

import HeadingComp from '@/components/base/HeadingComp.vue';

const imgProduct = assetsImg('product/mps.png');
const route = useRoute();
const product = useProductStore();

const { name } = product.detail(route.params.id);

useHead({
  title: `${name} | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Detail produk ${name} Stechoq`,
    },
  ],
});

const fitur = [
  {
    name: 'Feature A',
    img: assetsImg('product/mps.png'),
  },
  {
    name: 'Feature B',
    img: assetsImg('product/dcs.png'),
  },
  {
    name: 'Feature c',
    img: assetsImg('product/dcs.png'),
  },
];
</script>

<template>
  <section id="heading-product">
    <article class="main-container">
      <div id="head">
        <div id="title-page">
          <h3> {{ name }} </h3>
        </div>
        <div id="subtitle-page">
          <p class="my-[10px]">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      architecto qui, nemo voluptates</p>
        </div>
      </div>
    </article>
  </section>
  <section id="product-detail" class="my-8">
    <article class="main-container">

      <div id="content" class="my-8">
        <h3 class="text-5xl font-medium text-center my-4">Features</h3>

        <div id="features">
          <template v-for="(item, i) in fitur" :key="i">
            <div class="feature-detail">
              <div class="feature-image">
                <img :src="item.img" alt="" />
              </div>
              <div class="feature-description">
                <h4>{{ item.name }}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  et sint reiciendis quia maxime asperiores vel accusamus nisi,
                  nulla ut modi quas? Error maiores vitae, accusamus temporibus
                  impedit sit numquam.
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </article>
  </section>
</template>
