<script>
  export default {
    props: ["images"],
    setup() {},
  };
</script>

<template>
  <div class="movie-images">
    <div class="container px-4 py-10 mx-auto">
      <h2 class="mb-10 text-4xl font-semibold">Images</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div class="mt-2" v-for="image in images" :key="image.file_path">
          <a href="#">
            <img
              :src="`https://image.tmdb.org/t/p/w500${image.file_path}`"
              alt="Movie Images"
              class="transition duration-150 ease-in-out hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
