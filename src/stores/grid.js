import db from '../firebase.ts';
import { defineStore } from 'pinia';
import { collection, doc, getDocs, limit, setDoc } from 'firebase/firestore';
import grid_json from '../assets/json/grid.json';

export const useGridStore = defineStore('grid', () => {

  const getGames = async () => {
    await getDocs(collection(db, "games"));
  }

  async function newGame(){

    const json = JSON.parse(JSON.stringify(grid_json));
    try {
      const players = await getDocs(collection(db, "queue"), limit(4));
      const playerIDs = [];
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
