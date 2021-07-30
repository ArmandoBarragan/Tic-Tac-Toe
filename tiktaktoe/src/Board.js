import {React, Component} from "react"

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
      if (!this.selected) {
        if (this.game.crossTurn) {
          this.game.positions[this.id] = 1;
          this.player = "x";
          this.game.crossTurn = false;
        } else {
          this.game.positions[this.id] = -1;
          this.player = "o";
          this.game.crossTurn = true;
        }
        this.selected = true;
        this.forceUpdate();
        this.game.confirmWinner(this.game.crossTurn)
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
        <Box key={0} game={game} />,
        <Box key={1} game={game} />,
        <Box key={2} game={game} />,
      ];
  
      this.secondRow = [
        <Box key={3} game={game} />,
        <Box key={4} game={game} />,
        <Box key={5} game={game} />,
      ];
  
      this.thirdRow = [
        <Box key={6} game={game} />,
        <Box key={7} game={game} />,
        <Box key={8} game={game} />,
      ];
    }
  
    render() {
      return (
        <div className="board" key="board">
          <div className="row" key="firstRow">
            {this.firstRow.map(function (box) {
              console.log(box);
              return box;
            })}
          </div>
          <div className="row" key="secondRow">
            {this.secondRow.map(function (box) {
              console.log(box);
              return box;
            })}
          </div>
          <div className="row" key="thirdRow">
            {this.thirdRow.map(function (box) {
              console.log(box);
              return box;
            })}
          </div>
        </div>
      );
    }
  }

  export default Board;