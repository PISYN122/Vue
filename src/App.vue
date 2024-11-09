<template>
  <div id="app">
    <!-- Хедер з пошуком -->
    <AppHeader @search="handleSearch" />

    <!-- Кнопка для відкриття адмін панелі -->
    <button @click="openAdminPanel">Відкрити Адмін Панель</button>

    <!-- Контейнер для блоків з фото -->
    <div class="image-blocks-container">
      <!-- Динамічно генеруємо блоки, залежно від фільтрованих даних -->
      <ImageBlock
        v-for="(block, index) in filteredBlocks"
        :key="index"
        :imageSrc="block.imageSrc"
        :imageAlt="block.imageAlt"
        :description="block.description"
        :rating="block.driver_rating"
        @click="openModal(block)"
      />
    </div>

    <!-- Викликаємо ImageView компонент для модального вікна -->
    <ImageView v-if="isModalOpen" :block="modalContent" @close="closeModal" />

    <!-- Викликаємо AdminPanel компонент для модального вікна -->
    <AdminPanel :isAdminPanelOpen="isAdminPanelOpen" @close="closeAdminPanel" />

    <!-- Якщо дані ще не завантажено -->
    <div v-if="isLoading" class="loading">
      Завантаження даних...
    </div>

    <!-- Футер -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';  
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import ImageBlock from './components/ImageBlock.vue';
import ImageView from './components/ImageView.vue';
import AdminPanel from './components/AdminPanel.vue';
import AppFooter from './components/AppFooter.vue';

const firebaseConfig = {
  apiKey: "AIzaSyCqd9o3t6PsUVX6BC4TZ79BUgkoa7HZPJs",
  authDomain: "projectvuedb-6d005.firebaseapp.com",
  projectId: "projectvuedb-6d005",
  storageBucket: "projectvuedb-6d005.firebasestorage.app",
  messagingSenderId: "85293578380",
  appId: "1:85293578380:web:ed0c76faa5ec0877f623a9"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default {
  name: 'App',
  components: {
    AppHeader,
    ImageBlock,
    ImageView,
    AdminPanel,
    AppFooter
  },
  data() {
    return {
      blocks: [],  // Оригінальний масив блоків
      filteredBlocks: [],  // Масив для фільтрованих блоків
      searchQuery: '',  // Змінна для пошуку
      isModalOpen: false,
      modalContent: {},
      isAdminPanelOpen: false, // Відкриття адмін панелі
      isLoading: false // Статус завантаження
    };
  },
  async mounted() {
    this.isLoading = true; // Починаємо завантаження
    await this.fetchTrips();
    this.isLoading = false; // Завантаження завершено
  },
  methods: {
    async fetchTrips() {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'trips'));
        this.blocks = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            imageSrc: data.imgBus,
            imageAlt: `Зображення рейсу ${data.num_reys}`,
            description: `Рейс №${data.num_reys}: з ${data.zvidki_pryruye} до ${data.kudy_pryruye}, Водій: ${data.bus_driver}`,
            driver_rating: data.driver_rating || 'Не оцінено',
            num_reys: data.num_reys,
            bus_driver: data.bus_driver,
            zvidki_pryruye: data.zvidki_pryruye,
            kudy_pryruye: data.kudy_pryruye,
            time_to_start: data.time_to_start.toDate().toLocaleString(),
            time_to_finish: data.time_to_finish.toDate().toLocaleString(),
            price: data.price,
          };
        });
        this.filteredBlocks = [...this.blocks]; // Спочатку всі блоки доступні
      } catch (error) {
        console.error('Помилка при отриманні документів з Firestore:', error.message);
        alert("Помилка при завантаженні даних!");
      }
    },
    handleSearch(query) {
      this.searchQuery = query; // Оновлюємо запит пошуку
      this.filterBlocks(); // Оновлюємо відфільтровані блоки
    },
    filterBlocks() {
      if (this.searchQuery.trim()) {
        this.filteredBlocks = this.blocks.filter(block => {
          // Фільтруємо блоки за допомогою пошукового запиту
          return (
            block.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            block.bus_driver.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            block.zvidki_pryruye.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            block.kudy_pryruye.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        });
      } else {
        // Якщо немає запиту, показуємо всі блоки
        this.filteredBlocks = [...this.blocks];
      }
    },
    openModal(block) {
      this.modalContent = block;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    openAdminPanel() {
      this.isAdminPanelOpen = true; // Відкриваємо адмін панель
    },
    closeAdminPanel() {
      this.isAdminPanelOpen = false; // Закриваємо адмін панель
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
}

/* Стиль для кнопки */
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

/* Контейнер для блоків з фото */
.image-blocks-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

/* Стиль для блоку з зображенням */
.image-block {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-block:hover {
  transform: scale(1.05);
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

/* Стиль для модального вікна */
.loading {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 20px;
}
</style>