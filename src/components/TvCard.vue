<template>
  <div class="mt-8">
    <router-link :to="{ name: 'TvShow', params: { id: tvshow.id } }">
      <image-or-placeholder my_key="poster_path" :result="tvshow" size="w400" />
    </router-link>
    <div class="mt-2">
      <router-link
        :to="{ name: 'TvShow', params: { id: tvshow.id } }"
        class="mt-2 text-lg hover:text-gray-300"
        >{{ tvshow["name"] }}
      </router-link>
      <div class="flex items-center mt-1 text-sm text-gray-400">
        <svg class="w-4 fill-current text-myyellow" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <path
              d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
              data-name="star"
            />
          </g>
        </svg>
        <span class="ml-1">{{ tvshow["vote_average"] }}</span>
        <span class="mx-2">|</span>
        <span>{{ tvshow["first_air_date"] }}</span>
      </div>
      <div class="text-sm text-gray-400">{{ tvshow["genres"] }}</div>
    </div>
  </div>
</template>

<script>
  import ImageOrPlaceholder from "./ImageOrPlaceholder.vue";
  export default {
    components: { ImageOrPlaceholder },
    props: ["tvshow"],
  };
</script>

<style>
</style>
