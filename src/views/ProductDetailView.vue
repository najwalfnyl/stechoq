<script setup>
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';

const imgProduct = assetsImg('product/mps.png');

const fitur = [
  {
    name: 'Feature A',
    img: assetsImg('product/mps.png'),
  },
  {
    name: 'Feature B',
    img: assetsImg('product/dcs.png'),
  },
];
</script>

<template>
  <heading-comp>
    <template #title>{{ $route.params.id }}</template>
    <template #subtitle
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      architecto qui, nemo voluptates, similique ipsum vel officia maxime minima
      reprehenderit quam vitae pariatur provident id natus error aliquam odit
      corrupti!</template
    >
  </heading-comp>
  <section id="product-detail" class="my-8">
    <article class="main-container">
      <div id="featured-image">
        <img :src="imgProduct" />
      </div>

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
