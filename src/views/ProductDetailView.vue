<script setup>
import { assetsImg } from '@/utils/helper';

import HeadingComp from '@/components/base/HeadingComp.vue';

const imgProduct = assetsImg('product/mps.png');
</script>

<template>
  <heading-comp>
    <template #title>{{ $route.params.id }}</template>
    <template #subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto qui, nemo voluptates, similique ipsum vel officia maxime minima reprehenderit quam vitae pariatur provident id natus error aliquam odit corrupti!</template>
  </heading-comp>
  <section id="product-detail" class="my-8">
    <article class="container">

      <div class="h-[500px] overflow-hidden bg-neutral-900">
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

      <div id="content" class="my-8">
        <h3 class="text-5xl font-medium text-center my-4">Features</h3>

        <div id="features" class="flex flex-col gap-8">

          <div class="flex odd:flex-row-reverse gap-8">
            <div class="w-full h-96 object-fill">
              <img class="h-full w-full object-cover" :src="imgProduct" alt="">
            </div>
            <div class="w-full flex flex-col justify-center">
              <h4 class="text-3xl font-medium">Fitur A</h4>
              <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et sint reiciendis quia maxime asperiores vel accusamus nisi, nulla ut modi quas? Error maiores vitae, accusamus temporibus impedit sit numquam.</p>
            </div>
          </div>

          <div class="flex odd:flex-row-reverse gap-8">
            <div class="w-full h-96 object-fill">
              <img class="h-full w-full object-cover" :src="imgProduct" alt="">
            </div>
            <div class="w-full flex flex-col justify-center">
              <h4 class="text-3xl font-medium">Fitur A</h4>
              <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et sint reiciendis quia maxime asperiores vel accusamus nisi, nulla ut modi quas? Error maiores vitae, accusamus temporibus impedit sit numquam.</p>
            </div>
          </div>

          <div class="flex odd:flex-row-reverse gap-8">
            <div class="w-full h-96 object-fill">
              <img class="h-full w-full object-cover" :src="imgProduct" alt="">
            </div>
            <div class="w-full flex flex-col justify-center">
              <h4 class="text-3xl font-medium">Fitur A</h4>
              <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et sint reiciendis quia maxime asperiores vel accusamus nisi, nulla ut modi quas? Error maiores vitae, accusamus temporibus impedit sit numquam.</p>
            </div>
          </div>

        </div>
      </div>
    </article>
  </section>
</template>
