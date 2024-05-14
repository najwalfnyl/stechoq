<script setup>
import { useHead } from '@vueuse/head';
import useAwardStore from '@/stores/award';
import Carousel from '@/views/Carousel.vue';
import { assetsImg } from '@/utils/helper';

const imgProduct = assetsImg('product/mps.png');
const imgCeo = assetsImg('home/profile2.png');
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
    <article class="main-container max-w py-8 grid md:grid-cols-2 font-poppins md:gap-4">
      <div class="w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-6">
          <div class="w-[40px] border border-solid border-navy-prim"></div>
          <h1 class="text-sm font-bold" style="white-space: nowrap;"> ABOUT US</h1>
        </div>
        <ul class="list-disc text-2xl font-bold my-2 py-8">
          Leading world class R&D company that develops applicative technology for the empowerment of Indonesia
        </ul>
      </div>
      <div class="flex mx-10 px-10">
        <img :src="imgProduct" alt="" style="border-radius: 12px;" />
      </div>
    </article>

    <article class="main-container py-8 mb-40 max-w grid md:grid-cols-2 md:gap-8">
      <div class="flex order-last md:order-first px-24 mx-8">
        <div class="image-with-text ">
          <img :src="imgCeo" alt="" />
          <h1 class="mt-4 text-xl text-center font-poppins font-bold">Malik Khidir</h1>
          <h1 class="text-lg text-center font-poppins font-normal">CEO Stechoq Robotika Indonesia</h1>
        </div>
      </div>
      <div>
        <div class="flex flex-row items-center gap-4">
          <h1 class="text-2xl font-bold" style="white-space: nowrap;"> CEO Talk</h1>
          <div class="w-full border border-solid border-navy-prim"></div>
        </div>
        <ul class="list-disc text-lg mt-2 py-6">
          STECHOQ didirikan oleh para milenial sukses yang telah meraih puluhan prestasi di bidang robotika, 
          baik di dalam maupun luar negeri. STECHOQ telah berhasil dan akan terus mengembangkan produk-produk 
          inovatif dalam upaya mendukung program "Making Indonesia 4.0" dari pemerintah. 
        </ul>
      </div>
    </article>
  </section>

  <section id="visi" style="min-height: 400px;">
    <article style="background-color: #1F336D;">
    <article class="py-8">
    <div class="mt-[-200px] mb-6">
      <Carousel />
    </div>
    <article>
      <article class="main-container font-poppins max-w py-8 grid md:grid-cols-2 md:gap-10">
        <div>
          <div class="flex flex-row items-center gap-8">
            <h1 class="text-xl font-bold text-white" style="white-space: nowrap;"> Our Vision</h1>
            <div class="w-full border border-solid border-white"></div>
          </div>
          <ul class="list-disc text-white font-light text-lg my-2">
            <li>Become a leading research & manufacture company that is committed to developing appropriate technology and producing global quality product innovations needed to meet the needs of the domestic component level towards an advanced Indonesia.</li>
            <li>Become a leading company that is committed to improving the quality of human resources and developing MSMEs in order to create a more qualified and highly competitive Indonesian society to encourage the realization of an advanced Indonesia.</li>
          </ul>
        </div>
        <div>
          <div class="flex flex-row items-center gap-8">
            <h1 class="text-xl text-white font-bold" style="white-space: nowrap;"> Our Mission</h1>
            <div class="w-full border border-solid border-white"></div>
          </div>
          <ul class="list-disc text-white font-light text-lg my-2">
            <li>Carry out collaborative research and development of appropriate technology in accordance with community needs.</li>
            <li>Carry out production processes from results of research that has been carried out with leading production systems.</li>
            <li>Conduct training and certification in technology education, especially for students.</li>
            <li>Conduct training for the public and MSMEs with sustainable programs as a form of corporate social responsibility.</li>
          </ul>
        </div>
      </article>
    </article> 
  </article> 
</article> 
  </section>

  <section id="awards" class="my-8 py-8">
    <article class="main-container font-poppins">
      <h3 class="text-3xl font-medium text-center my-4">Pencapaian & Penghargaan</h3>
      <div class="flex flex-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 lg:gap-10">
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

<style scoped>
#visi {
  min-height: 400px; 
}
</style>