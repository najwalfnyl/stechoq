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
            <router-link v-for="item in navs" :key="item.name" :to="{ path: item.path }">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="dropdown mr-20" @click="openDropdown">
          <button class="dropbtn w-[110%] text-left">
            <div class="pl-3">{{ defaultLanguage }} </div>
          </button>
          <div v-if="isOpen" class="dropdown-content">
            <a href="#" @click="setDefaultLanguage('ID')" :class="{ 'selected': defaultLanguage === 'ID' }">ID</a>
            <a href="#" @click="setDefaultLanguage('ENG')" :class="{ 'selected': defaultLanguage === 'ENG' }">ENG</a>
          </div>
        </div>
        <div class="hide-in-tablet">
          <div class="btn-contact">
            <button type="button" @click="openContact">
              Contact Us
            </button>
          </div>
        </div>
        <div id="mobile-menu">
          <!-- Mobile menu button -->
          <DisclosureButton id="mobile-menu-btn">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="hero-icon" aria-hidden="true" />
            <XIcon v-else class="hero-icon" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel v-slot="{ close }" class="lg:hidden">
        <div class="pt-2 pb-3">
          <router-link v-for="item in navs" :key="item.name" :to="item.path" class="block py-2" @click="close">
            {{ item.name }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="btn-contact">
            <button type="button" class="font-sm" @click="openContact">
              Contact Us
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

const navs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'E-Learning',
    path: '/e-learning',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
];


const router = useRouter();
const openContact = () => {
  router.push({ name: 'contact-us' });
};

const isOpen = ref(false);
let defaultLanguage = 'ID';

const openDropdown = () => {
  isOpen.value = !isOpen.value;
};


document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.querySelector('.dropbtn');
  defaultLanguage = dropdownButton.textContent.trim();
});

const setDefaultLanguage = (lang) => {
  defaultLanguage = lang;
  isOpen.value = false;
};

window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    isOpen.value = false;
  }
});
</script>