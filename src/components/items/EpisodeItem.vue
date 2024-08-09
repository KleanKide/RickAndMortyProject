<template>
    <div @click="goToEpisodeDetails" class="episode-item">
      <h2>{{ episode.name }}</h2>
      <span>The air date of the episode:</span>
      <p>{{ episode.air_date }}</p>
    </div>
  </template>
  
  <script>
export default {
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToEpisodeDetails() {
      this.$router.push({ name: 'EpisodeDetails', params: { id: this.episode.id } });
    }
  }
};
</script>
  
  <style >
   .episode-item {
  display: flex;
  flex-direction: column;
  background-color: rgba(252, 252, 252, 0.321);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  color: white;
  cursor: pointer;
}

.episode-item span{
  margin: 15px 0 0 0;
  color: #433f3f;
} 

.episode-item p {
  
  color: #ffffff;
}

.episode-item span {
  font-weight: bold;
}
  </style>
  