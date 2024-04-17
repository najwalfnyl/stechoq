import { defineStore } from 'pinia';

import { assetsImg } from '@/utils/helper';

const useProfilePhoto = defineStore({
    id: 'profile',
    state: () => ({
      profiles: [
        {
          id: 'prof1',
          name: 'M. Rushan Jauhari',
          img: assetsImg('home/profile1.png'),
          position: 'Digital Manufacturing Director',
        },
        {
          id: 'prof2',
          name: 'Malik Khidir',
          img: assetsImg('home/profile2.png'),
          position: 'President Director',
        },
        {
          id: 'prof3',
          name: 'Kisma Aruna Candra',
          img: assetsImg('home/profile3.png'),
          position: 'Research and Academy Director',
        },
        {
          id: 'prof4',
          name: 'Iqro Kurniawan',
          img: assetsImg('home/profile4.png'),
          position: 'RnD Director',
        },
        {
            id: 'prof5',
            name: 'Ardi Puspa Kartika',
            img: assetsImg('home/profile5.png'),
            position: 'Robotic Automation Director',
          },
      ],
    }),
    getters: {
      list: state => state.profiles,
      detail: state => id => state.profiles.find(profile => profile.id === id),
    },
    actions: {},
  });


export default useProfilePhoto;