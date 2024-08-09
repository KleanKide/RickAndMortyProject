
<template>
  <div v-if="loading" class="loading-message">
    <p>Loading character details...</p>
  </div>
  <div v-else-if="error" class="error-message">
    <p>{{ error }}</p>
  </div>
  <div v-else class="character-details">
    <h1>{{ character.name }}</h1>
    <img :src="character.image" alt="Character Image" class="character-image" />
    <p><strong class="details-strong">Status:</strong> {{ character.status }}</p>
    <p><strong class="details-strong">Species:</strong> {{ character.species }}</p>
    <p><strong class="details-strong">Gender:</strong> {{ character.gender }}</p>
    <p><strong class="details-strong">Location:</strong> {{ character.location.name }}</p>
    <p><strong class="details-strong">Origin:</strong> {{ character.origin.name }}</p>
  </div>
</template>

<script>
import { fetchCharacterById } from '@/services/api';

export default {
  props: ['id'],
  data() {
    return {
      character: null,
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      this.character = await fetchCharacterById(this.id);
    } catch (error) {
      this.error = 'Failed to load character details. Please try again later.';
      console.error('Error fetching character details:', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style>
.character-details {
  text-align: center;
  margin: 120px 0;
  color: white;
}

.character-image {
  width: 200px;
  border-radius: 10px;
}

.character-details p {
  margin: 10px 0;
  color:white
}



.loading-message,
.error-message {
  text-align: center;
  color: white;
}
</style>
