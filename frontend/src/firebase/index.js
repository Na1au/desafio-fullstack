import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqhqCgHSnQShTSg_y98eHwk4-Iho0SXyo",
  authDomain: "desafio-huggy.firebaseapp.com",
  projectId: "desafio-huggy",
  storageBucket: "desafio-huggy.appspot.com",
  messagingSenderId: "775753654751",
  appId: "1:775753654751:web:46de09f04ba3756231246a"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { analytics, auth, db }