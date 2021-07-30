import "./App.css";
import React from "react";
// import { Component } from "react";
import { render } from "react-dom";
import Board from './Board'
import Game from './Game'

let game = new Game()

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>{game.message}</h1>
        <Board game={game} ></Board>
      </div>
    );
  }
}

export default App;

/*
1. hacer una clase box
2. Hacer una clase board que contenga tres hileras y por cada hilera tres boxes
3. Hacer una clase Game
4. Cuando se inicia la página se va a hacer una instancia de la clase Game
5. Al generar cada componente le pasamos la instancia Game para que este en la función Square sea un prop y pasárselo
a al parámetro de la función del botón, al igual que se pasará como prop la instancia Box
6. Cuando se selecciona una casilla, se llama al método set selected de la instancia Box que se pasó como prop 
*/
