<script setup>
import { useHead } from '@vueuse/head';
import useAwardStore from '@/stores/award';
import { assetsImg } from '@/utils/helper';

const imgClient2 = assetsImg('stechoq-logo.svg');

const imgProduct = assetsImg('product/mps.png');
const imgCeo = assetsImg('home/profile2.png');

const imgLogo = assetsImg('stechoq-logo.svg');
const awards = useAwardStore();

useHead({
  title: `Tentang Kami | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Tentang Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <section id="about-us">
    <article class="main-container max-w  py-8 grid md:grid-cols-2 md:gap-4">
      <div class="w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-8">
          <div class="w-full border border-solid border-navy-prim"></div>
          <h1 class="text-sm font-bold" style="white-space: nowrap;"> ABOUT US</h1>
        </div>
        <ul class="list-disc pl-6 text-2xl font-bold my-2 py-8">
            Leading world class R&D company that develops applicative technology for
        the empowerment of Indonesia
        </ul>
      </div>
      <div class="flex mx-10 px-10">
        <img :src="imgProduct" alt="" style="border-radius: 12px;" />
      </div>
    </article>
    <article class="main-container py-8 max-w grid md:grid-cols-2 md:gap-8">
      <div class="flex order-last md:order-first px-24 mx-8">
        <img :src="imgCeo" alt="" />
      </div>
      <div>
        <div class="flex flex-row items-center gap-4">
          <h1 class="text-2xl font-bold" style="white-space: nowrap;"> Ceo Talk</h1>
          <div class="w-full border border-solid border-navy-prim"></div>
        </div>
        <ul class="list-disc pl-6 text-lg my-2 py-6">
          STECHOQ didirikan oleh para milenial sukses yang telah meraih puluhan prestasi di bidang robotika, 
          baik di dalam maupun luar negeri. STECHOQ telah berhasil dan akan terus mengembangkan produk-produk 
          inovatif dalam upaya mendukung program "Making Indonesia 4.0" dari pemerintah. 
        </ul>
      </div>
    </article>
    <article style="background-color: #1F336D;">
    <article class="main-container max-w py-8 grid md:grid-cols-2 md:gap-10">
      <div>
        <div class="flex flex-row items-center gap-8">
          <h1 class="text-xl font-bold text-white" style="white-space: nowrap;"> Our Vision</h1>
          <div class="w-full border border-solid border-white"></div>
        </div>
        <ul class="list-disc pl-6 text-white font-light text-lg my-2">
          Become a leading research & manfucature company that committed at developing appropriate technology and producing global quality products innovation needed to meet the needs of the domestic component leveltowards an advance Indonesia
Become a leading company that committed at improving the quality of human resources and developing MSMEs in order to create a more qualified and highly competitive Indonesian society to encourage the realization of an advanced Indonesia.
        </ul>
      </div>
      <div>
      <div class="flex flex-row items-center gap-8">
        <h1 class="text-xl text-white font-bold" style="white-space: nowrap;"> Our Mission</h1>
          <div class="w-full border border-solid border-white"></div>
        </div>
        <ul class="list-disc pl-6 text-white font-light text-lg my-2">
          Carryout collabroartive research and development of appropriate technology accrordance of community needs Carryout prduction process from result of research that has been carried out with lead production system Conduct training and certification in technology education, specially for students Conduct training for public and MSME with sustainable program as a form of corporate social responsbility
        </ul>
      </div>
    </article>
  </article>
  </section>

  <section id="awards" class="my-8 py-8">
    <article class="main-container">
      <h3 class="text-3xl font-medium text-center my-4">Pencapaian & Penghargaan</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 lg:gap-10">
        <template v-for="(award, i) in awards.list" :key="i">
          <div class="flex flex-col p-4 justify-center">
            <img :src="award.img" alt="">
            <p class="text-center font-medium py-4">{{award.title}}</p>
          </div>
        </template>
      </div>
    </article>
  </section>
</template>
