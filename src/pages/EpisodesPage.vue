<template>
  <div class="episodes">
    <h1>Last Episodes</h1>
    <div v-if="episodes.length " class="last-episodes">
      <EpisodeItem v-for="episode in episodes" 
      :key="episode.id" 
      :episode="episode" />
    </div>
  </div>
</template>

<script>
import { fetchEpisodes } from '@/services/api';
import EpisodeItem from '@/components/items/EpisodeItem.vue';

export default {
  components: {
    EpisodeItem
  },
  data() {
    return {
      episodes: []
    };
  },
  async created() {
    try {
      this.episodes = await fetchEpisodes();
    } catch (error) {
      console.error('Failed to load episodes:', error);
    }
  }
};
</script>

<style scoped>
.episodes h1{
  color:white;
  display: flex;
  justify-content: center;
  margin-top: 120px;
}
.last-episodes {
  display: flex;
  flex-wrap: wrap;  
  margin: 20px 100px;

}
</style>
