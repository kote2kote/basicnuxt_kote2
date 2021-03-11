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
  data() {
    return {
      title: "",
      description: ""
    };
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
  },
  head() {
    return {
      title: `[タグ: ${this.tagName}]の記事一覧`,
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
