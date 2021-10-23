<script>
  import { onMounted, ref } from "vue";
  import getTv from "./composables/getTv";
  import formatDate from "../../composables/formatDate";
  import sliceArray from "../../composables/sliceArray";
  import pluckArray from "../../composables/pluckArray";
  import YoutubeVideoPlayer from "../YoutubeVideoPlayer.vue";
  import Images from "../Images.vue";
  import ImageOrPlaceholder from "../ImageOrPlaceholder.vue";

  export default {
    components: { YoutubeVideoPlayer, Images, ImageOrPlaceholder },
    props: ["id"],
    setup(props) {
      const { tvshow, tvshowCredits, tvVideoKey, tvImages, loadTv } = getTv();
      const isOpenVideo = ref(false);

      onMounted(() => {
        loadTv(props.id);
      });

      return {
        tvshow,
        tvshowCredits,
        tvVideoKey,
        tvImages,
        isOpenVideo,
        pluckArray,
        sliceArray,
        formatDate,
      };
    },
  };
</script>

<template>
  <div
    class="border-b border-gray-800 tv-info"
    @keydown.esc="isOpenVideo = false"
  >
    <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
      <div class="flex-none">
        <image-or-placeholder
          :result="tvshow"
          my_key="poster_path"
          size="w400"
        />
      </div>
      <div class="md:ml-24">
        <h2 class="mt-4 text-4xl font-semibold md:mt-0">
          {{ tvshow["name"] }}
        </h2>
        <div class="flex flex-wrap items-center text-sm text-gray-400">
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
          <span>{{ formatDate(tvshow["first_air_date"]) }}</span>
          <span class="mx-2">|</span>
          <span>{{ pluckArray(tvshow["genres"], "name") }}</span>
        </div>

        <p class="mt-8 text-gray-300">
          {{ tvshow["overview"] }}
        </p>

        <div class="mt-12">
          <div class="flex mt-4">
            <div
              class="mr-8"
              v-for="crew in tvshow['created_by']"
              :key="crew.id"
            >
              <div>{{ crew["name"] }}</div>
              <div class="text-sm text-gray-400">{{ crew["job"] }}</div>
            </div>
          </div>
        </div>

        <div>
          <div class="mt-12">
            <button
              @click="isOpenVideo = true"
              class="inline-flex items-center px-5 py-4 font-semibold text-gray-900 transition duration-150 ease-in-out rounded bg-myyellow hover:opacity-70"
            >
              <svg class="w-6 fill-current" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
              <span class="ml-2">Play Trailer</span>
            </button>
          </div>
          <div v-show="isOpenVideo">
            <youtube-video-player
              @hideVideo="isOpenVideo = false"
              :videoKey="tvVideoKey"
              v-if="isOpenVideo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-b border-gray-800 tv-cast">
    <div class="container px-4 py-16 mx-auto">
      <h2 class="text-4xl font-semibold">Cast</h2>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div
          class="mt-8"
          v-for="cast in sliceArray(tvshowCredits.cast, 0, 5)"
          :key="cast.id"
        >
          <router-link :to="{ name: 'ActorsShow', params: { id: cast['id'] } }">
            <image-or-placeholder
              my_key="profile_path"
              :result="cast"
              size="w200"
            />
          </router-link>
          <div class="mt-2">
            <router-link
              :to="{ name: 'ActorsShow', params: { id: cast['id'] } }"
              class="mt-2 text-lg hover:text-gray:300"
            >
              {{ cast["name"] }}
            </router-link>
            <div class="text-sm text-gray-400">
              {{ cast["character"] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <images :images="tvImages" />
  <!-- end tv-images -->
</template>

<style>
</style>
