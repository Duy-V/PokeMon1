import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export class Pokedex extends Component {
  render() {
    return (
      <div className="container">
        <h3>Pokedex</h3>
        <h4> {this.props.isWin ? "Win" : "Lose"} </h4>
        <h4> Total Exp : {this.props.exp} </h4>
        <div className="card">
          {this.props.pokemon.map((poke) => (
            <Pokecard
              key={poke.id}
              name={poke.name}
              type={poke.type}
              base={poke.base_experience}
              id={poke.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
