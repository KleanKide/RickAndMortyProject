<template>
  <div id="app">
    <AppNavbar />
    <AppSearchbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNavbar from "./components/header/Navbar.vue";
import { fetchCharacters } from "@/services/api";

export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
      characters: []
    };
  },
  async created() {
    try {
      const data = await fetchCharacters();
      this.characters = data.results;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss">
/* Ваши стили */
</style>
