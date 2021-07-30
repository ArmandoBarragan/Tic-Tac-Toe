import { React, Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.setSelected = this.setSelected.bind(this);
    this.id = props.id;
    this.key = props.id;
    this.selected = false;
    this.game = props.game;
    this.player = "";
  }

  setSelected() {
    let position = this.id;
    let player;

    if (!this.selected) {
      if (this.game.crossTurn) {
        this.player = "x";
        player = 1;
        this.game.crossTurn = false;
      } else {
        this.player = "o";
        player = -1;
        this.game.crossTurn = true;
      }

      this.game.positions[position] = player;
      this.selected = true;
      this.forceUpdate();
      this.game.confirmWinner(position, player);
    }
  }

  render() {
    return (
      <button className="square" onClick={this.setSelected} key={this.id}>
        {this.player}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    let game = props.game;
    this.game = game;

    this.firstRow = [
      <Box key={0} id={0} game={game} />,
      <Box key={1} id={1} game={game} />,
      <Box key={2} id={2} game={game} />,
    ];

    this.secondRow = [
      <Box key={3} id={3} game={game} />,
      <Box key={4} id={4} game={game} />,
      <Box key={5} id={5} game={game} />,
    ];

    this.thirdRow = [
      <Box key={6} id={6} game={game} />,
      <Box key={7} id={7} game={game} />,
      <Box key={8} id={8} game={game} />,
    ];
  }

  render() {
    return (
      <div className="board" key="board">
        <div className="row" key="firstRow">
          {this.firstRow.map(function (box) {
            return box;
          })}
        </div>
        <div className="row" key="secondRow">
          {this.secondRow.map(function (box) {
            return box;
          })}
        </div>
        <div className="row" key="thirdRow">
          {this.thirdRow.map(function (box) {
            return box;
          })}
        </div>
      </div>
    );
  }
}

export default Board;
