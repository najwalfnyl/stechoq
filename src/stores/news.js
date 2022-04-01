import { defineStore } from 'pinia';

// import { assetsImg } from '@/utils/helper';

const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    news: [],
  }),
  getters: {
    list: state => state.news,
  },
  actions: {},
});

export default useNewsStore;
