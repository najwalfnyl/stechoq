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
.right-full {
  right: -100%;
}

.carousel-item {
  float: right;
  position: relative;
  display: block;
  width: 100%;
  margin-left: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  right: 0;
}
</style>
