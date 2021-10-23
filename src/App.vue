<template>
  <Navbar />
  <transition :key="key">
    <router-view></router-view>
  </transition>
  <Footer />
</template>

<script>
  import Footer from "./partials/Footer.vue";
  import Navbar from "./partials/Navbar.vue";

  import { computed } from "vue";
  import { useRoute } from "vue-router";

  export default {
    components: {
      Navbar,
      Footer,
    },
    setup() {
      const route = useRoute();
      const key = computed(() => {
        return route.params.id ? route.name + "/" + route.params.id : route.name;
      });

      return { key };
    },
  };
</script>
