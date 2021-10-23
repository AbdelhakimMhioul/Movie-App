<script>
  export default {
    props: ["movieCasts"],
    setup() {},
  };
</script>

<template>
  <div class="border-b border-gray-800">
    <div class="container px-4 py-16 mx-auto">
      <h2 class="text-4xl font-semibold">Cast</h2>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div class="mt-8" v-for="mvCasts in movieCasts" :key="mvCasts.id">
          <router-link :to="{ name: 'ActorsShow', params: { id: mvCasts.id } }">
            <img
              v-if="mvCasts.profile_path"
              :src="`https://image.tmdb.org/t/p/w500${mvCasts.profile_path}`"
              alt="Movie Cast"
              class="transition duration-150 ease-in-out hover:opacity-75"
            />
            <img
              v-else
              src="https://via.placeholder.com/300x450"
              alt="Movie Cast"
              class="transition duration-150 ease-in-out hover:opacity-75"
            />
          </router-link>
          <div class="mt-2">
            <a href="#" class="mt-2 text-lg hover:text-gray:300">{{
              mvCasts.original_name
            }}</a>
            <div class="text-sm text-gray-400">{{ mvCasts.character }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
