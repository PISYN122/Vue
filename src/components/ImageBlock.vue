<template>
  <div class="image-block" @click="$emit('click')">
    <img :src="imageSrc" :alt="imageAlt" />
    <p>{{ description }}</p>

    <!-- Статична оцінка водія -->
    <div>
      <span>Оцінка водія: {{ driverRating }}</span>
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
    // Оцінка водія буде відображатися лише для перегляду
    driverRating() {
      return this.rating ? this.rating : 'Не оцінено';  // Якщо оцінки немає, показуємо "Не оцінено"
    }
  }
};
</script>

<style scoped>
.image-block {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 200px;
  margin: 10px;
  cursor: pointer;
}

.image-block img {
  max-width: 100%;
  border-radius: 4px;
}

.image-block p {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
</style>