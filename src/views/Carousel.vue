<template>
  <div class="main-container card-carousel my-6 flex flex-col justify-center items-center">
    <div class="carousel-container flex justify-center items-center" ref="carousel">
      <div class="my-card" v-for="(card, index) in cards" :key="index"
        :style="{ backgroundImage: `url(${url + card})` }" :class="getClass(index)" @click="handleCardClick(index)">
      </div>
    </div>
    <div class="pagination flex justify-center mt-4">
      <span v-for="(card, index) in cards" :key="'pagination-' + index" class="pagination-dot"
        :class="{ active: index === activeIndex }" @click="() => handleCardClick(index)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import axios from 'axios';

const about = ref([]);
const url = 'http://127.0.0.1:8000/storage/';
const activeIndex = ref(0);

const fetchAboutUs = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/aboutUs');
    about.value = response.data.flatMap(item => item.images);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const cards = ref([]);
const carousel = ref(null);

const getClass = (index) => {
  if (index === activeIndex.value) return 'active';
  if (index === (activeIndex.value - 1 + cards.value.length) % cards.value.length) return 'prev';
  if (index === (activeIndex.value + 1) % cards.value.length) return 'next';
  return '';
};

const handleCardClick = (index) => {
  activeIndex.value = index;
};

const handleKeydown = (e) => {
  if (e.keyCode === 37) {
    activeIndex.value = (activeIndex.value - 1 + cards.value.length) % cards.value.length;
  } else if (e.keyCode === 39) {
    activeIndex.value = (activeIndex.value + 1) % cards.value.length;
  }
};

onMounted(async () => {
  await fetchAboutUs();
  watchEffect(() => {
    if (about.value.length) {
      cards.value = about.value;
    }
  });
  document.body.addEventListener('keydown', handleKeydown);
});
</script>

<style>
.card-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.card-carousel .my-card {
  border-radius: 20px;
  height: 20rem;
  width: 28%;
  min-width: calc(100% / 3);
  box-sizing: border-box;
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: relative;
  z-index: 1;
  transform: scale(0.6) translateY(-2rem);
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  background: black;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 1024px) {
  .card-carousel .my-card {
    height: 16rem;
  }
}

@media (max-width: 768px) {
  .card-carousel .my-card {
    height: 12rem;
  }
}

.card-carousel .my-card.active {
  z-index: 3;
  transform: scale(1) translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.card-carousel .my-card.prev,
.card-carousel .my-card.next {
  z-index: 2;
  transform: scale(0.8) translateY(-1rem);
  opacity: 1;
  pointer-events: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.pagination-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-dot.active {
  background-color: #000;
}
</style>
