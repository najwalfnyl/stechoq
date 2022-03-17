<script setup>
import { assetsImg } from '@/utils/helper';

const imgClient = assetsImg('/brand/ypti-vertical.svg');
const imgClient2 = assetsImg('/stechoq-logo.svg');

const imgProduct = assetsImg('/product/mps.png');
</script>

<template>
  <section id="products" class="py-2 grid grid-flow-row gap-4">
    <article>
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
    </article>
  </section>
  <section id="title" class="my-4">
    <article class="container">
      <h2 class="text-4xl">
        Leading world class R&D company that develops applicative technology for
        the empowerment of Indonesia
      </h2>
    </article>
  </section>
</template>
