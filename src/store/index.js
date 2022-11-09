import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import LoaderShow from "./modules/loader";
import notificationStore from './modules/notification';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    notificationStore,
    LoaderShow,
  },
});

store.dispatch('initMoviesStore');

export default store;