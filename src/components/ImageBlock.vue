<template>
  <div class="image-block" @click="$emit('click')">
    <img :src="imageSrc" :alt="imageAlt" />
    <div class="text-block">
      <div class="column">
        <span>{{ description }}</span>
      </div>
      <div class="column">
        <span>Оцінка водія: {{ driverRating }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'Image',
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    driverRating() {
      return this.rating ? this.rating : 'Не оцінено';
    }
  }
};
</script>

<style scoped>
.image-block {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 200px;
  margin: 10px;
  cursor: pointer;
}

.image-block img {
  max-width: 100%;
  border-radius: 4px;
}

.text-block {
  display: flex;
  justify-content: space-between;
  text-align: left; /* Вирівнювання тексту по лівій стінці */
}

.column {
  flex: 1;
  margin: 8px;
  text-align: left; /* Вирівнювання тексту по лівій стінці */
}

.text-block span {
  font-size: 14px;
  color: #333;
}
</style>
