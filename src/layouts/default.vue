<template>
  <div>
    <div
      v-if="!$config.isProd"
      class="inner fixed right-0 bg-red-600 text-white p-2 font-bold"
    >
      dev
    </div>
    <div class="inner min-h-screen flex flex-col justify-between">
      <Header />
      <div class="flex flex-grow pt-4">
        <Sidebar :propsMenuData="menuData" />
        <nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Sidebar from "~/components/Sidebar";
import common from "~/mixins/common";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    Sidebar
  },
  mixins: [common]
};
</script>
