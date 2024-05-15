<script setup>
import { assetsImg } from '@/utils/helper';
import { useHead } from '@vueuse/head';
import CarouselComp from '@/components/partial/CarouselComp.vue';
import TestimonialSliderComp from '@/components/partial/TestimonialSliderComp.vue';

useHead({
  title: `Digital Manufacturing | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Kampus Merdeka di Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <div class="full-box w-full" :style="{ 'background-image': 'url(src/assets/img/people/dm.png)' }">
    <div class="text-center text-white main-container xl:px-60 md:px-20 sm:px-10">
      <h1 class=" font-bold text-5xl mb-4 font-poppins">Digital Manufacturing</h1>
      <h2 class=" font-light text-xl mb-4 font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
    </div>
  </div>

  <article class="main-container font-poppins max-w  py-8 grid md:grid-cols-2 md:gap-4">
    <div class="xl:mx-10 sm:mx-6 px-10 pb-4 pt-6 flex items-center">
        <img src="src/assets/img/product/dm-home.png" alt="Product Image">
    </div>  
    <div class="w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-8">
          <h1 class="text-6xl text-navy-prim font-poppins font-bold"> Digital Control System</h1>
        </div>
        <ul class=" font-poppins list-disc text-justify text-base text-navy-prim font-normal my-0 pt-6 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ul>
      </div>
    </article>

    <article  style="background-color: #1F336D;"> 
    <article class="font-poppins main-container max-w  py-8 grid md:grid-cols-2 md:gap-4">
    <div class=" w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-8">
          <h1 class="text-6xl text-white font-poppins font-bold"> AGV</h1>
        </div>
        <ul class="list-disc text-white font-light text-lg my-3 ml-4">
            <li>Carry out collaborative research and development of appropriate technology in accordance with community needs.</li>
            <li>Carry out production processes from results of research that has been carried out with leading production systems.</li>
            <li>Conduct training and certification in technology education, especially for students.</li>
            <li>Conduct training for the public and MSMEs with sustainable programs as a form of corporate social responsibility.</li>
          </ul>
      </div>
      <div class="xl:mx-10 sm:mx-6 px-10 pb-4 pt-6 flex items-center">
        <img src="src/assets/img/product/dm-home.png" alt="Product Image">
    </div> 
  </article>
    </article>

    <article class="main-container font-poppins max-w  py-8 grid md:grid-cols-2 md:gap-4">
    <div class="xl:mx-10 sm:mx-6 px-10 pb-4 pt-6 flex items-center">
        <img src="src/assets/img/product/dm-home.png" alt="Product Image">
    </div>  
    <div class="w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-8">
          <h1 class="text-6xl text-navy-prim font-poppins font-bold"> Digital Control System</h1>
        </div>
        <ul class=" font-poppins list-disc text-justify text-base text-navy-prim font-normal my-0 pt-6 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ul>
      </div>
    </article>
</template>

<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full  ;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>