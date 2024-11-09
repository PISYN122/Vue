import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqd9o3t6PsUVX6BC4TZ79BUgkoa7HZPJs",
  authDomain: "projectvuedb-6d005.firebaseapp.com",
  projectId: "projectvuedb-6d005",
  storageBucket: "projectvuedb-6d005.firebasestorage.app",
  messagingSenderId: "85293578380",
  appId: "1:85293578380:web:ed0c76faa5ec0877f623a9"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);  // Тепер використовуємо змінну app
const firestore = getFirestore(app);  // Передаємо app для налаштування firestore

export { firestore };