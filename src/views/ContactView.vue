<script setup>
import { RouterLink } from 'vue-router';
import { useHead} from '@vueuse/head';

useHead({
  title: `Produk | STECHOQ`,
  meta: [
    {
      name: `description`,
      content: `Produk Stechoq Robotika Indonesia`,
    },
  ],
});
</script>

<template>
  <div id="contactForm">
    <div id="form-container">
      <div id="btn-cancel">
        <button id="btn-contact-cancel" type="button" class="" @click="closeContact">
          <img src="src\assets\img\icon\cross.svg" alt="Icon" class="h-3 w-3" />
        </button>
      </div>
      <div id="form-head">
        <div class="contact-title text-4xl font-bold">
          <h2>Contact Us</h2>
        </div>
        <div class="contact-info text-sm font-regular ml-9">
          <p>(0274) 282 9384</p>
          <p>info@stechoq.com</p>
        </div>
      </div>  
      <h1 class="mt-5 text-md">If you have any question or need more information, you can contact us at</h1>
      <div id="form-fields">
        <label  class="halfs">
          <span>Nama Lengkap</span>
          <input
            v-model.trim="form.name"
            type="text"
            placeholder="John Doe"
            required
          />
        </label>
        <label  class="halfs">
          <span>Perusahaan</span>
          <input
            v-model.trim="form.company"
            type="text"
            placeholder="PT Stechoq Robotika"
            required
          />
        </label>
        <label class="halfs">
          <span>Alamat Email</span>
          <input
            v-model.trim="form.email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </label>
        <label class="halfs">
          <span>Nomer Telepon</span>
          <input
            v-model.trim="form.phone"
            type="tel"
            placeholder="628123456789"
            required
          />
        </label>
        <label>
          <span>Pesan</span>
          <textarea
            v-model.trim="form.message"
            rows="3"
            placeholder="Tulis pesan"
            required
          ></textarea>
        </label>
        <button id="btn-contact-submit" type="submit">Submit</button>
      </div>
    </div>
  </div>
</template>
