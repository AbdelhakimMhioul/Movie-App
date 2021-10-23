<script>
  import getPopularActors from "./composables/getPopularActors";
  import { onBeforeMount, onMounted } from "vue";
  import LoadingBar from "../LoadingBar.vue";
  import ImageOrPlaceholder from "../ImageOrPlaceholder.vue";

  export default {
    components: { LoadingBar, ImageOrPlaceholder },
    setup() {
      const { popularActors, loading, loadPopularActors } = getPopularActors();

      onBeforeMount(() => {
        loadPopularActors();
      });

      onMounted(() => {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            loading.value = true;
            loadPopularActors();
          }
        };
      });

      return { loading, popularActors };
    },
  };
</script>

<template>
  <div class="container px-4 py-10 mx-auto">
    <h2 class="text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow">
      Popular Actors
    </h2>
    <div
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div
        class="mt-8 actor"
        v-for="popularActor in popularActors"
        :key="popularActor.id"
      >
        <router-link
          :to="{ name: 'ActorsShow', params: { id: popularActor['id'] } }"
        >
          <image-or-placeholder
            :result="popularActor"
            size="w300"
            my_key="profile_path"
          />
        </router-link>
        <div class="mt-2">
          <router-link
            :to="{ name: 'ActorsShow', params: { id: popularActor['id'] } }"
            class="text-lg hover:text-gray-300"
            >{{ popularActor["name"] }}
          </router-link>
          <div class="text-sm text-gray-400">
            Popularity: {{ popularActor["popularity"] }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading"><loading-bar /></div>
  </div>
</template>
