<script setup>
// import { RouterLink } from 'vue-router';
// import useProductStore from '@/stores/product';
import { useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';
import { onMounted, ref } from 'vue';
import axios from 'axios';

useHead({
  title: `Produk | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Produk Stechoq Robotika Indonesia`,
    },
  ],
});


const router = useRouter();
const NavigationTo = ($name) => {
  if ($name === 'Stechoq Academy') {
    router.push('/stechoq-academy')
  }
}
// const products = useProductStore();
const url = 'http://127.0.0.1:8000/storage/';
const productView = ref(null);
async function fetchProduct() {
  try {
    const respone = await axios.get('http://127.0.0.1:8000/api/product');
    const products = respone.data.map(product => {
      // Buat salinan objek product untuk menghindari "Assignment to property of function parameter" error
      const productCopy = { ...product };
      // Mengonversi properti product_image dari JSON menjadi array
      productCopy.product_image = JSON.parse(product.product_image);
      return productCopy;
    });
    // productView.value = products;
    // console.log(products);
    const groupedProducts = {};
    products.forEach(product => {
      if (!groupedProducts[product.category_name]) {
        groupedProducts[product.category_name] = [];
      }
      groupedProducts[product.category_name].push(product);
    });

    // Mengonversi objek menjadi array untuk ditampilkan
    const groupedProductsArray = Object.keys(groupedProducts).map(categoryName => {
      return {
        category_name: categoryName,
        products: groupedProducts[categoryName]
      };
    });

    productView.value = groupedProductsArray;
    console.log(groupedProductsArray);

  } catch (error) {
    console.log('error fetching data product ', error);
  }
}

onMounted(() => {
  fetchProduct();
})


</script>

<template>
  <div>
    <h3 class="font-bold text-4xl text-center text-navy-prim mb-8 mt-10">
      Featured Products
    </h3>
    <div class="flex justify-center">
      <div class="w-20 border border-solid border-navy-prim"></div>
    </div>
  </div>
  <div class="font-bold text-6xl text-center text-navy-prim mt-10">
    Stechoq Academy
  </div>
  <div class="full-box main-container " :style="{ 'background-image': 'url(src/assets/img/product/stechoq.png)' }">
    <div class="btn-heading ">
      <button type="button" class=" bg-white text-black hover:bg-gray-200" @click="NavigationTo('Stechoq Academy')">
        Learn More
      </button>
    </div>
  </div>
  <div v-for="(category, index) in productView" :key="index">
    <div class="font-bold text-6xl text-center text-navy-prim mt-10">
      {{ category.category_name }}
    </div>
    <section id="product-list" class="my-8 py-8 mx-20">
      <div id="product-container" class="main-container">
        <div v-for="(product, index) in category.products" :key="index">
          <div class="flex-wrap justify-center">
            <article class="product-item">
              <div class="product-image" :style="{ backgroundImage: `url(${url + product.product_image[0]})` }"></div>
              <div class="product-title text-black font-bold text-xl mt-2 ml-4">{{ product.product_name }}</div>
              <!-- <div class="product-description text-black text-md mt-2 ml-4">{{ product.short_description }}</div> -->
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.full-box {
  @apply mt-10 object-fill overflow-hidden w-3/4 h-40 bg-gradient-to-t from-neutral-700 via-neutral-500 to-neutral-400;
  background-image: src="src\assets\img\product\ventilator.png";
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.btn-heading button {
  font-family: 'Poppins', sans-serif;
  height: 51px;
  width: 148px;
  border-radius: 4px;
  @apply flex items-center justify-center;
  font-size: 16px;
}
</style>
