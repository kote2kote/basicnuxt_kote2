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
  data() {
    return {
      title: "",
      description: ""
    };
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
    const query = {
      type: "posts",
      categories: catID,
      info: "Category"
    };
    await store.dispatch("getAllPosts", query);
    return { catName: catName };
  },
  head() {
    return {
      title: `${this.catName}の記事一覧`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
