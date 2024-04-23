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

const mbkm = [
  assetsImg('product/mps.png'),
  assetsImg('product/mbkm.png'),
];

const img = assetsImg('people/soldering.png');
</script>

<template>
  <div class="full-box w-full relative" :style="{ 'background-image': 'url(src/assets/img/people/stechoq1.png)' }">
    <div class="text-center text-white main-container px-40">
      <h1 class=" font-bold text-5xl font-poppins">Stechoq Academy</h1>
      <h2 class=" font-medium text-xl font-poppins">merupakan platform belajar online gratis yang dikembangkan oleh Stechoq Robotika Indonesia. 
        Stechoq Academy hadir untuk menjawab kebutuhan zaman dengan mengembangkan kurikulum pendidikan berbasis industri.</h2>
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
      <div class=" mx-10 px-10">
        <ul class=" font-poppins text-navy-prim  text-lg font-bold my-2 pt-8">
          mentor bersama ahli mengembangkan kurikulum bersama agar kompetensi yang 
          dipelajari dapat diterapkan langsung ke dalam dunia Industri
        </ul>
        <ul class="font-poppins text-navy-prim  text-lg font-light">
          memadukan kurikulum pembelajaran dengan kebutuhan industri diperlukan 
          untuk menghasilkan kompetensi yang unggul dan kompetitif agar dapat lebih bersaing.
        </ul>
      </div>
    </article>

    <section id="benefit">
    <article style="background-color: #1F336D;">
    <article class="main-container max-w py-8">
      <div class="text-center text-white main-container ">
        <h1 class=" font-bold text-4xl font-poppins">Benefit Our Program</h1>
        <h2 class=" font-medium text-lg font-poppins px-0 mx-20 mt-4">mengembangkan kemampuan kalian dengan kurikulum yang telah disusun secara terstruktur</h2>
      </div>
      <div id="content" class="my-8">
  <div id="what-you-get">
    <div class="flex justify-center items-center my-8 px-6 gap-10">
      <div class="w-1/3 rounded-xl py-8 px-5" :style="{ 'background-image': 'url(src/assets/img/people/mentoring.png)' }" style="height: 190px;">
        <h4 class="text-2xl text-center text-white font-medium mb-6">
          Sesi Mentoring
        </h4>
        <p class="text-lg text-white font-normal">
          membahas tiap problem beserta penyelesaiannya dalam pengerjaan projek 
        </p>
      </div>
      <div class="w-1/3 rounded-xl py-8 px-8" :style="{ 'background-image': 'url(src/assets/img/people/industri.png)' }" style="height: 240px;">
        <h4 class="text-2xl text-white text-center font-medium mb-6">
          Mengerjakan project berskala industri
        </h4>
        <p class="text-lg text-white font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti,
        </p>
      </div>
      <div class="w-1/3 rounded-xl py-8 px-5" :style="{ 'background-image': 'url(src/assets/img/people/kolaborasi.png)' }" style="height: 190px;">
        <h4 class="text-2xl text-white text-center font-medium mb-6">
          Kolaborasi
        </h4>
        <p class="text-lg text-white font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti, 
        </p>
      </div>
    </div>
  </div>
</div>
    </article>
  </article>
  </section>

    <section id="benefit">
    <article class="main-container max-w py-8">
      <div class="text-center text-white main-container ">
        <h1 class=" font-bold text-navy-prim text-4xl font-poppins">Kelas Belajar</h1>
        <h2 class=" font-medium text-navy-prim text-lg font-poppins  mx-20 mt-4">kelas belajar yang telah kami kembangkan dan dapat diakses secara gratis oleh siapapun dan darimanapun</h2>
      </div>
      <div id="content" class="my-8">
  <div id="what-you-get">
    <div class="flex justify-center items-center my-8 px-6 gap-10">
      <div class="w-1/3 rounded-xl py-8 bg-navy-prim px-5"  style="height: 160px;">
        <h4 class="text-2xl text-center text-white font-medium mb-6">
          Sesi Mentoring
        </h4>
        <p class=" text-lg text-white font-normal">
          membahas tiap problem beserta penyelesaiannya dalam pengerjaan projek 
        </p>
      </div>
      <div class="w-1/3 rounded-xl py-8 bg-navy-prim px-8" style="height: 160px;">
        <h4 class="text-2xl text-white text-center font-medium mb-6">
          Mengerjakan project
        </h4>
        <p class="text-lg text-white font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti,
        </p>
      </div>
      <div class="w-1/3 rounded-xl py-8 bg-navy-prim px-5" style="height: 160px;">
        <h4 class="text-2xl text-white text-center font-medium mb-6">
          Kolaborasi
        </h4>
        <p class="text-white font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti, 
        </p>
      </div>
    </div>
  </div>
</div>

    </article>
  </section>

  <section id="kampus-merdeka" class="my-8 py-8">
    <article class="main-container">
      <carousel-comp :outsidei-indicator="true" :images="mbkm" />
    </article>
  </section>
  <section id="kampus-merdeka" class="my-8 py-8">
    <article class="main-container">
      <div id="content" class="my-8">
        <div id="what-you-get">
          <h3 class="text-3xl font-medium text-center my-8">
            Apa yang akan kamu dapatkan?
          </h3>

          <div class="grid lg:grid-cols-3 gap-8 my-8">
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl etext-cnter font-medium mb-6">
                Research Funding
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl text-center font-medium mb-6">
                1 on 1 Mentoring
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
            <div class="bg-white rounded-lg py-8 px-4">
              <h4 class="text-2xl text-center font-medium mb-6">
                Collaboration
              </h4>
              <p class="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reprehenderit distinctio itaque consequuntur numquam
                aperiam, nostrum aliquid similique perferendis qui fugiat
                tenetur necessitatibus voluptates culpa ex quam. Sunt, ad
                aliquam!
              </p>
            </div>
          </div>
        </div>

      </div>
    </article>
  </section>
  <section id="testimonial" class="my-8 py-8">
    <h3 class="text-3xl font-medium text-center my-4">Testimoni</h3>
    <testimonial-slider-comp />
  </section>
  <section
    id="products"
    class="main-container py-2 grid grid-flow-row gap-4 my-8 py-8"
  >
    <article>
      <div
        class="h-[650px] overflow-hidden z-0 bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-400"
      >
        <img
          class="object-cover h-full w-full mix-blend-overlay"
          :src="img"
          alt=""
        />
      </div>
      <div class="-mt-[650px] px-8 w-full h-[650px]">
        <div
          class="grid grid-cols-2 content-center main-container mx-auto h-full text-white"
        >
          <div class="col-start-1">
            <p class="text-5xl font-medium">
              Mari buat inovasi lokal berkualitas international
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full  ;
  background-image: src="src\assets\img\people\stechoq.png";
  height: 700px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
