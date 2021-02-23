export default {
  // methods: {
  //   getCatSlug(id) {
  //     for(const n of catData) {
  //       if(n.id === id) {
  //         return n.slug
  //       }
  //     }
  //   }
  // },
  computed: {
    menuData() {
      return this.$store.getters.menuData;
    },
    catData() {
      return this.$store.getters.catData;
    },
    tagData() {
      return this.$store.getters.tagData;
    }
  }
};
