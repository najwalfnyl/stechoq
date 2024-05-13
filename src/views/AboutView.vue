<template>
  <section id="about-us">
    <div v-for="(about, index) in aboutUs" :key="index">
      <article class="main-container max-w  py-8 grid md:grid-cols-2 md:gap-4">
        <div class="w-3/4 md:w-auto">
          <div class="flex flex-row items-center gap-6">
            <div class="w-[40px] border border-solid border-navy-prim"></div>
            <h1 class="text-sm font-bold" style="white-space: nowrap;"> ABOUT US</h1>
          </div>
          <ul class="list-disc pl-6 text-2xl font-bold my-2 py-8">
            {{ about.heading }}
          </ul>
        </div>
        <div class="flex mx-10 px-10">
          <img :src="url + about.images[1]" alt="Image" style="border-radius: 12px;" />
        </div>
      </article>

      <!-- Image CEO -->
      <article class="main-container py-8 max-w grid md:grid-cols-2 md:gap-8">
        <div class="flex order-last md:order-first px-24 mx-8">
          <div class="image-with-text ">
            <img v-for="(image, index) in about.ceo_photo" :key="index" :src="url + image" alt="Image" />
            <h1 class="mt-4 text-xl text-center font-poppins font-bold">{{ about.ceo_name }}</h1>
            <h1 class=" text-lg text-center font-poppins font-normal">CEO Stechoq Robotika Indonesia</h1>
          </div>
        </div>
        <div>
          <div class="flex flex-row items-center gap-4">
            <h1 class="text-2xl font-bold" style="white-space: nowrap;"> Ceo Talk</h1>
            <div class="w-full border border-solid border-navy-prim"></div>
          </div>
          <ul class="list-disc pl-6 text-lg my-2 py-6">
            {{ about.ceo_talk_text }}</ul>
        </div>
      </article>

      <article style="background-color: #1F336D;">
        <!-- <article class="main-container">
        <div> Image Carousel </div>
        <div class="d-flex item-center">
          <img :src="imgCeo" alt="" />
          <img :src="imgCeo" alt="" />
          <img :src="imgCeo" alt="" />
          <img :src="imgCeo" alt="" />
          <img :src="imgCeo" alt="" />
          <img :src="imgCeo" alt="" />
        </div>    
      </article> -->

        <article class="main-container max-w py-8 grid md:grid-cols-2 md:gap-10">
          <div>
            <div class="flex flex-row items-center gap-8">
              <h1 class="text-xl font-bold text-white" style="white-space: nowrap;"> Our Vision</h1>
              <div class="w-full border border-solid border-white"></div>
            </div>
            <ul class="list-disc pl-6 text-white font-light text-lg my-2">
              {{ about.vision }}
            </ul>
          </div>
          <div>
            <div class="flex flex-row items-center gap-8">
              <h1 class="text-xl text-white font-bold" style="white-space: nowrap;"> Our Mission</h1>
              <div class="w-full border border-solid border-white"></div>
            </div>
            <ul class="list-disc pl-6 text-white font-light text-lg my-2">
              {{ about.missions }}
            </ul>
          </div>
        </article>
      </article>
    </div>
  </section>

  <section id="awards" class="my-8 py-8">
    <article class="main-container">
      <h3 class="text-3xl font-medium text-center my-4">Pencapaian & Penghargaan</h3>
      <div class=" flex, flex-wrap, grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center a gap-4 lg:gap-10">
        <template v-for="(award, i) in achievments" :key="i">
          <div class="flex flex-col p-4 justify-center">
            <img :src="url + award.achievement_image" alt="Image">
            <p class="text-center font-medium py-4">{{ award.achievement_title }}</p>
          </div>
        </template>
      </div>
    </article>
  </section>
</template>

<script setup>

import axios from 'axios';
import { useHead } from '@vueuse/head';
import { onMounted, ref } from 'vue';

useHead({
  title: `Tentang Kami | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Tentang Stechoq Robotika Indonesia`,
    },
  ],
});


// Define reactive variables
const aboutUs = ref(null);
const achievments = ref(null);
const url = 'http://127.0.0.1:8000/storage/';


// get respone api about us
async function fetchAboutUs() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/aboutUs');
    aboutUs.value = response.data;
  } catch (error) {
    console.log('Error fetching data : ', error);
  }
}

// get respone api achievments
async function fetchAchievment() {
  try {
    const respone = await axios.get('http://127.0.0.1:8000/api/achievment');
    achievments.value = respone.data;
    // console.log('Data Achievment', respone.data);
  } catch (error) {
    console.log('Error fetching data achievment : ', error);
  }
}

onMounted(() => {
  fetchAboutUs();
  fetchAchievment();
});

// onMounted(() => {
//   $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });
</script>