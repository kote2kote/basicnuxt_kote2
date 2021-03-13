<template>
  <div class="PostList">
    <ul>
      <li
        v-for="n of propsPosts"
        :key="n.id"
        class="p-4 relative z-10 hover:bg-gray-300 cursor-pointer"
      >
        <!-- <h4 class="c-tail mb-4">{{ n.title.rendered }}</h4> -->
        <a class="card-link" :href="`/post/${n.slug}`">
          <h4 class="c-tail mb-4">{{ n.title.rendered }}</h4>
          <div class="flex">
            <figure class="inline-block" style="width: 300px">
              <nuxt-img :src="n.thumb" quality="50" width="1000" />
            </figure>
            <div class="w-full px-6">
              <div v-html="setWordCount(n.excerpt.rendered)"></div>
              <div class="pt-4">
                <span class=" minlg:font-bold">カテゴリ: </span>
                <span class="inline-block px-1">
                  <nuxt-link
                    class="relative underline"
                    :to="`/category/${n.categories[0].slug}`"
                    >{{ n.categories[0].name }}</nuxt-link
                  >
                </span>
              </div>

              <div class="pt-2">
                <span class="font-bold">タグ: </span>

                <span
                  v-for="nn of n.tags"
                  :key="nn.id"
                  class="inline-block px-1"
                >
                  <nuxt-link
                    class="relative underline"
                    :to="`/tag/${nn.slug}`"
                    >{{ nn.name }}</nuxt-link
                  >
                </span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    propsPosts: Array
  },
  methods: {
    setWordCount(str, l = 80) {
      if (str.length > l) {
        str = str.substring(0, l - 1) + "…";
        return str;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .testbg {
//   background: #666;
// }

.card-link {
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
