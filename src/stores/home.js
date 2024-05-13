import { defineStore } from "pinia";
import axios from "axios";

const useHomeStore = defineStore({
  id: "homelist",
  state: () => ({
    homelists: [],
  }),
  getters: {
    list: (state) => state.homelists,
    detail: (state) => (id) =>
      state.homelists.find((homelist) => homelist.id === id),
  },
  actions: {
    async fetchCategoryProduct() {
      try {
        const respone = await axios.get(
          "http://127.0.0.1:8000/api/categoryProduct"
        );
        this.homelists = respone.data;
        // console.log("Data Api: ", respone.data);
      } catch (error) {
        // console.log("error fetching data : ", error);
      }
    },
  },
});

export default useHomeStore;
