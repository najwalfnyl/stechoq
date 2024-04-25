import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: 'Digital-Control-System ',
        name: 'Digital Control System',
        img: assetsImg('product/dm.png'),
        sub: 'Learn More',
      },
      {
        id: 'Guided-Vehicle',
        name: 'Automated Guided Vehicle',
        img: assetsImg('product/dm.png'),
        sub: 'Learn More',
      },
      {
        id: 'Seal-Insert-Machine',
        name: 'Automated Seal Insert Machine',
        img: assetsImg('product/dm.png'),
        sub: 'Learn More',
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
