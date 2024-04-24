<script setup>
import { useHead } from '@vueuse/head';
import HeadingComp from '@/components/base/HeadingComp.vue';

useHead({
  title: `Kontak | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Berita tentang Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <div class="container mx-auto mt-10">
    <form class="max-w-screen-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"> 
      <div class="flex-container" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
        <div class="contact" style="flex: 1 1 auto; max-width: 65%;">
        <div class="text-4xl font-bold text-black my-2">
            Contact Us
        </div>
        <div class="text-lg font-light text-black mb-5">
            If you have any question or need more information, you can contact us at
        </div>
        </div>
        <div class="information" style="flex: 1 1 auto; max-width: 25%;">
          <div class="text-lg font-light text-navy-prim mb-3 mt-4">
              <img src="src\assets\img\icon\phone.svg" alt="Icon" style="display: inline-block; vertical-align: middle; margin-right: 10px; width: 25px; height: 25px;"/> 
              (0274) 282 9384
          </div>
          <div class="text-lg font-light text-navy-prim mb-5">
            <img src="src\assets\img\icon\mail.svg" alt="Icon" style="display: inline-block; vertical-align: middle; margin-right: 10px; width: 25px; height: 25px;"/> 
              info@stechoq.com
          </div>
        </div>
    </div>

      <div class="grid grid-cols-2 gap-5">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Nama
          </label>
          <input v-model="name" 
            class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Masukkan nama Anda"
            style="border-bottom: 2px solid #4A5568;">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
            Company
          </label>
          <input v-model="company" 
            class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Masukkan nama perusahaan" 
            style="border-bottom: 2px solid #4A5568;">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Email
          </label>
          <input v-model="email" 
            class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="tel" placeholder="Masukkan alamat email"
            style="border-bottom: 2px solid #4A5568;">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="company">
            Phone Number
          </label>
          <input v-model="phone" 
            class="shadow-none appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Masukkan nomor telepon"
            style="border-bottom: 2px solid #4A5568;">
        </div>
      </div>
      <div class="mb-6">
        <label class="block text-black text-sm font-bold mb-2" for="message">
          Pesan
        </label>
        <textarea v-model="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="6" placeholder="Tulis pesan Anda di sini..."></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-navy-prim hover:bg-blue-700 text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="submitForm">
          Kirim
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Logika untuk mengirim formulir
      console.log('Formulir dikirim dengan data:', {
        name: this.name,
        company: this.company,
        phone: this.phone,
        message: this.message,
        email:this.email
      });
    }
  }
};
</script>


