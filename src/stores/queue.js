import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useQueueStore = defineStore('queue', () => {

  function checkQueue(){
    if (this.users.length >= 4) {
      const gameId = "";
      gameId = this.users.slice(0,3).forEach(element => {
        gameId += element
      });
      $cookies.set("game-id", gameId, "320s");
      // I kinda don't like this but sets duration for the game
      // vue-cookie doesn't have an API to just change the duration
      $cookies.set("user-session", $cookies.get("user-session"), "320s");
    }
  }

  function newArrival(){
    // Duration is session while we wait in queue
    $cookies.set("user-session", Math.random().toString(36).substring(2, 9), 0);
    this.users.push($cookies.get("user-session"));
    this.checkQueue();
  }

  let users = ref(localStorage.setItem('users', []));

  return { users, newArrival, checkQueue };
});
