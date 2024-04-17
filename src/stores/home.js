import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useHomeStore = defineStore({
  id: 'homelist',
  state: () => ({
    homelists: [
      {
        id: 'Digital-Manufactuing',
        name: 'Digital Manufacturing',
        img: assetsImg('list-product/digital.png'),
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      },
      {
        id: 'Medical-Device',
        name: 'High Tech Medical Device',
        img: assetsImg('list-product/md.png'),
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      },
      {
        id: 'Stechoq-Academy',
        name: 'Stechoq Academy',
        img: assetsImg('list-product/sa.png'),
        sub: 'Deskripsi singkat tentang Digital Manufacturing.',
      },
    ],
  }),
  getters: {
    list: state => state.homelists,
    detail: state => id => state.homelists.find(homelist => homelist.id === id),
  },
  actions: {},
});

export default useHomeStore;
