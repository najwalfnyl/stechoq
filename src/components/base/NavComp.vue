<script setup>
import { RouterLink } from 'vue-router';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';

const navs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about-us',
  },
  {
    name: 'Contact',
    path: '/contact-us',
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
    name: 'Kampus Merdeka',
    path: '/kampus-merdeka',
  },
  {
    name: 'News',
    path: '/news',
  },
];
</script>

<template>
  <header class="min-h-full">
    <Disclosure v-slot="{ open }" as="nav" class="container">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img class="h-12" :src="siteMeta.logo" :alt="siteMeta.title" />
        </div>
        <div class="hidden md:block">
          <div class="flex items-baseline">
            <router-link
              v-for="item in navs"
              :key="item.name"
              :to="{ path: item.path }"
              class="p-3 mx-2"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center">
            <button type="button" class="bg-primary text-white p-2 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
        <div class="flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navs"
            :key="item.name"
            :to="item.path"
            class="block"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center">
            <button type="button" class="bg-primary text-white p-2 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>
