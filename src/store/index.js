export const state = () => ({
  testData: [], // test用
  menuData: [],
  catData: [],
  tagData: [],
  allPostsData: [],
  postData: {}
});

export const mutations = {
  // test用
  setTest(state, payload) {
    state.test = payload;
    // console.log(payload);
  },
  setMenuData(state, payload) {
    state.menuData = payload;
  },
  setCatData(state, payload) {
    state.catData = payload;
  },
  setTagData(state, payload) {
    state.tagData = payload;
  },
  setAllPostsData(state, payload) {
    // console.log(payload);
    state.allPostsData = payload;
  },
  setPostData(state, payload) {
    state.postData = payload;
  }
};

export const actions = {
  // test用
  getTest({ commit }, payload) {
    commit("setPosts", payload);
  },

  // ==================================================
  // nuxtServerInit
  // ==================================================
  async nuxtServerInit({ commit, state }, { app }) {
    // console.log("process.env.MAIN_URL: ", this.$config.MAIN_URL);
    // console.log("process.env.MAIN_REST_API: ", this.$config.MAIN_REST_API);
    // console.log("process.env.MAIN_MENU_API: ", this.$config.MAIN_MENU_API);

    // -------------------------------------
    // get catData
    // -------------------------------------
    let tmpCatData = [];
    const resCat = await fetch(
      `${this.$config.MAIN_REST_API}/categories?per_page=100`
    );
    tmpCatData = await resCat.json();

    commit("setCatData", tmpCatData);

    // -------------------------------------
    // get tagData
    // -------------------------------------
    let tmpTagData = [];
    const resTag = await fetch(
      `${this.$config.MAIN_REST_API}/tags?per_page=100`
    );
    tmpTagData = await resTag.json();
    console.log(tmpTagData.length);
    commit("setTagData", tmpTagData);

    // -------------------------------------
    // get menuData
    // -------------------------------------
    let tmpMenuData = [];
    const res = await fetch(this.$config.MAIN_MENU_API);
    tmpMenuData = await res.json();
    tmpMenuData = tmpMenuData.items;

    // ディレクトリ名とスラッグを結合
    // ================================= //
    let tmpMenuDataEdit = [];
    for (const n of tmpMenuData) {
      // カテゴリーの場合
      if (n.object === "category") {
        n.dir = "category";
        for (const nn of tmpCatData) {
          if (n.object_id === nn.id) {
            n.slug = nn.slug;
          }
        }
      }
      // 固定ページの場合
      else if (n.object === "page") {
        n.dir = "page";
        n.slug = n.object_slug;
      }
      // CPTの場合
      else {
        n.dir = "cpt";
        n.slug = n.object_slug;
      }

      tmpMenuDataEdit.push(n);
    }
    commit("setMenuData", tmpMenuDataEdit);
    // return tmpMenuDataEdit;
    // ===========> wp-api-menuはカテゴリスラッグがないので追加
    // for (const n of tmpMenuData) {
    //   let tmp = n;
    //   for (const nn of tmpCatData) {
    //     if (n.object_id === nn.id) {
    //       tmp.slug = nn.slug;
    //     } else {
    //       tmp.slug = tmp.object_slug;
    //     }
    //   }
    //   // add dir name
    //   if (tmp.object === "category") {
    //     tmp.dir = "category";
    //   } else if (tmp.object === "page") {
    //     tmp.dir = "page";
    //   } else {
    //     tmp.dir = "cpt";
    //   }

    //   tmpMenuDataEdit.push(tmp);
    // }
    // commit("setMenuData", tmpMenuDataEdit);
    // console.log(tmpMenuDataEdit);
  },

  // ==================================================
  // getAllPosts
  // ==================================================
  async getAllPosts({ commit, error }, query) {
    // console.log(query);
    let tmpPosts = [];
    let i = 1;

    // console.log("test");
    // console.log(query.tags);

    const newQuery = `
    ${this.$config.MAIN_REST_API}/${
      query.type ? query.type : "posts"
    }?_embed&per_page=${
      query.per_page ? query.per_page : this.$config.PER_PAGES
    }&page=${query.page ? query.page : i}&categories_exclude=1&search=${
      query.search ? query.search : ""
    }${query.categories ? "&categories=" + query.categories : []}
    ${query.tags ? "&tags=" + query.tags : []}
    `;

    // console.log("test");
    // console.log(newQuery);
    // tmpPosts = await this.$axios.$get(newQuery);
    const res = await fetch(newQuery);
    const tmpAllPosts = await res.json();

    let tmpAllPosts2 = [];
    for (const n of tmpAllPosts) {
      n.thumb = n._embedded["wp:featuredmedia"][0].source_url;
      tmpAllPosts2.push(n);
    }

    // console.log("test");
    // console.log(tmpAllPosts2.tags);

    commit("setAllPostsData", tmpAllPosts2);
  },

  // ==================================================
  // getPost
  // ==================================================
  async getPost({ commit }, query) {
    const res = await fetch(
      `${this.$config.MAIN_REST_API}/${
        query.type ? query.type : "posts"
      }?_embed&slug=${query.slug}&_embed`
    );
    const tmp = await res.json();
    const tmpPosts = tmp[0];

    tmpPosts.thumb = tmpPosts._embedded["wp:featuredmedia"][0].source_url;
    // console.log(tmpPosts);
    commit("setPostData", tmpPosts);
  }
};

export const getters = {
  test(state) {
    return state.test; // test用
  },
  menuData(state) {
    return state.menuData;
  },
  catData(state) {
    return state.catData;
  },
  tagData(state) {
    return state.tagData;
  },
  allPostsData(state) {
    return state.allPostsData;
  },
  postData(state) {
    return state.postData;
  }
};
