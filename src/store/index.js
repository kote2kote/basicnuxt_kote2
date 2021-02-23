export const state = () => ({
  testData: [],
  menuData: [],
  catData: [],
  tagData: []
});

export const mutations = {
  setTest(state, payload) {
    state.test = payload;
    console.log(payload);
  },
  setMenuData(state, payload) {
    state.menuData = payload;
  },
  setCatData(state, payload) {
    state.catData = payload;
  },
  setTagData(state, payload) {
    state.tagData = payload;
  }
};

export const actions = {
  // ==================================================
  // nuxtServerInit
  // ==================================================
  async nuxtServerInit({ commit, state }, { app }) {
    console.log("process.env.MAIN_URL: ", this.$config.MAIN_URL);
    console.log("process.env.MAIN_REST_API: ", this.$config.MAIN_REST_API);
    console.log("process.env.MAIN_MENU_API: ", this.$config.MAIN_MENU_API);

    // -------------------------------------
    // get catData
    // -------------------------------------
    let tmpCatData = [];
    tmpCatData = await app.$axios.$get(
      `${this.$config.MAIN_REST_API}/categories?per_page=100`
    );
    commit("setCatData", tmpCatData);

    // -------------------------------------
    // get tagData
    // -------------------------------------
    let tmpTagData = [];
    tmpTagData = await app.$axios.$get(
      `${this.$config.MAIN_REST_API}/tags?per_page=100`
    );
    commit("setTagData", tmpTagData);

    // -------------------------------------
    // get menuData
    // -------------------------------------
    let tmpMenuData = [];
    let tmpMenuDataEdit = [];
    tmpMenuData = await app.$axios.$get(this.$config.MAIN_MENU_API);
    tmpMenuData = tmpMenuData.items;

    // ===========> wp-api-menuはカテゴリスラッグがないので追加
    for (const n of tmpMenuData) {
      let tmp = n;
      for (const nn of tmpCatData) {
        if (n.object_id === nn.id) {
          tmp.slug = nn.slug;
        }
      }
      tmpMenuDataEdit.push(tmp);
    }
    commit("setMenuData", tmpMenuDataEdit);
    // console.log(tmpMenuDataEdit);
  },
  getTest({ commit }, payload) {
    commit("setPosts", payload);
  }
};

export const getters = {
  test(state) {
    return state.test;
  },
  menuData(state) {
    return state.menuData;
  },
  catData(state) {
    return state.catData;
  },
  tagData(state) {
    return state.tagData;
  }
};
