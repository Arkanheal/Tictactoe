import { defineStore } from 'pinia';
import { addDoc, collection } from 'firebase/firestore';
import grid_json from '../assets/json/grid.json';

export const useGridStore = defineStore('grid', () => {

  function newGame(){
    const json = JSON.parse(JSON.stringify(grid_json));
    try{
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

  const grids = await getDocs(collection(db, "games"));
  const symbols = ["Cross","Triangle","Circle","Square"];

  return { turn, grids, symbols, newGame };

})
