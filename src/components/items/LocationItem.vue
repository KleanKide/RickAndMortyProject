<template>
  <div class="location-item" @click="goToDetails">
    <h3>{{ location.name }}</h3>
    <p><strong>Type:</strong> {{ location.type }}</p>
    <p><strong>Dimension:</strong> {{ location.dimension }}</p>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: 'LocationDetailsPage', params: { id: this.location.id } });
    }
  }
};
</script>

<style>
.location-item {
  display: flex;
  flex-direction: column;
  background-color: rgba(252, 252, 252, 0.321);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  cursor: pointer;

}

.location-item h3 {
  margin: 0;
  color: #f3f1f1;
 
}

.location-item p {
  margin: 5px 0;
  color: #433f3f;
}

.location-item span {
  font-weight: bold;
  color: black;
}
</style>
