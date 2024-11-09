<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Деталі рейсу</h2>
        <img :src="block.imageSrc" :alt="block.imageAlt" class="modal-image" />
        <p><strong>Рейс №:</strong> {{ block.num_reys }}</p>
        <p><strong>Водій:</strong> {{ block.bus_driver }}</p>
        <p><strong>Оцінка водія:</strong> {{ block.driver_rating }}</p> <!-- Відображення оцінки водія -->
        <p><strong>Маршрут:</strong> З {{ block.zvidki_pryruye }} до {{ block.kudy_pryruye }}</p>
        <p><strong>Час початку:</strong> {{ block.time_to_start }}</p>
        <p><strong>Час закінчення:</strong> {{ block.time_to_finish }}</p>
        <p><strong>Ціна:</strong> {{ block.price }} грн</p> <!-- Виведення ціни -->
        <button @click="closeModal">Закрити</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageView',
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    text-align: left;
  }
  
  .modal-image {
    max-width: 100%;
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>