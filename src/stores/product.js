import { defineStore } from 'pinia';

const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
  }),
  getters: {
    listProducts: state => state.products,
  },
  actions: {},
});

export default useProductStore;
