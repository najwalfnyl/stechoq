<script setup>
import { assetsImg } from '@/utils/helper';
import { useHead } from '@vueuse/head';
import CarouselComp from '@/components/partial/CarouselComp.vue';
import TestimonialSliderComp from '@/components/partial/TestimonialSliderComp.vue';

useHead({
  title: `Kampus Merdeka | STECHOQ`,
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
        <div class="btn-heading flex justify-center">
        <button type="button" class="bg-white w-1/6 rounded-3xl text-black p-2 flex items-center justify-center hover:bg-gray hover:bg-opacity-60">
          <p class="font-semibold sm:font-regular font-poppins">Contact Sales</p>
        </button>
    </div>
    </div>
  </div>

  <article class="main-container max-w  py-8 grid md:grid-cols-2 md:gap-4">
      <div class="w-3/4 md:w-auto"> 
        <div class="flex flex-row items-center gap-8">
          <h1 class="text-6xl text-navy-prim font-poppins font-bold"> AGV</h1>
        </div>
        <ul class=" font-poppins list-disc text-justify text-base text-navy-prim font-normal my-0 pt-6 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ul>
        <ul class=" font-poppins list-disc text-justify text-base text-navy-prim font-normal my-0 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ul>
      </div>
    <div class="xl:mx-10 sm:mx-6 px-10 pb-4 pt-6 flex items-center">
        <img src="src/assets/img/product/dm-home.png" alt="Product Image">
    </div>
    </article>

    <section id="img-content">
        <article style="background-color: #1F336D; height: 450px;">
            <article class="main-container max-w py-8">
            </article>
        </article>
    </section>

    <section id="benefit">
        <article class="main-container max-w py-8">
            <div class="main-container mt-[-450px] mb-8 overflow-hidden">
                <img src="src/assets/img/product/dcss.png" alt="Product Image" class="mx-auto">
            </div>
            <div class=" text-navy-prim font-poppins main-container ">
                <h1 class=" font-bold text-center text-4xl ">Digital Control System</h1>
                <h2 class=" font-normal text-justify text-base xl:mx-20 px-0 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h2>
            </div>
        </article>
    </section>

    <article class="main-container">
      <div class="btn-heading flex justify-center mb-8 gap-4">
        <button type="button" class="bg-white w-1/6 rounded-xl text-navy-prim p-2 flex items-center justify-center gap-2 hover:bg-navy-prim hover:bg-opacity-70 border border-solid border-navy-prim">
          <img src="src\assets\img\icon\left-arrow.svg" alt="Icon" class="h-7 pr-2 hidden md:block" />  
          <p class="font-semibold sm:font-regular font-poppins">Back Home</p>
        </button>
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