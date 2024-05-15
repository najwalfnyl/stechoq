<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  outsideiIndicator: {
    type: Boolean,
    default: false,
  },
});

const active = ref(0);

let index = 0;
let setActiveInterval;
function setActive() {
  if (index === props.images.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  active.value = index;
}

onMounted(() => {
  setActiveInterval = setInterval(setActive, 5000);
});

onUnmounted(() => {
  clearInterval(setActiveInterval);
});
</script>

<template>
  <div class="slide">
    <div class="carousel-inner overflow-hidden h-[750px] w-full">
      <div
        v-for="(img, i) in props.images"
        :id="`slide-${i}`"
        :key="i"
        :class="`${i === active ? 'active' : 'right-full'}`"
        class="carousel-item object-fill transition-all h-[750px] ease-in-out"
      >
        <img
          class="object-cover object-center w-full h-full"
          :src="img"
          :alt="`${(i += 1)}`"
        />
      </div>
    </div>
    <div
      class="main-container carousel-indicators flex h-16 w-full items-center"
      :class="[props.outsideiIndicator ? '' : '-mt-16']"
    >
      <ol class="z-10 flex w-fit justify-center space-x-2">
        <li
          v-for="(img, idx) in props.images"
          :key="idx"
          class="w-4 h-4 bg-gray-300 rounded-full cursor-pointer"
          :class="[idx === active ? 'bg-slate-500' : '']"
        ></li>
      </ol>
    </div>
  </div>
</template>

<style>
.card-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-carousel .my-card {
  height: 20rem;
  width: 12rem;
  position: relative;
  z-index: 1;
  -webkit-transform: scale(0.6) translateY(-2rem);
  transform: scale(0.6) translateY(-2rem);
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  background: #2e5266;
  background: linear-gradient(to top, #2e5266, #6e8898);
  transition: 1s;
}

.card-carousel .my-card:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 100%;
  background-color: rgba(0,0,0,0.3);
  bottom: -5rem;
  -webkit-filter: blur(4px);
  filter: blur(4px);
}

.card-carousel .my-card.active {
  z-index: 3;
  -webkit-transform: scale(1) translateY(0) translateX(0);
  transform: scale(1) translateY(0) translateX(0);
  opacity: 1;
  pointer-events: auto;
  transition: 1s;
}

.card-carousel .my-card.prev, .card-carousel .my-card.next {
  z-index: 2;
  -webkit-transform: scale(0.8) translateY(-1rem) translateX(0);
  transform: scale(0.8) translateY(-1rem) translateX(0);
  opacity: 0.6;
  pointer-events: auto;
  transition: 1s;
}


</style>
