<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">{{ postData.title.rendered }}</h2>
      <div class="inner">
        <div class="text-center pb-12">
          <img
            class="inline-block"
            style="width: 500px;"
            :src="postData.thumb"
            alt=""
          />
        </div>
        <div v-html="postData.content.rendered"></div>
      </div>
    </div>
  </main>
</template>

<script>
import common from "~/mixins/common";
export default {
  name: "Index",
  mixins: [common],
  async asyncData({ params, store }) {
    const query = {
      type: "cpt",
      slug: params.slug
    };
    await store.dispatch("getPost", query);
  }
};
</script>

<style lang="scss" scoped>
//
</style>
