import { defineStore } from 'pinia';

const useSiteMetaStore = defineStore({
  id: 'siteMeta',
  state: () => ({
    title: 'STECHOQ ROBOTIKA INDONESIA',
    description: 'Berkarya Untuk Bangsa',
  }),
  getters: {
    siteMeta: (state) => ({
      title: state.title,
      description: state.description,
    }),
  },
  actions: {
  },
});

export default useSiteMetaStore;
