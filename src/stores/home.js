import { defineStore } from 'pinia';

// import { assetsImg } from '@/utils/helper';
import axios from 'axios';

const useHomeStore = defineStore({
  id: 'homelist',
  state: () => ({
    homelists: [
      // {
      //   id: 'Digital-Manufactuing',
      //   name: 'Digital Manufacturing',
      //   img: assetsImg('list-product/digital.png'),
      //   sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      // },
      // {
      //   id: 'Medical-Device',
      //   name: 'High Tech Medical Device',
      //   img: assetsImg('list-product/md.png'),
      //   sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      // },
      // {
      //   id: 'Stechoq-Academy',
      //   name: 'Stechoq Academy',
      //   img: assetsImg('list-product/sa.png'),
      //   sub: 'Deskripsi singkat tentang Digital Manufacturing.',
      // },
    ],
  }),
  getters: {
    list: state => state.homelists,
    detail: state => id => state.homelists.find(homelist => homelist.id === id),
  },
  actions: {
    async fetchCategoryProduct() {
      try {
        const respone = await axios.get('http://127.0.0.1:8000/api/categoryProduct');
        this.homelists = respone.data;
        console.log('Data Api: ',respone.data);

      } catch (error) {
        console.log('error fetching data : ',error);
      }
    }
  },
});

export default useHomeStore;
