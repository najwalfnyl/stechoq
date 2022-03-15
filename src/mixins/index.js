import useSiteMetaStore from '@/stores';

export default {
  computed: {
    siteMeta() {
      const store = useSiteMetaStore();
      return store.siteMeta;
    }
  }
};
