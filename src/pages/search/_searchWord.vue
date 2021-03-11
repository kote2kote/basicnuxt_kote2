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
  data() {
    return {
      title: "",
      description: ""
    };
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
  },
  head() {
    return {
      title: `[${this.$route.params.searchWord}]に関する記事一覧`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `https://kote2.tokyo/search/${this.$route.params.searchWord}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
