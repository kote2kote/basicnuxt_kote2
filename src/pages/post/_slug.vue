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
    console.log(params.slug);
    const query = {
      slug: params.slug
    };
    await store.dispatch("getPost", query);
  },
  head() {
    return {
      title: `${this.postData.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.postData.excerpt
        },
        { property: "og:image", content: this.postData.thumbnail.src },
        {
          property: "og:image:secure_url",
          content: this.postData.thumbnail.src
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${this.$config.MAIN_URL}/post/${this.postData.slug}`
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.postData.title}`
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:description",
          property: "og:description",
          content: this.postData.excerpt
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `${this.$config.MAIN_URL}/post/${this.postData.slug}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//
</style>
