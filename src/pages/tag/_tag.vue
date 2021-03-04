<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">タグ: {{ tagName }}</h2>

      <PostList :propsPosts="allPostsData" />
    </div>
  </main>
</template>

<script>
import PostList from "~/components/PostList";
import common from "~/mixins/common";
export default {
  name: "Tag",
  components: {
    PostList
  },
  mixins: [common],
  async asyncData({ store, params, state }) {
    console.log(store.state.tagData);
    let tagID = [];
    let tagName = "";
    for (const n of store.state.tagData) {
      if (n.slug === params.tag) {
        tagID.push(n.id);
        tagName = n.name;
      }
    }

    const query = {
      tags: tagID,
      info: "Tag"
    };
    await store.dispatch("getAllPosts", query);
    return { tagName: tagName };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
