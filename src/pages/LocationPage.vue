<!-- src/pages/LocationsPage.vue -->
<template>
       
  <div class="locations-page">
    <h1>Locations</h1>
    <div class="location-card">
    <LocationItem 
      v-for="location in locations" 
      :key="location.id" 
      :location="location" />
    </div>
  </div>
</template>

<script>
import { fetchLocations } from '@/services/api';
import LocationItem from '@/components/items/LocationItem.vue';

export default {
  components: {
    LocationItem
  },
  data() {
    return {
      locations: []
    };
  },
  async created() {
    try {
      this.locations = await fetchLocations();
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  }
};
</script>

<style scoped>
.location-card {
  display: flex;
  flex-wrap: wrap;  
  margin: 20px 100px;
  gap: 20px;

}
.locations-page h1{
  color:white;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  
}
</style>
