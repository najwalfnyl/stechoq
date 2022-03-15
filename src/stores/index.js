import { defineStore } from 'pinia';

import siteLogo from '@/assets/img/stechoq-logo.svg';

const useSiteMetaStore = defineStore({
  id: 'siteMeta',
  state: () => ({
    title: 'STECHOQ ROBOTIKA INDONESIA',
    description: 'Berkarya Untuk Bangsa',
    logo: siteLogo,
  }),
  getters: {
    siteMeta: (state) => ({
      title: state.title,
      description: state.description,
      logo: state.logo,
    }),
  },
  actions: {
  },
});

export default useSiteMetaStore;
