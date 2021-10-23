<script>
  import { watchEffect } from "vue";
  import getSearchResults from "./composables/getSearchResults";
  import sliceArray from "../composables/sliceArray";
  import ImageOrPlaceholder from "../components/ImageOrPlaceholder.vue";

  export default {
    components: { ImageOrPlaceholder },
    props: ["search"],
    setup(props) {
      const { searchResults, loadSearchResults } = getSearchResults();

      watchEffect(() => {
        loadSearchResults(props.search);
      });

      return { searchResults, sliceArray };
    },
  };
</script>

<template>
  <div
    v-if="search.length > 2"
    class="absolute z-50 w-64 mt-4 text-sm bg-gray-500 rounded dark:bg-gray-800 text-mywhite"
  >
    <ul v-if="searchResults.length">
      <li
        class="border-b border-gray-600 dark:border-gray-700"
        v-for="result in sliceArray(searchResults, 0, 7)"
        :key="result"
      >
        <router-link
          v-if="result.media_type == 'movie'"
          :to="{ name: 'MoviesShow', params: { id: result['id'] } }"
          class="flex items-center px-3 py-3 transition duration-150 ease-in-out hover:bg-gray-700"
        >
          <image-or-placeholder
            :result="result"
            my_key="poster_path"
            size="w45"
          />
          <span class="ml-4">{{ result["title"] }}</span>
        </router-link>
        <router-link
          v-else
          :to="{ name: 'TvShow', params: { id: result['id'] } }"
          class="flex items-center px-3 py-3 transition duration-150 ease-in-out hover:bg-gray-700"
        >
          <image-or-placeholder
            :result="result"
            my_key="poster_path"
            size="w45"
          />
          <span class="ml-4">{{ result["name"] }}</span>
        </router-link>
      </li>
    </ul>
    <div class="px-3 py-3" v-else>No results for "{{ search }}"</div>
  </div>
</template>

<style>
</style>
