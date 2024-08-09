<template>
    <div v-if="loading" class="loading">
      <p>Loading episode details...</p>
    </div>
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    <div v-else class="episode-details">
      <h1>{{ episode.name }}</h1>
      <p><strong>Episode:</strong> {{ episode.episode }}</p>
      <p><strong>Air Date:</strong> {{ episode.air_date }}</p>
  
      <h2>Characters in this episode:</h2>
      <div class="characters-container">
        <div class="characters-list">
          <div class="characters-item" v-for="character in characters" :key="character.id" @click="goToDetails(character.id)">
            <img :src="character.image" alt="Character Image" class="character-item-img" />
            <span>{{ character.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import { fetchEpisodeById, fetchDataByUrl } from '@/services/api';

export default {
  data() {
    return {
      episode: null,
      characters: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    const episodeId = this.$route.params.id;
    try {
      this.episode = await fetchEpisodeById(episodeId);

      // Получаем данные для каждого персонажа
      const characterPromises = this.episode.characters.map(url => fetchDataByUrl(url));
      this.characters = await Promise.all(characterPromises);
      
    } catch (error) {
      this.error = 'Failed to load episode details. Please try again later.';
      console.error('Error fetching episode details:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    goToDetails(characterId) {
      this.$router.push({ name: 'CharacterDetailsPage', params: { id: characterId } });
    }
  }
};
  </script>
  
  <style scoped>
  .loading, .error {
  text-align: center;
  margin: 50px 0;
}

.episode-details {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 100px auto;
}

.episode-details h1, .episode-details h2 {
  color: #333;
}
.episode-details h2{
    margin-top: 50px;
}
.characters-container {
  overflow-y: auto; /* Добавляет вертикальный скролл при необходимости */
}

.characters-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  padding: 50px;
  margin: 0;
  
}

.characters-item {
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  
}

.character-item-img {
 width: 50%;
 border-radius: 50%;

}

  </style>
  