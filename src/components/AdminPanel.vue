<template>
    <div v-if="isAdminPanelOpen" class="modal-overlay" @click.self="closePanel">
      <div class="admin-panel">
        <h2>Додати новий рейс</h2>
        <form @submit.prevent="addTrip">
          <div>
            <label for="num_reys">Номер рейсу:</label>
            <input v-model="newTrip.num_reys" type="text" id="num_reys" required />
          </div>
          <div>
            <label for="bus_driver">Водій:</label>
            <input v-model="newTrip.bus_driver" type="text" id="bus_driver" required />
          </div>
          <div>
            <label for="zvidki_pryruye">Звідки:</label>
            <input v-model="newTrip.zvidki_pryruye" type="text" id="zvidki_pryruye" required />
          </div>
          <div>
            <label for="kudy_pryruye">Куди:</label>
            <input v-model="newTrip.kudy_pryruye" type="text" id="kudy_pryruye" required />
          </div>
          <div>
            <label for="imgBus">Посилання на зображення:</label>
            <input v-model="newTrip.imgBus" type="url" id="imgBus" required />
          </div>
          <div>
            <label for="driver_rating">Оцінка водія:</label>
            <input v-model="newTrip.driver_rating" type="number" id="driver_rating" min="1" max="10" required />
          </div>
          <div>
            <label for="price">Ціна:</label>
            <input v-model="newTrip.price" type="number" id="price" required />
          </div>
          <div>
            <label for="time_to_start">Час відправлення:</label>
            <input v-model="newTrip.time_to_start" type="datetime-local" id="time_to_start" required />
          </div>
          <div>
            <label for="time_to_finish">Час прибуття:</label>
            <input v-model="newTrip.time_to_finish" type="datetime-local" id="time_to_finish" required />
          </div>
          <button type="submit">Додати рейс</button>
        </form>
        <button @click="closePanel">Закрити</button>
      </div>
    </div>
  </template>
  <script>
  import { getFirestore, collection, addDoc } from 'firebase/firestore';
  import { getApp } from 'firebase/app';
  
  export default {
    name: 'AdminPanel',
    props: {
      isAdminPanelOpen: {
        type: Boolean,
        required: true,
      },
      closePanel: {
        type: Function,
        required: true,
      }
    },
    data() {
      return {
        newTrip: {
          num_reys: '',
          bus_driver: '',
          zvidki_pryruye: '',
          kudy_pryruye: '',
          imgBus: '',
          driver_rating: 5,
          price: 0,
          time_to_start: '',
          time_to_finish: '',
        },
      };
    },
    methods: {
      async addTrip() {
        try {
          const app = getApp();
          const firestore = getFirestore(app);
  
          // Перетворення часу в timestamp
          const startTime = new Date(this.newTrip.time_to_start).getTime();
          const finishTime = new Date(this.newTrip.time_to_finish).getTime();
  
          // Формуємо нові дані для рейсу
          const tripData = {
            ...this.newTrip,
            time_to_start: new Date(startTime),
            time_to_finish: new Date(finishTime),
          };
  
          const docRef = await addDoc(collection(firestore, 'trips'), tripData);
          console.log('Документ успішно додано, ID:', docRef.id);
          
          // Очищення форми після додавання
          this.newTrip = {
            num_reys: '',
            bus_driver: '',
            zvidki_pryruye: '',
            kudy_pryruye: '',
            imgBus: '',
            driver_rating: 5,
            price: 0,
            time_to_start: '',
            time_to_finish: '',
          };
        } catch (error) {
          console.error('Помилка при додаванні документа:', error.message);
        }
      },
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
  
  .admin-panel {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    text-align: left;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  label {
    font-size: 14px;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:focus {
    outline: none;
  }
  
  button:last-of-type {
    background-color: #f44336;
  }
  </style>
  