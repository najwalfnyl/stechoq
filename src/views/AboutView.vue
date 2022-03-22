<script setup>
import { assetsImg } from '@/utils/helper';

const imgClient2 = assetsImg('stechoq-logo.svg');

const imgProduct = assetsImg('product/mps.png');

const imgLogo = assetsImg('stechoq-logo.svg');

const award1 = assetsImg('award/award 1 1.png');
</script>

<template>
  <section id="products" class="py-2 grid grid-flow-row gap-4">
    <article>
      <div class="">
        <img
          :src="imgProduct"
        />
      </div>
    </article>
  </section>
  <section id="title" class="my-4 py-4">
    <article class="main-container max-w-5xl">
      <h2 class="text-4xl">
        Leading world class R&D company that develops applicative technology for
        the empowerment of Indonesia
      </h2>
    </article>
  </section>
  <section id="visi-misi">
    <article class="main-container max-w-5xl my-8 py-8 grid md:grid-cols-2 md:gap-8">
      <div>
        <div class="flex flex-row items-center gap-4 my-2">
          <h1 class="text-3xl font-bold">Visi</h1>
          <div class="w-full border border-solid border-neutral-300"></div>
        </div>
        <ul class="list-disc pl-6 text-lg my-2">
          <li>
            Mengembangkan dan menciptakan teknologi inovasi dalam negeri
            berkualitas global
          </li>
          <li>
            Meningkatkan sumber daya manusia dan mengembangkan IKM/StartUp
          </li>
        </ul>
      </div>
      <div class="flex">
        <img :src="imgClient2" alt="" />
      </div>
    </article>
    <article class="main-container max-w-5xl my-8 py-8 grid md:grid-cols-2 md:gap-8">
      <div class="flex order-last md:order-first">
        <img :src="imgClient2" alt="" />
      </div>
      <div>
        <div class="flex flex-row items-center gap-4 my-2">
          <h1 class="text-3xl font-bold">Misi</h1>
          <div class="w-full border border-solid border-neutral-300"></div>
        </div>
        <ul class="list-disc pl-6 text-lg my-2">
          <li>Melakukan kolaborasi riset dan pengembangan teknologi</li>
          <li>
            Melakukan produksi secara massal hasil riset yang telah dilakukan
          </li>
          <li>Mengadakan pelatihan dan sertifikasi</li>
          <li>Melakukan pembinaan kepada IKM/Startup</li>
        </ul>
      </div>
    </article>
  </section>
  <section id="profil-founder" class="my-8 py-8">
    <article class="main-container max-w-4xl">
      <h3 class="text-center text-3xl font-medium my-4">Profil Founder</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="flex md:col-span-2">
          <p class="text-neutral-800 text-2xl">
            “Stechoq merupakan perusahaan R&D yang berfokus dalam mengembangkan
            inovasi produk teknologi robotika dan industri 4.0, didirikan pada
            tahun 2015 oleh para milenial berprestasi yang berhasil meraih belasan
            prestasi di bidang robotika dalam maupun luar negeri. stechoq telah
            berhasil dan akan terus mengembangkan produk inovasi tepat guna untuk
            kemajuan Indonesia.“
          </p>
        </div>
        <div class="flex order-first">
          <div class="w-full">
            <img class="object-cover w-full h-full" :src="imgLogo" alt="" />
          </div>
        </div>
      </div>
    </article>
  </section>
  <section id="awards" class="my-8">
    <article class="main-container">
      <h3 class="text-3xl font-medium text-center my-4">Pencapaian & Penghargaan</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 lg:gap-8">
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
        <div class="flex flex-col p-4">
          <img :src="award1" alt="">
          <p class="text-center font-medium">Leader of the national defense day ceremony 2016</p>
        </div>
      </div>
    </article>
  </section>
</template>
