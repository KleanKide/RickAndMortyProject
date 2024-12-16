<template>
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    <div v-else class="location-details">
      <h1>{{ location.name }}</h1>
      <p><strong>Type:</strong> {{ location.type }}</p>
      <p><strong>Dimension:</strong> {{ location.dimension }}</p>
      
      <h2>Residents in this location:</h2>
      <div class="residents-container">
        <div class="residents-list">
          <div class="resident-item" v-for="character in residents" :key="character.id" @click="goToCharacterDetails(character.id)">
            <img :src="character.image" alt="Character Image" class="resident-item-img" />
            <span>{{ character.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchLocationById, fetchDataByUrl } from '@/services/api';
  
  export default {
    data() {
      return {
        location: null,
        residents: [],
        loading: true,
        error: null,
      };
    },
    async created() {
      const locationId = this.$route.params.id;
      try {
        this.location = await fetchLocationById(locationId);
  
        // Получаем данные для каждого жителя
        const residentPromises = this.location.residents.map(url => fetchDataByUrl(url));
        this.residents = await Promise.all(residentPromises);
        
      } catch (error) {
        this.error = 'Failed to load location details. Please try again later.';
        console.error('Error fetching location details:', error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      goToCharacterDetails(characterId) {
        this.$router.push({ name: 'CharacterDetailsPage', params: { id: characterId } });
      }
    }
  };
  </script>
  
  <style scoped>
  .loading, .error {
    text-align: center;
    margin: 50px 0;
    color: white;
  }
  
  .location-details {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin: 100px auto;
  }
  
  .location-details h1, .location-details h2 {
    color: #333;
  }
  
  .residents-container {
    max-height: 500px; /* Задайте нужную высоту контейнера */
    overflow-y: auto; /* Добавляет вертикальный скролл при необходимости */
  }
  
  .residents-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 колонки */
    gap: 20px; /* Промежуток между элементами */
    padding: 0;
    margin: 0;
  }
  
  .resident-item {
    display: flex;
    flex-direction: column; /* Располагает изображение и текст вертикально */
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    cursor: pointer; /* Показать, что элемент кликабельный */
  }
  
  .resident-item-img {
    width: 100px; /* Размер изображения */
    height: 100px; /* Высота изображения */
    border-radius: 50%; /* Округляет изображение */
    object-fit: cover; /* Обрезает изображение по размеру */
    margin-bottom: 10px; /* Промежуток между изображением и текстом */
  }
  </style>
  