import { defineStore } from 'pinia';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import grid_json from '../assets/json/grid.json';

export const useGridStore = defineStore('grid', () => {

  const addGame = async () => {
    const json = JSON.parse(JSON.stringify(grid_json));
    try {
      await addDoc(collection(db, "games"), {
        id: $cookies.get("gameId"),
        turn: 0,
        victory: false,
        grid: json
      });
    }
    catch (e){
      console.error("Error creating new game: ", e);
    }
  }

  const getGames = async () => {
    await getDocs(collection(db, "games"));
  }

  function newGame(){
    addGame();
  }

  const grids = getGames();
  const symbols = ["Cross","Triangle","Circle","Square"];

  return { grids, symbols, newGame };

})
