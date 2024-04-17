<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { ref, reactive } from 'vue';

const navs = [
  {
    name: 'Home',
    path: '/',
  },  
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'E-Learning',
    path: '/e-learning',
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
  const route = useRoute();
  route.push('/news'); 
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

const isOpen = ref(false);

const openDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    isOpen.value = false;
  }
});
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
        <div class="dropdown" @click="openDropdown">
          <button class="dropbtn">
            Language
          </button>
          <div v-if="isOpen" class="dropdown-content">
            <a href="#">ID</a>
            <a href="#">ENG</a>
          </div>
        </div>
        <div class="hide-in-tablet">
          <div class="btn-contact">
            <button
              type="button"
              @click="openContact"
            >
              Contact Us
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
          <div class="btn-contact">
            <button
              type="button"
              @click="openContact"
            >
              Kontak Kami
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<style scoped>

</style>