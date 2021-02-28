<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail mb-8">{{ postData.title.rendered }}</h2>
      <div class="inner">
        <!-- <div class="w-full flex pb-8">
          <div class="inline-block pr-2">
            <span class="font-bold">カテゴリ: </span>
            <span class="inline-block px-1">
              <nuxt-link
                class="relative underline"
                :to="`/category/${postData.categories[0].slug}`"
                >{{ postData.categories[0].name }}</nuxt-link
              >
            </span>
          </div>

          <div class="inline-block">
            <span class="font-bold">タグ: </span>

            <span
              v-for="n of postData.tags"
              :key="n.id"
              class="inline-block px-1"
            >
              <nuxt-link class="relative underline" :to="`/tag/${n.slug}`">{{
                n.name
              }}</nuxt-link>
            </span>
          </div>
        </div> -->

        <div class="text-center pb-12">
          <img
            class="inline-block"
            style="width: 500px;"
            :src="postData.thumb"
            alt=""
          />
          <!-- {{ postData._embedded["wp:featuredmedia"][0].source_url }} -->
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
      type: "pages",
      // orderby: 'date',
      // per_page: $config.PER_PAGES,
      // page: 1,
      // categories: [],
      // tags: [],
      // search: '',
      slug: params.slug
      // _embed: 1,
      //   info: "Index"
    };
    await store.dispatch("getPost", query);
  }
};
</script>

<style lang="scss" scoped>
//
</style>
