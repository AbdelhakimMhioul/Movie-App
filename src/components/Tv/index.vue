<script>
  import { onMounted } from "vue";
  import TvCard from "../TvCard.vue";
  import getPopularTv from "./composables/getPopularTv";
  import getTopRatedShows from "./composables/getTopRatedTv";

  export default {
    components: { TvCard },
    setup() {
      const { popularTv, loadPopularTv } = getPopularTv();
      const { topRatedShows, loadTopRatedShows } = getTopRatedShows();

      onMounted(() => {
        loadPopularTv();
        loadTopRatedShows();
      });

      return { topRatedShows, popularTv };
    },
  };
</script>

<template>
  <div class="container px-4 pt-10 mx-auto">
    <h2 class="text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow">
      Popular Shows
    </h2>
    <div
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div v-for="popTv in popularTv" :key="popTv.id">
        <tv-card :tvshow="popTv" />
      </div>
    </div>

    <div class="py-12 top-rated-shows">
      <h2 class="pb-4 text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow">
        Top Rated Shows
      </h2>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div v-for="topTv in topRatedShows" :key="topTv.id">
          <tv-card :tvshow="topTv" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
