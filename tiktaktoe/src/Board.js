import { React, Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    this.game = props.game;
    this.createBoxes();
    this.checkIfWinner = this.checkIfWinner.bind(this);
  }
  renderBox(box) {
    return (
      <button
        onClick={() => {
          this.setSelected(box);
        }}
        className="square"
        key={box.key}
      >
        {box.player}
      </button>
    );
  }

  setSelected(box) {
    if (!box.selected) {
      if (this.game.crossTurn) {
        box.player = "x";
        this.game.crossTurn = false;
      } else {
        box.player = "o";
        this.game.crossTurn = true;
      }
      box.selected = true;
      this.checkIfWinner(box);
      this.forceUpdate();
    }
  }
  createBoxes() {
    let boxes = [];
    let counter = 0;
    let box;
    let row;

    for (let i = 0; i < 3; i++) {
      row = [];

      for (let j = 0; j < 3; j++) {
        counter++;
        box = {
          x: j,
          y: i,
          player: "",
          selected: false,
          key: counter,
        };
        row.push(box);
      }
      boxes.push(row);
    }
    this.state = {
      boxes: boxes,
    };
  }

  checkIfWinner(box) {
    let player = box.player;
    //get the box of the match relative to the selected box,
    //if the match is at 1,1 and the selected is at 2,2, the variable will be {x:1,y:1}
    let secondMatch = this.searchForMatches(box);

    if (secondMatch !== false) {
      let finalBoxMatch = this.state.boxes[secondMatch.y][secondMatch.x]
      if (finalBoxMatch.player === player) {
        console.log("war is won");
        this.game.finishGame(player);
      }
    }
  }

  searchForMatches(box) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let loopMoment = { i: i, j: j };
        if (
          box.x + i < 0 ||
          box.x + i > 2 ||
          box.y + j < 0 ||
          box.y + j > 2 ||
          (i === 0 && j === 0)
        ) {
          continue;
        } else {
          let secondMatch = this.getSecondMatch(box, loopMoment);
          if (secondMatch !== false) {
            return secondMatch;
          }
        }
      }
    }
    return false;
  }
  getSecondMatch(box, loopMoment) {
    let nextX = box.x + loopMoment.i;
    let nextY = box.y + loopMoment.j;
    let nextBox = this.state.boxes[nextY][nextX];

    if (nextBox.player === box.player) {
      let secondX = nextX + loopMoment.i;
      let secondY = nextY + loopMoment.j;

      if (secondX < 3 && secondX > -1 && secondY < 3 && secondY > -1) {
        let secondMatch = { x: secondX, y: secondY };
        return secondMatch;
      }
    }
    return false;
  }
  render() {
    return (
      <div className="board" key="board">
        <div className="row" key="firstRow">
          {this.state.boxes[0].map((box) => {
            return this.renderBox(box);
          })}
        </div>
        <div className="row" key="secondRow">
          {this.state.boxes[1].map((box) => {
            return this.renderBox(box);
          })}
        </div>
        <div className="row" key="thirdRow">
          {this.state.boxes[2].map((box) => {
            return this.renderBox(box);
          })}
        </div>
      </div>
    );
  }
}

export { Board };
