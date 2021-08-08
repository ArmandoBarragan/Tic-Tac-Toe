import "./App.css";
import React from "react";
// import { Component } from "react";
import { render } from "react-dom";
import { Board } from "./Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.crossTurn = false; //First the circle, then the cross
    this.turnsLeft = 9;
    this.playable = true;
    this.state = {
      message: "Tic Tac Toe!",
      board: <Board game={this}/>
    }
  }
  endTurn() {
    this.turnsLeft--;
    console.log(this.turnsLeft)
    if (this.turnsLeft === 0) {
      this.finishGame("");
    } else {
      if (this.crossTurn) {
        this.crossTurn = false;
      } else {
        this.crossTurn = true;
      }
    }
  }
  finishGame(winner) {
    let message;
    if (winner === "") {
      message = "It's a tie!";
    } else {
      message = `Player ${winner} has won!`;
    }
    this.setState({message: message});
    this.playable = false;
  }
  reset(){
    this.crossTurn = false; //First the circle, then the cross
    this.turnsLeft = 9;
    this.playable = true;

    this.setState({
      message: "Tic Tac Toe!",
      board: <Board game={this}/>
    });
  }
  render() {
    return (
      <div className="game">
        <h1>{this.state.message}</h1>
        {this.state.board}
        <button className="startAgain" onClick={()=>{
          this.reset = this.reset.bind(this);
          this.reset();
        }}>Start again</button>
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
