import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: 'true',
  state:{},
  getters: {},
  mutations:{},
  actions:{
    async fetchMovies(context, id = 'tt0111161') {
      console.log(context);
      const response = await axios.get(`/?i=${id}`);
      console.log(response);

    }
  },
};

export default moviesStore;