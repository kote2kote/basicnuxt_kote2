<template>
  <main class="main w-full">
    <div class="inner px-8">
      <h2 class="c-tail">{{ postData.title.rendered }}</h2>
      <div class="inner">
        <div class="w-full flex pb-8">
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
        </div>

        <div class="text-center pb-12">
          <img
            class="inline-block"
            style="width: 500px;"
            :src="postData.featured_image.src"
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
    console.log(params.slug);
    // const query = {
    //   type: "posts",
    // orderby: 'date',
    // per_page: $config.PER_PAGES,
    // page: 1,
    // categories: [],
    // tags: [],
    // search: '',
    // _embed: 1,
    //   info: "Index"
    // };
    await store.dispatch("getPost", params.slug);
  }
};
</script>

<style lang="scss" scoped>
//
</style>
