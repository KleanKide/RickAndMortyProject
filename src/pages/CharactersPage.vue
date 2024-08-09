<template>
  <div class="characters-item">
    <CharacterItem 
    v-for="character in characters" 
    :key="character.id" 
    :character="character" />
  </div>
</template>

<script>
import { fetchCharacters } from '@/services/api';
import CharacterItem from '@/components/items/CharacterItem.vue';

export default {
  components: {
    CharacterItem
  },
  data() {
    return {
      characters: []
    };
  },
  async created() {
    try {
      this.characters = await fetchCharacters();
    } catch (error) {
      console.error('error', error);
    }
  }
};
</script>

<style scoped >
.characters-item {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 100px;
  justify-content: center;
  margin: 120px 0;
 
}
</style>
