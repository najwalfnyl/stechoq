<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { assetsImg } from '@/utils/helper';

const leftArrow = assetsImg('icon/left.svg');
const rightArrow = assetsImg('icon/right.svg');

const data = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Mhs',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum fuga voluptatibus quod accusamus, minima, molestias autem, mollitia ipsam natus nesciunt possimus numquam! Molestiae nihil aperiam ad neque voluptas magnam!',
    image: 'https://picsum.photos/id/232/1024/800',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Mhs',
    message: 'Testing',
    image: 'https://picsum.photos/id/237/1024/800',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Mhs Garis Lembut',
    message: 'Testing',
    image: 'https://picsum.photos/id/123/1024/800',
  },
];

const active = ref(0);

let index = 0;
let setActiveInterval;
function setActive() {
  if (index === data.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  clearInterval(setActiveInterval);
  setActiveInterval = setInterval(setActive, 5000);
  active.value = index;
};

const prevData = () => {
  if (index === 0) {
    index = data.length - 1;
  } else {
    index -= 1;
  }
  clearInterval(setActiveInterval);
  setActiveInterval = setInterval(setActive, 5000);
  active.value = index;
};

const nextData = () => {
  if (index === data.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  clearInterval(setActiveInterval);
  setActiveInterval = setInterval(setActive, 5000);
  active.value = index;
};

onMounted(() => {
  setActiveInterval = setInterval(setActive, 5000);
});

onUnmounted(() => {
  clearInterval(setActiveInterval);
});
</script>

<template>
  <div id="testimonial" class="">
    <article class="container flex">
      <button id="leftArrow" class="flex-none self-center" @click="prevData">
        <div class="border-2 rounded-full p-2">
          <img class="w-4 h-4" :src="leftArrow" alt="" />
        </div>
      </button>
      <div id="content" class="grow p-4">
        <template v-for="(item, i) in data" :key="i">
          <div v-if="i === active" class="grid grid-cols-3 gap-8">
            <div class="h-96 object-fill">
              <img
                class="object-cover h-full w-full"
                :src="item.image"
                alt=""
              />
            </div>
            <div class="flex items-center col-span-2">
              <blockquote>
                <p class="mb-4">"{{ item.message }}"</p>
                <cite class="not-italic">
                  <p class="font-medium text-3xl">{{ item.name }}</p>
                  <p>{{ item.position }}</p>
                </cite>
              </blockquote>
            </div>
          </div>
        </template>
      </div>
      <button id="rightArrow" class="flex-none self-center" @click="nextData">
        <div class="border-2 rounded-full p-2">
          <img class="w-4 h-4" :src="rightArrow" alt="" />
        </div>
      </button>
    </article>
  </div>
</template>
