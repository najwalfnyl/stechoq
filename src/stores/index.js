import { defineStore } from 'pinia';
import { assetsImg } from '@/utils/helper';

const siteLogo = assetsImg('stechoq-logo.svg');

const useSiteMetaStore = defineStore({
  id: 'siteMeta',
  state: () => ({
    title: 'STECHOQ ROBOTIKA INDONESIA',
    description: 'Berkarya Untuk Bangsa',
    logo: siteLogo,
  }),
  getters: {
    siteMeta: (state) => ({
      ...state,
    }),
  },
  actions: {
  },
});

export default useSiteMetaStore;
