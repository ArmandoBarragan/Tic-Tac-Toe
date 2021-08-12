import "./App.css";
import React from "react";
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
      board: ()=><Board game={this}/>
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
      board: ()=><Board game={this}/>
    });
    this.forceUpdate();
  }
  render() {
    let ActiveBoard = this.state.board;
    return (
      <div className="game">
        <h1>{this.state.message}</h1>
        <ActiveBoard></ActiveBoard>
        <button className="startAgain" onClick={()=>{
          this.reset = this.reset.bind(this);
          this.reset();
        }}>Start again</button>
      </div>
    );
  }
}

export default App;
