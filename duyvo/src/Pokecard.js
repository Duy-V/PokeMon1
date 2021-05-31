import React, { Component } from "react";
import "./Pokecard.css";

export default class Pokecard extends Component {
  render() {
    const { name, type, base, id } = this.props;
    return (
      <div className="pokemon">
        <div className="pokemon-img">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
        </div>
        <div className="pokemon-name">{name}</div>

        <div className="pokemon-type">{type}</div>
        <div className="pokemon-base">{base}</div>
      </div>
    );
  }
}
