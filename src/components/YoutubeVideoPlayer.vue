<script>
  export default {
    props: ["videoKey"],
    emits: ["hideVideo"],
  };
</script>

<template>
  <div
    class="fixed top-0 left-0 flex items-center w-full h-full overflow-y-auto shadow-lg "
  >
    <div class="container mx-auto overflow-y-auto rounded-lg lg:px-32">
      <div class="bg-gray-900 rounded" v-click-away="() => $emit('hideVideo')">
        <div class="flex justify-end pt-2 pr-4 mt-10">
          <button
            @click="$emit('hideVideo')"
            class="text-3xl leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div class="px-8 py-2 modal-body">
          <div
            class="relative overflow-hidden responsive-container"
            style="padding-top: 56.25%"
          >
            <iframe
              class="absolute top-0 left-0 w-full h-full responsive-iframe"
              :src="`https://www.youtube.com/embed/${videoKey}`"
              style="border: 0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
