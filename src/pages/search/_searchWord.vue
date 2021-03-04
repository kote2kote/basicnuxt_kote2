<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">検索: {{ searchWord }}</h2>

      <PostList :propsPosts="allPostsData" />
    </div>
  </main>
</template>

<script>
import PostList from "~/components/PostList";
import common from "~/mixins/common";
export default {
  name: "Search",
  components: {
    PostList
  },
  mixins: [common],
  async asyncData({ store, params, state }) {
    const keyword = encodeURI(params.searchWord);
    const query = {
      type: "posts",
      search: keyword,
      info: "Search"
    };
    await store.dispatch("getAllPosts", query);
    return { searchWord: params.searchWord };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
