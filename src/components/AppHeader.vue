<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <!-- Логотип або назва сайту -->
        <div class="col-lg-3 col-md-4 col-12">
          <h1 class="site-title">Ваш сайт</h1>
        </div>

        <!-- Поле пошуку -->
        <div class="col-lg-6 col-md-8 col-12">
          <div class="search-bar">
            <input
              type="text"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              class="search-input"
              placeholder="Пошук..."
            />
            
          </div>
        </div>

        <!-- Інші елементи, наприклад, кнопки або іконки -->
        <div class="col-lg-3 col-md-12 col-12 text-end">
          <button @click="handleSearch" class="search-button">
              <em class="fas fa-search"></em>
              Пошук
            </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// Імпорт Firebase та Firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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
  name: "AppHeader",
  data() {
    return {
      searchQuery: "", // Змінна для зберігання запиту пошуку
      searchResults: [] // Зберігаємо результати пошуку
    };
  },
  methods: {
    async handleSearch() {
      if (this.searchQuery.trim()) {
        console.log("Шукаємо по всіх полях для: ", this.searchQuery);

        try {
          const tripsRef = collection(firestore, 'trips');
          const querySnapshot = await getDocs(tripsRef);
          const results = [];

          querySnapshot.forEach(doc => {
            const data = doc.data();
            // Перевірка всіх полів документа на наявність запиту пошуку
            const fields = Object.values(data);
            for (let field of fields) {
              if (field && field.toString().toLowerCase().includes(this.searchQuery.toLowerCase())) {
                results.push(data);
                break; // Перериваємо цикл, якщо знайдений хоча б один збіг
              }
            }
          });

          this.searchResults = results;
          console.log("Результати пошуку: ", this.searchResults);
        } catch (error) {
          console.error("Помилка при пошуку в Firestore: ", error);
        }
      }
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #343a40;
  padding: 20px 0;
}

.header .container {
  max-width: 1200px;
}

.header .site-title {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.search-input:focus,
.search-button:focus {
  outline: none;
}

@media (max-width: 767px) {
  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-input {
    margin-bottom: 10px;
  }
}
</style>