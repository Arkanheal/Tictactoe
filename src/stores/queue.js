import db from '../firebase.ts';
import { defineStore } from 'pinia';
import { useGridStore } from './grid.js';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { inject } from 'vue';

export const useQueueStore = defineStore('queue', () => {

  const $cookies = inject('$cookies');

  const addPlayerinQueue = async (userId) => {
    try {

      await setDoc(doc(db, "queue", userId), {
        date: Date.now(),
      });

    }
    catch (e){
      console.error("Error adding player to the queue: ", e);
    }
  }

  const removePlayerFromQueue = async (userId) => {
    try {
      await deleteDoc(doc(db, "queue", userId));
    }
    catch (e){
      console.error("Error removing player from the queue: ", e);
    }
  }

  async function queueSize() {
    const queue = await getDocs(collection(db, "queue"));
    return queue.size;
  }

  async function newArrival() {
    const queueSize = await this.queueSize();
    const gridStore = useGridStore();
    let userCookie = "";

    if (!$cookies.isKey("user-session")){
      userCookie = Math.random().toString(36).substring(2, 9); 
      $cookies.set("user-session", userCookie, -1);
    }

    userCookie = $cookies.get("user-session");

    if (queueSize < 4) {
      addPlayerinQueue(userCookie);
    } else {
      console.log(queueSize);
      $cookies.set("user-session", userCookie, "320s");
      removePlayerFromQueue(userCookie);
      gridStore.newGame();
    }

  }

  return { newArrival, queueSize };
});
