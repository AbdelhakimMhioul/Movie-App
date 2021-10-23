<script>
  import formatDate from "../composables/formatDate";
import ImageOrPlaceholder from './ImageOrPlaceholder.vue';

  export default {
  components: { ImageOrPlaceholder },
    props: ["movie", "genres"],
    setup() {
      return { formatDate };
    },
  };
</script>


<template>
  <router-link :to="{ name: 'MoviesShow', params: { id: movie['id'] } }">
    <image-or-placeholder :result="movie" size="w200" my_key="poster_path" />
  </router-link>
  <div class="mt-2">
    <router-link
      :to="{ name: 'MoviesShow', params: { id: movie['id'] } }"
      class="mt-2 text-lg dark:hover:text-gray-300 hover:text-gray-500"
    >
      {{ movie["title"] }}</router-link
    >
    <div class="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
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
    </div>
    <div class="text-sm text-gray-500 truncate dark:text-gray-400">{{ genres }}</div>
  </div>
</template>
