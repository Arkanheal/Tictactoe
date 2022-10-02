import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHQa_8-aAHLWWrUUAhGgqGlMywWrzLyrI",
  authDomain: "tictactoe-4m.firebaseapp.com",
  projectId: "tictactoe-4m",
  storageBucket: "tictactoe-4m.appspot.com",
  messagingSenderId: "401850299043",
  appId: "1:401850299043:web:37ddd0003572db42654516"
};
// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig));

export default db;
