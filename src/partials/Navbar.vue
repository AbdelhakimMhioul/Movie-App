<script>
  import SearchDropdown from "./SearchDropdown.vue";
  import { onBeforeMount, onUpdated, ref, watch } from "vue";

  export default {
    components: { SearchDropdown },
    setup() {
      const search = ref("");
      const searchbar = ref(null);
      const isOpen = ref(false);
      const checked = ref();

      watch(checked, () => {
        if ("theme" in localStorage) {
          localStorage.theme = checked.value ? "dark" : "light";
        }
      });

      function hideDropdown() {
        isOpen.value = false;
      }

      function showDropdown() {
        isOpen.value = true;
      }

      watch(search, () => {
        isOpen.value = true;
      });

      onBeforeMount(() => {
        checked.value = localStorage.theme === "dark" ? true : false;
        window.addEventListener("keydown", (e) => {
          if (e.key === " " && e.ctrlKey) {
            searchbar.value.focus();
          }
        });
      });

      const updatePage = () => {
        location.reload();
      };

      return {
        search,
        searchbar,
        isOpen,
        hideDropdown,
        showDropdown,
        checked,
        updatePage,
      };
    },
  };
</script>

<template>
  <nav class="border-b border-gray-800">
    <div
      class="container flex flex-col items-center justify-between px-4 py-6 mx-auto md:flex-row"
    >
      <ul class="flex flex-col items-center md:flex-row">
        <li>
          <router-link to="/" class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <span>Home</span>
          </router-link>
        </li>
        <li class="mt-3 md:ml-16 md:mt-0">
          <router-link :to="{ name: 'MoviesIndex' }">Movies</router-link>
        </li>
        <li class="mt-3 md:ml-6 md:mt-0">
          <router-link :to="{ name: 'ActorsIndex' }">Actors</router-link>
        </li>
        <li class="mt-3 md:ml-6 md:mt-0">
          <router-link :to="{ name: 'TvIndex' }">Tv Shows</router-link>
        </li>
      </ul>
      <div class="flex flex-col items-center md:flex-row">
        <div
          class="relative mt-3 md:mt-0"
          v-click-away="hideDropdown"
          @keydown.esc="hideDropdown"
        >
          <input
            id="search"
            ref="searchbar"
            v-model="search"
            type="text"
            class="w-64 px-4 py-3 pl-12 text-sm text-gray-200 transition duration-200 ease-in-out bg-gray-600 rounded-full focus:outline-none focus:shadow-outline focus:bg-gray-700 hover:bg-gray-700"
            placeholder="Search ( Tap Ctrl+Space )"
            @focus="showDropdown"
            autofocus
          />
          <div class="absolute top-0">
            <svg
              class="w-5 mt-3 ml-4 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </div>
          <div
            class="absolute top-0 right-0 cursor-pointer"
            v-if="search"
            @click="search = ''"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 mt-3 mr-4 text-gray-200 fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <search-dropdown :search="search" v-show="isOpen" />
        </div>
        <div class="mt-3 md:ml-4 md:mt-0">
          <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="toogleA"
                type="checkbox"
                class="sr-only"
                v-model="checked"
                @change="updatePage"
              />
              <!-- line -->
              <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <!-- dot -->
              <div
                class="absolute w-6 h-6 transition bg-white rounded-full shadow dot -left-1 -top-1"
              ></div>
            </div>
            <!-- label -->
            <div class="ml-3 font-medium text-gray-700 dark:text-gray-300">
              <span v-if="checked">Dark</span>
              <span v-else>Light</span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <hr class="border-1 border-myyellow" />
  </nav>
</template>
