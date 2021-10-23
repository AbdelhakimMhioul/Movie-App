<template>
  <img
    :src="`https://image.tmdb.org/t/p/${size}${result.poster_path}`"
    alt="poster"
    class="transition ease-in-out duration-400 hover:opacity-80"
    v-if="size != 'w45' && result.poster_path && my_key == 'poster_path'"
  />
  <img
    :src="`https://image.tmdb.org/t/p/${size}${result.profile_path}`"
    alt="poster"
    class="transition ease-in-out duration-400 hover:opacity-80"
    v-if="result.profile_path && my_key == 'profile_path'"
  />
  <img
    v-if="size == 'w45' && my_key == 'poster_path' && !result.poster_path"
    src="https://via.placeholder.com/50x75"
    alt="poster"
  />
  <img
    :src="`https://image.tmdb.org/t/p/${size}${result.poster_path}`"
    alt="poster"
    class="transition ease-in-out duration-400 hover:opacity-80"
    v-if="size == 'w45' && result.poster_path && my_key == 'poster_path'"
  />
  <img
    v-if="size != 'w45' && my_key == 'poster_path' && !result.poster_path"
    src="https://via.placeholder.com/200x300"
    alt="poster"
  />
  <img
    v-if="my_key == 'profile_path' && !result.profile_path"
    src="https://via.placeholder.com/240x360"
    alt="poster"
  />
</template>

<script>
  export default {
    props: ["result", "size", "my_key"],
  };
</script>
