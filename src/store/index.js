import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import LoaderShow from "./modules/loader";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    LoaderShow,
  },
});

store.dispatch('initMoviesStore');

export default store;