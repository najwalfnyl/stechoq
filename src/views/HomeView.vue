<script setup>
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
import HeadingComp from '@/components/base/HeadingComp.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import useHomeStore from '../stores/home';

useHead({
  title: `Home | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Homepage Stechoq Robotika Indonesia`,
    },
  ],
});


const homeStore = useHomeStore();

const fetchDataCategory = async () => {
  try {
    await homeStore.fetchCategoryProduct();
    console.log('Data : ',homeStore.list);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted (() => {
  fetchDataCategory();
});

const router = useRouter();
const NavigationTo = ($id) => {
    if($id === 'Stechoq Academy') {
      router.push('/kampus-merdeka')
    }
}

// get respone api client 
const clientsItem = ref(null);
const url = 'http://127.0.0.1:8000/storage/';
async function getClients () {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/client');
    clientsItem.value = response.data;
    console.log(response.data);

  } catch (error) {
    console.log('error fetching data : ',error);
  }
}
onMounted(getClients);

</script>

<template>
  <heading-comp>
    
    <template #title>
      <span class="company-name text-white">RnD Company</span> <br>
      <span class="subtitle text-white">From Idea to Mass Production</span>
    </template>
    <template #subtitle>
      Berkarya untuk Bangsa
    </template>
    <div class="btn-heading">
        <button type="button" class="bg-white text-black p-2 hover:bg-gray-200">
            What we do?
        </button>
        <button type="button" class="bg-opacity-100 text-white p-2 flex items-center gap-2 hover:bg-gray-200 hover:bg-opacity-50" >
          <img src="src\assets\img\icon\Play.svg" alt="Icon" class="h-5 w-5" />
            Play Video
        </button>
    </div>
  </heading-comp>
  <section id="home-list" class="my-8 py-8">
    <div id="list-container" class="main-container">
      <template v-for="(item, i) in homeStore.list" :key="i">
        <article class="list-item">
          <div class="list-image" :style="{ backgroundImage: `url(${item})` }">
            <div class="list-container">
            <div class="list-title text-white font-bold text-md mt-2">{{ item.category_name }}</div>
            <div class="list-sub text-wi text-sm">{{ item.short_description }}</div>
            <div class="btn-heading ">
                  <button type="button" class="bg-white text-black hover:bg-gray-200" @click="NavigationTo(item.category_name)">
                      Learn More
                  </button>
              </div>
              </div>
          </div>
        </article>
      </template>
    </div>
  </section>
  <section id="client" class="h-580 my-10" >
    <div>
      <h3 class="font-bold text-6xl text-center text-navy-prim mb-10">
        Our<br>
        Clients
      </h3>
    </div>
    <div
      class="main-container grid grid-cols-6 grid-rows-4 md:gap-2 place-content-center text-center h-full"
    >
      <template v-for="(logoItem, i) in clientsItem" :key="i">
        <div class="flex align-middle"><img :src="url + logoItem.client_logo" /></div>
      </template>
    </div>
  </section>
</template>
