import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useProductStore = defineStore({
  id: 'kelas',
  state: () => ({
    kelass: [
      {
        id: 'Software-Engineering',
        name: 'Software Engineering',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
      {
        id: 'Mechanical-Engineering',
        name: 'Mechanical Engineering',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
      {
        id: 'Content-creator',
        name: 'Creative Video and Content Creator',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
      {
        id: 'Hardware-Engineering',
        name: 'Hardware Engineering',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
      {
        id: 'Education-Engineering',
        name: 'Education Engineering',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
      {
        id: '3d',
        name: '3D Designing',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor amet',
      },
    ],
  }),
  getters: {
    list: state => state.kelass,
    detail: state => id => state.kelass.find(kelas => kelas.id === id),
  },
  actions: {},
});

export default useKelasStore;
