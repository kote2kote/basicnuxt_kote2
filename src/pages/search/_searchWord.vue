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

    // for (const n of store.state.tagData) {
    //   if (n.slug === params.tag) {
    //     tagID.push(n.id);
    //     tagName = n.name;
    //   }
    // }
    // console.log(params.category);
    const query = {
      type: "posts",
      // orderby: 'date',
      // per_page: $config.PER_PAGES,
      // page: 1,
      // categories: catID,
      // tags: tagID,
      search: keyword,
      // _embed: 1,
      info: "Search"
    };
    await store.dispatch("getAllPosts", query);
    return { searchWord: params.searchWord };
    // console.log(tagName);
  }
};
</script>

<style lang="scss" scoped>
//
</style>
