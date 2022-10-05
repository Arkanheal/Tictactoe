import db from '../firebase.ts';
import { defineStore } from 'pinia';
import { useGridStore } from './grid.js';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
export const useQueueStore = defineStore('queue', () => {

  let userCookie = "";

  const addPlayerinQueue = async () => {
    try {
      await setDoc(doc(db, "queue", $cookies.get("user-session")), {
        date: Date.now(),
      });
    }
    catch (e){
      console.error("Error adding player to the queue: ", e);
    }
  }

  async function queueSize() {
    const queue = await getDocs(collection(db, "queue"));
    console.log()
    return queue.size;
  }

  function newArrival() {
    const queueSize = queueSize();
    const gridStore = useGridStore();

    if (!$cookies.isKey("user-session")){
      userCookie = Math.random().toString(36).substring(2, 9); 
      $cookies.set("user-session", userCookie, 0);
    } else {
      userCookie = $cookies.get("user-session");
    }

    if (queueSize < 4){
      addPlayerinQueue();
    } else {
      userCookie = $cookies.set("user-session", userCookie, "320s");
      gridStore.newGame();
    }

  }

  return { newArrival, queueSize };
});
