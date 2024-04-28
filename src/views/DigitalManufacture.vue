<script setup>
import { useHead } from '@vueuse/head';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

useHead({
  title: `Digital Manufacturing | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Kampus Merdeka di Stechoq Robotika Indonesia`,
    },
  ],
});

const router = useRouter();

// Define reactive variables
const categoryName = ref(router.currentRoute.value.params.category_name);
const ProductByName = ref(null);
const productByCategory = ref(null);
const url = 'http://127.0.0.1:8000/storage/';

// Fetch data functions
async function getProductByName() {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/productCategoryByName/${categoryName.value}`);
    ProductByName.value = response.data;
  } catch (error) {
    console.log('Error fetching product by name:', error);
  }
}

async function getProductByCategory() {
  try {
  const response = await axios.get(`http://127.0.0.1:8000/api/productByCategory/${categoryName.value}`);
  const products = response.data.map(product => {
    // Buat salinan objek product untuk menghindari "Assignment to property of function parameter" error
    const productCopy = { ...product };
    // Mengonversi properti product_image dari JSON menjadi array
    productCopy.product_image = JSON.parse(product.product_image);
    return productCopy;
  });
  productByCategory.value = products;
} catch (error) {
  console.log('Error fetching product by category:', error);
}

}

// Navigation functions
const toContactSales = () => {
  router.push('/contact-sales');
}

const backToHome = () => {
  router.push('/');
}

// Fetch data on component mount
onMounted(() => {
  getProductByName();
  getProductByCategory();
});
</script>

<template>
  <div v-for="(productName,index) in ProductByName" :key="index">
    <div class="full-box w-full" :style="{ backgroundImage: `url(${url + productName.thumbnail})` }">
      <div class="text-center text-white main-container xl:px-60 md:px-20 sm:px-10">
        <h1 class=" font-bold text-5xl mb-4 font-poppins">{{ productName.category_name }}</h1>
        <h2 class=" font-light text-xl mb-4 font-poppins">{{ productName.short_description }}</h2>
        <div class="btn-heading flex justify-center">
          <button type="button" class="bg-white w-1/6 rounded-3xl text-black p-2 flex items-center justify-center hover:bg-gray hover:bg-opacity-60" @click="toContactSales">
            <p class="font-semibold sm:font-regular font-poppins">Contact Sales</p>
          </button>
        </div>
      </div>
    </div>
  </div >
  <div v-for="(product, index) in productByCategory" :key="index" :style="{ backgroundColor: index % 2 === 0 ? 'white' : '#1F336D' }">
    <article class=" main-container max-w py-8 grid md:grid-cols-2 md:gap-4">
      <div v-if="index % 2 === 1">
        <img v-if="product.product_image.length > 0" :src="url + product.product_image[0]" alt="Product Image">
      </div>
      <div class="w-3/4 md:w-auto">
        <div class="flex flex-row items-center gap-8" :style="{ color: index % 2 === 0 ? '#1F336D' : 'white' }">
          <h1 class="text-6xl font-poppins font-bold">{{ product.product_name }}</h1>
        </div>
        <ul class=" font-poppins list-disc text-justify text-base text-navy-prim font-normal my-0 pt-6 pb-5" :style="{ color: index % 2 === 0 ? '#1F336D' : 'white' }">
          {{ product.product_description }}
        </ul>
      </div>
      <div v-if="index % 2 === 0">
        <img v-if="product.product_image.length > 0" :src="url + product.product_image[0]" alt="Product Image">
      </div>
    </article>
  </div>
  <article class="main-container">
    <div class="btn-heading flex justify-center mt-8 mb-8 gap-4">
      <button type="button"
        class="bg-white w-1/6 rounded-xl text-navy-prim p-2 flex items-center justify-center gap-2 hover:bg-navy-prim hover:bg-opacity-70 border border-solid border-navy-prim"
        @click="backToHome">
        <!-- <img src="\assets\img\icon\left-arrow.svg" alt="Icon" class="h-7 pr-2 hidden md:block" /> -->
        <p class="font-semibold sm:font-regular font-poppins">Back Home</p>
      </button>
    </div>
  </article>
</template>

<style scoped>
.full-box {
  @apply object-fill overflow-hidden w-full;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>