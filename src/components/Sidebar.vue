<template>
  <aside class="aside px-4" style="width: 300px;">
    <h5 class="c-tail">カテゴリメニュー</h5>
    <ul>
      <li v-for="n of propsMenuData" :key="n.id">
        <template v-if="n.object === 'category'">
          <nuxt-link :to="`/category/${n.slug}`">{{ n.title }}</nuxt-link>
        </template>
        <template v-else-if="n.object === 'page'">
          <nuxt-link :to="`/page/${n.object_slug}`">{{ n.title }}</nuxt-link>
        </template>
        <template v-else>
          <nuxt-link :to="`/cpt/${n.object_slug}`">{{ n.title }}</nuxt-link>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    propsMenuData: Array
  }
};
</script>

<style lang="scss" scoped>
//
</style>
