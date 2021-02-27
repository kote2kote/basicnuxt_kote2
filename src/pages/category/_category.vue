<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">カテゴリ: {{ catName }}</h2>

      <PostList :propsPosts="allPostsData" />
    </div>
  </main>
</template>

<script>
import PostList from "~/components/PostList";
import common from "~/mixins/common";
export default {
  name: "Category",
  components: {
    PostList
  },
  mixins: [common],
  async asyncData({ store, params, state }) {
    console.log(store.state.catData);
    let catID = [];
    let catName = "";
    for (const n of store.state.catData) {
      if (n.slug === params.category) {
        catID.push(n.id);
        catName = n.name;
      }
    }
    // console.log(params.category);
    const query = {
      type: "posts",
      // orderby: 'date',
      // per_page: $config.PER_PAGES,
      // page: 1,
      categories: catID,
      // tags: [],
      // search: '',
      // _embed: 1,
      info: "Category"
    };
    await store.dispatch("getAllPosts", query);
    return { catName: catName };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
