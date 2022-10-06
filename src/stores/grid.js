import { defineStore } from 'pinia';
import db from '../firebase.ts';
import { collection, doc, getDocs, limit, setDoc } from 'firebase/firestore';
import { inject } from 'vue';
import grid_json from '../assets/json/grid.json';

export const useGridStore = defineStore('grid', () => {

  const $cookies = inject('$cookies');

  const getGames = async () => {
    await getDocs(collection(db, "games"));
  }

  async function newGame(){

    const json = JSON.parse(JSON.stringify(grid_json));
      const playerIDs = [];
    try {
      const players = await getDocs(collection(db, "queue"), limit(4));
      players.forEach((player) => {
        playerIDs.push(player.id)
      })

      await setDoc(doc(db, "games", $cookies.get("game-id")), {
        turn: 0,
        victory: false,
        grid: json,
        playerIDs: playerIDs,
      });
    }
    catch (e){
      console.error("Error creating new game: ", e);
    }

  }

  const grids = getGames();
  const symbols = ["Cross","Triangle","Circle","Square"];

  return { grids, symbols, newGame };

})
