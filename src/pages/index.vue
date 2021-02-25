<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">すべての記事</h2>

      <PostList :propsPosts="allPostsData" />
    </div>
  </main>
</template>

<script>
import PostList from "~/components/PostList";
import common from "~/mixins/common";
export default {
  name: "Index",
  components: {
    PostList
  },
  mixins: [common],
  async asyncData({ store }) {
    const query = {
      type: "posts",
      // orderby: 'date',
      // per_page: $config.PER_PAGES,
      // page: 1,
      // categories: [],
      // tags: [],
      // search: '',
      // _embed: 1,
      info: "Index"
    };
    await store.dispatch("getAllPosts", query);
  }
};
</script>

<style lang="scss" scoped>
//
</style>
