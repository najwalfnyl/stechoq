import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useAwardStore = defineStore({
  id: 'award',
  state: () => ({
    awards: [
      {
        img: assetsImg('award/award1.png'),
        title: 'Leader of the national defense day ceremony 2016',
      },
      {
        img: assetsImg('award/award2.png'),
        title: 'Pioner youth international 2016',
      },
      {
        img: assetsImg('award/award3.png'),
        title: 'Youth defense country',
      },
      {
        img: assetsImg('award/award4.png'),
        title: 'Oustanding student for the world',
      },
      {
        img: assetsImg('award/award5.png'),
        title: 'Fire fighting robogames, California 2013',
      },
      {
        img: assetsImg('award/award6.png'),
        title: 'Balancer robogames, California 2013',
      },
      {
        img: assetsImg('award/award7.png'),
        title: 'Natcar robogames, California 2013',
      },
      {
        img: assetsImg('award/award8.png'),
        title: 'National robogames, Indonesia 2013',
      },
    ],
  }),
  getters: {
    list: state => state.awards,
  },
  actions: {},
});

export default useAwardStore;
