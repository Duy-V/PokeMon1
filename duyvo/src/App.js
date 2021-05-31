import React, { Component } from "react";
import { Pokedex } from "./Pokedex";
import "./style.css";

const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
];

export default class App extends Component {
  calcTotalExp(arr) {
    return arr.reduce((cum, cur) => {
      return cum + cur.base_experience;
    }, 0);
  }
  render() {
    const pokemon1 = [...pokemon];
    const pokemon2 = [];
    while (pokemon1.length > pokemon2.length) {
      const randIdx = Math.floor(Math.random() * pokemon1.length);
      pokemon2.push(pokemon1[randIdx]);
      pokemon1.splice(randIdx, 1);
    }
    const total1 = this.calcTotalExp(pokemon1);
    const total2 = this.calcTotalExp(pokemon2);

    return (
      <div className="App">
        <Pokedex exp={total1} isWin={total1 > total2} pokemon={pokemon1} />
        <Pokedex exp={total2} isWin={total2 > total1} pokemon={pokemon2} />
      </div>
    );
  }
}
