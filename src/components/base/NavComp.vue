<script setup>
import { RouterLink } from 'vue-router';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { ref, reactive } from 'vue';

const navs = [
  {
    name: 'Tentang Kami',
    path: '/about-us',
  },
  {
    name: 'Produk',
    path: '/products',
  },
  {
    name: 'E-Learning',
    path: '/e-learning',
  },
  {
    name: 'Kampus Merdeka',
    path: '/kampus-merdeka',
  },
  {
    name: 'Berita',
    path: '/news',
  },
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};
const form = reactive({ ...initialForm });
const reset = () => {
  Object.assign(form, initialForm);
};

const contactForm = ref(null);

const openContact = () => {
  contactForm.value.showModal();
};

const closeContact = () => {
  contactForm.value.close();
};

const submitForm = (input) => {
  try {
    window.open(`mailto:${import.meta.env.VITE_MAILTO}?subject=${input.name}&body=${input.message}%0D%0A%0D%0A${input.company}%0D%0A${input.phone}`);
  } catch (error) {
    console.log(error);
  } finally {
    reset();
    closeContact();
  }
};
</script>

<template>
  <header id="header">
    <Disclosure v-slot="{ open }" as="nav" class="main-container">
      <div id="main-navbar">
        <div id="brand">
          <router-link :to="{ name: 'home' }">
            <img :src="siteMeta.logo" :alt="siteMeta.title" />
          </router-link>
        </div>
        <div class="hide-in-tablet">
          <div id="navbar-items">
            <router-link
              v-for="item in navs"
              :key="item.name"
              :to="{ path: item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="hide-in-tablet">
          <div id="btn-contact">
            <button
              type="button"
              @click="openContact"
            >
              Kontak Kami
            </button>
          </div>
        </div>
        <div id="mobile-menu">
          <!-- Mobile menu button -->
          <DisclosureButton
            id="mobile-menu-btn"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="hero-icon" aria-hidden="true" />
            <XIcon v-else class="hero-icon" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel v-slot="{ close }" class="lg:hidden">
        <div class="pt-2 pb-3">
          <router-link
            v-for="item in navs"
            :key="item.name"
            :to="item.path"
            class="block py-2"
            @click="close"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center">
            <button
              type="button"
              class="bg-blue-500 grow text-white p-2 rounded-md"
              @click="openContact"
            >
              Kontak Kami
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
  <dialog id="contactForm" ref="contactForm">
    <form method="dialog" @submit.prevent="submitForm(form)">
      <h2 class="text-2xl font-bold">Mari membuat inovasi teknologi bersama STECHOQ</h2>
      <div class="mt-8">
        <div class="grid grid-cols-2 gap-6">
          <label class="block col-span-2">
            <span class="text-gray-700 font-medium">Nama Lengkap</span>
            <input
              v-model.trim="form.name"
              type="text"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="John Doe"
              required
            />
          </label>
          <label class="block col-span-2">
            <span class="text-gray-700 font-medium">Perusahaan</span>
            <input
              v-model.trim="form.company"
              type="text"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="PT Stechoq Robotika Indonesia"
              required
            />
          </label>
          <label class="block">
            <span class="text-gray-700 font-medium">Alamat Email</span>
            <input
              v-model.trim="form.email"
              type="email"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="john@example.com"
              required
            />
          </label>
          <label class="block">
            <span class="text-gray-700 font-medium">Nomer Telepon</span>
            <input
              v-model.trim="form.phone"
              type="tel"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="628123456789"
              required
            />
          </label>
          <label class="block col-span-2">
            <span class="text-gray-700 font-medium">Pesan</span>
            <textarea
              v-model.trim="form.message"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              rows="2"
              placeholder="Tulis pesan"
              required
            ></textarea>
          </label>
          <button class="border py-2 px-4" type="reset" @click="closeContact">Batalkan</button>
          <button class="bg-primary py-2 px-4 text-white" type="submit">Kirim Email</button>
        </div>
      </div>
    </form>
  </dialog>
</template>
