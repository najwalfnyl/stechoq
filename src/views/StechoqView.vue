<template>
  <div v-for="(academyPage, index) in pageAcademy" :key="index">
    <div class="full-box w-full relative" :style="{ 'background-image': `url(${url + academyPage.hero_image})` }">
      <div class="text-center text-white main-container xl:px-40 md:px-20 sm:px-10">
        <h1 class=" font-bold text-5xl mb-2 font-poppins">Stechoq Academy</h1>
        <h2 class=" font-medium text-xl  font-poppins">merupakan platform belajar online gratis yang dikembangkan oleh
          Stechoq Robotika Indonesia.
          Stechoq Academy hadir untuk menjawab kebutuhan zaman dengan mengembangkan kurikulum pendidikan berbasis
          industri.</h2>
      </div>
    </div>
    <article class="main-container max-w  py-8 grid md:grid-cols-2 md:gap-4">
      <div class="w-3/4 md:w-auto">
        <div class="flex flex-row items-center gap-8">
          <div class="w-1/4 border border-solid border-navy-prim"></div>
          <h1 class="text-sm font-poppins font-medium" style="white-space: nowrap;"> KNOW ABOUT US</h1>
        </div>
        <ul class=" font-poppins list-disc text-5xl text-navy-prim font-bold my-0 py-5">
          Kurikulum Berbasis Industri
        </ul>
      </div>
      <div class=" xl:mx-10 sm:mx-6 px-10 mb-40 pb-4">
        <ul class=" font-poppins text-navy-prim  text-lg font-bold my-2 pt-8">
          mentor bersama ahli mengembangkan kurikulum bersama agar kompetensi yang
          dipelajari dapat diterapkan langsung ke dalam dunia Industri
        </ul>
        {{ academyPage.description }}
      </div>
    </article>


    <section id="benefit">
      <article style="background-color: #1F336D;">
        <article class="main-container max-w py-8">
          <div class="main-container mt-[-200px] w-5/6 mb-8 overflow-hidden">
            <iframe class="w-full h-[350px]" style="border-radius: 35px;" :src="academyPage.link_youtube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="text-center text-white main-container ">
            <h1 class=" font-bold text-4xl font-poppins">Benefit Our Program</h1>
            <h2 class=" font-medium text-lg font-poppins px-0  xl:mx-60 lg:mx-40 md:mx-20 sm:mx-10 mt-4">mengembangkan
              kemampuan kalian dengan kurikulum yang telah disusun secara terstruktur</h2>
          </div>
          <div id="content" class="my-8">
            <div id="what-you-get">
              <div class="flex justify-center items-center px-6 gap-10">
                <div v-for="(benefit, index) in benefits" :key="index">
                  <div class="content-box rounded-xl" :style="{ 'background-image': `url(${url + benefit.image})` }">
                    <div class="m-2 text-center text-white">
                      <h4 class="xl:text-2xl lg:text-xl md:text-lg sm:text-sm font-medium mb-4">
                        {{ benefit.title_benefit }}
                      </h4>
                      <p class="xl:text-lg sm:text-sm font-normal ">
                        {{ benefit.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  </div>
  <section id="benefit">
    <article class="main-container max-w py-8">
      <div class="text-center text-white main-container ">
        <h1 class=" font-bold text-navy-prim text-4xl font-poppins">Kelas Belajar</h1>
        <h2 class=" font-medium text-navy-prim text-lg font-poppins  xl:mx-60 lg:mx-40 md:mx-20 sm:mx-10 mt-4">kelas
          belajar yang telah kami kembangkan dan dapat diakses secara gratis oleh siapapun dan darimanapun</h2>
      </div>
      <div id="content" class="my-8">
        <div id="what-you-get">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-8 px-8">
            <div v-for="(academyClass, index) in classAcademy" :key="index">
              <div class="w-full h-full rounded-xl bg-white px-5 border border-solid border-navy-prim">
                <img :src="url + academyClass.image" alt="Image" class="mx-auto my-4" style="height: 150px;">
                <h4 class="text-xl text-black text-left font-medium ">
                  {{ academyClass.class_name }}
                </h4>
                <p class="text-sm text-black text-left font-normal mb-4">
                  {{ academyClass.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="main-container">
      <div class="btn-heading flex  justify-center mb-8 gap-4">
        <button type="button"
          class="bg-white w-1/6 rounded-xl text-navy-prim p-2 flex items-center justify-center gap-2 hover:bg-navy-prim hover:bg-opacity-70 border border-solid border-navy-prim"
          @click="backHome">
          <img src="src\assets\img\icon\left-arrow.svg" alt="Icon" class="h-7 pr-2 " />
          <p class="font-semibold font-poppins">Back Home</p>
        </button>
        <button type="button"
          class="bg-navy-prim w-1/6 rounded-xl text-white p-2 flex items-center justify-center gap-2 hover:bg-gray hover:bg-opacity-60"
          @click="navigationToAcademy">
          <p class="font-semibold font-poppins">Join Us</p>
          <img src="src\assets\img\icon\right-arrow.svg" alt="Icon" class="h-7 pl-2" />
        </button>
      </div>
    </article>
  </section>

</template>

<script setup>
import { useHead } from '@vueuse/head';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

useHead({
  title: `Kampus Merdeka | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Kampus Merdeka di Stechoq Robotika Indonesia`,
    },
  ],
});

const navigationToAcademy = () => {
  window.open('https://academy.stechoq.com/');
}

const router = useRouter();
const backHome = () => {
  router.push({
    name: 'home'
  });
}

// Define reactive variables
const benefits = ref(null);
const classAcademy = ref(null);
const pageAcademy = ref(null);
const url = 'http://127.0.0.1:8000/storage/';

// get respone api page
async function getPage() {
  try {
    const respone = await axios.get('http://127.0.0.1:8000/api/stechoq-academy');
    pageAcademy.value = respone.data;
    console.log(respone.data);
  } catch (error) {
    console.log('error fetching data benefits : ', error);
  }
}
// get respone api benefits
async function getBenefits() {
  try {
    const respone = await axios.get('http://127.0.0.1:8000/api/academy-benefits');
    benefits.value = respone.data;
    console.log(respone.data);
  } catch (error) {
    console.log('error fetching data benefits : ', error);
  }
}

// get respone api class 
async function getClass() {
  try {
    const respone = await axios.get('http://127.0.0.1:8000/api/academy-class');
    classAcademy.value = respone.data;
    console.log(respone.data);
  } catch (error) {
    console.log('error fetching data benefits : ', error);
  }
}

onMounted(() => {
  getBenefits();
  getClass();
  getPage();
})
</script>

<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full;
  background-image: src="src\assets\img\people\stechoq.png";
  height: 700px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-box {
  height: 190px;
  width: full;
}

.content-box:hover {
  height: 220px;
  width: 1/2;
}
</style>