import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFDhLwif3W2s3BO3fC6bSJ00BVGxZDHfg",
  authDomain: "buseng.firebaseapp.com",
  projectId: "buseng",
  storageBucket: "buseng.firebasestorage.app",
  messagingSenderId: "193028228636",
  appId: "1:193028228636:web:4a86fa939592e7a1eb41d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };