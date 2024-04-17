import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: 'Digital-Manufactuing',
        name: 'Digital Manufacturing',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 'Medical-Device',
        name: 'High Tech Medical Device',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 'Stechoq-Academy',
        name: 'Stechoq Academy',
        img: assetsImg('product/dm.png'),
        sub: 'Lorem ipsum dolor sit amet',
      },
    ],
  }),
  getters: {
    list: state => state.products,
    detail: state => id => state.products.find(product => product.id === id),
  },
  actions: {},
});

export default useProductStore;
