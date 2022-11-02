<template>
  <div id="app">
    <PosterBg :poster="posterBg"/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>

//424577ad

import { mapActions, mapGetters } from 'vuex';
import PosterBg from './components/PosterBg.vue';
import MoviesList from '@/components/MoviesList.vue';
import MoviesPagination from './components/MoviesPagination'

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
  },
  data: () => ({
    posterBg:'',
  }),
  computed: {
    ...mapGetters('movies', ['moviesList', 'currentPage', 'moviesPerPage', 'moviesLength' ])
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPage']),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      console.log(this.$router);
      this.$router.push({ query: { page } })

      this.changeCurrentPage(page);
    },
  },
  created() {
    if(this.$route.query.page) {
      this.changeCurrentPage(Number(this.$route.query.page));
    }
  },
};
</script>

<style>
#app {
  position: relative;
  font-family:Arial , Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
