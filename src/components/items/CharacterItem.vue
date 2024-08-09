<!-- src/components/items/CharacterItem.vue -->
<template>
  <div class="character-item" @click="goToDetails">
    <img :src="character.image" alt="Character Image" class="character-item-img" />
    <div class="character-item-desc">
      <h3>{{ character.name }}</h3>
      <p><span>Last known location:</span></p>
      <span class="location">{{ character.location.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: 'CharacterDetailsPage', params: { id: this.character.id } });
    }
  }
};
</script>

<style scoped>
.character-item {
  cursor: pointer;
  display: flex;
  background-color: rgba(252, 252, 252, 0.321);
  border-radius: 10px;
  width: 350px;
 
}

.character-item-img {
  width: 150px;
  border-radius: 10px;
}

.character-item-desc h3 {
  color: white;
  font-size: 23px;
}

.character-item-desc {
  margin: 20px 0 0 15px;
}

.character-item-desc p {
  margin: 5px 0;
  color: rgba(33, 32, 32, 0.829);
}

.character-item-desc .location {
  color: rgb(255, 255, 255);
}
</style>
