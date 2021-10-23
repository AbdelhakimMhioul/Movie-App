<script>
  import getMovie from "./composables/getMovie";
  import { onBeforeMount, ref } from "vue";
  import getGenres from "./composables/getGenres";
  import getMovieGenres from "./composables/getMovieGenres";
  import formatDate from "../../composables/formatDate";
  import getMovieCredits from "./composables/getMovieCredits";
  import pluckArray from "../../composables/pluckArray";
  import Images from "../Images.vue";
  import MovieCasts from "../MovieCasts.vue";
  import YoutubeVideoPlayer from "../YoutubeVideoPlayer.vue";
  import LoadingBar from "../LoadingBar.vue";
  import ImageOrPlaceholder from "../ImageOrPlaceholder.vue";

  export default {
    components: {
      Images,
      MovieCasts,
      YoutubeVideoPlayer,
      LoadingBar,
      ImageOrPlaceholder,
    },
    props: ["id"],
    setup(props) {
      const { movie, movieImages, movieVideo, loading, loadMovie } = getMovie();
      const { genres, loadGenres } = getGenres();
      const { movieCasts, movieCrew, loadMovieCredits } = getMovieCredits();
      const isOpenVideo = ref(false);

      onBeforeMount(() => {
        loadMovie(props.id);
        loadGenres();
        loadMovieCredits(props.id);
      });

      return {
        movie,
        movieVideo,
        movieImages,
        loading,
        isOpenVideo,
        genres,
        movieCrew,
        movieCasts,
        pluckArray,
        getMovieGenres,
        formatDate,
      };
    },
  };
</script>

<template>
  <div v-if="loading"><loading-bar /></div>
  <div
    class="border-b border-gray-800 movie-info"
    @keydown.esc="isOpenVideo = false"
  >
    <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
      <div class="flex-none">
        <image-or-placeholder
          :result="movie"
          size="w400"
          my_key="poster_path"
        />
      </div>
      <div class="md:ml-24">
        <h2 class="mt-4 text-4xl font-semibold md:mt-0">
          {{ movie["title"] }}
        </h2>
        <div class="flex flex-wrap items-center mt-4 text-sm text-gray-700 dark:text-gray-400">
          <svg class="w-4 text-gray-700 fill-current dark:text-myyellow" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          <span class="ml-1">{{ movie["vote_average"] * 10 }}%</span>
          <span class="mx-2">|</span>
          <span>{{ formatDate(movie["release_date"]) }}</span>
          <span class="mx-2">|</span>
          <span>{{
            getMovieGenres(genres, pluckArray(movie.genres, "id"))
          }}</span>
        </div>

        <p class="mt-8 text-gray-700 dark:text-gray-300">{{ movie["overview"] }}</p>

        <div class="mt-12">
          <h4 class="font-semibold text-white">Featured Crew</h4>
          <div class="flex mt-4">
            <div v-for="mvCrew in movieCrew" :key="mvCrew.id" class="mr-6">
              <div>{{ mvCrew.name }}</div>
              <div class="text-sm text-gray-400">{{ mvCrew.job }}</div>
            </div>
          </div>
        </div>

        <div class="mt-12" v-if="movieVideo">
          <button
            @click="isOpenVideo = true"
            class="flex items-center px-5 py-4 font-semibold text-gray-900 transition duration-150 ease-in-out rounded bg-myyellow hover:opacity-70"
          >
            <svg class="w-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            <span class="ml-2">Play Trailer</span>
          </button>
          <div>
            <youtube-video-player
              @hideVideo="isOpenVideo = false"
              :videoKey="movie.videos.results[0].key"
              v-if="isOpenVideo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end movie-info -->
  <movie-casts :movieCasts="movieCasts" />
  <!-- end movie-cast -->
  <images :images="movieImages" />
  <!-- end movie-images -->
</template>

<style>
</style>
