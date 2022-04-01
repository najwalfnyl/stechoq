import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: 'agv',
        name: 'Automatic Guided Vehicle',
        img: assetsImg('list-product/agv.png'),
      },
      {
        id: 'dcs-inject',
        name: 'Digital Control System Injection',
        img: assetsImg('list-product/dcs-inject.png'),
      },
      {
        id: 'dcs-stamping',
        name: 'Digital Control System Stamping',
        img: assetsImg('list-product/dcs-stamping.png'),
      },
      {
        id: 'dcs-warehouse',
        name: 'Digital Control System Warehouse',
        img: assetsImg('list-product/dcs-warehouse.png'),
      },
      {
        id: 'dcs-erp',
        name: 'Digital Control System ERP',
        img: assetsImg('list-product/dcs-erp.png'),
      },
      {
        id: 'ventilator-icu',
        name: 'Ventilator ICU',
        img: assetsImg('list-product/ventilator-icu.png'),
      },
      {
        id: 'arm-robot',
        name: 'ARM Robot Transfer',
        img: assetsImg('list-product/arm-robot.png'),
      },
      {
        id: 'qc-camera',
        name: 'QC Camera',
        img: assetsImg('list-product/qc-camera.png'),
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
