import { React, Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.selected = false;
    this.board = props.board;
    this.x = props.x;
    this.y = props.y;
    this.player = "";
    this.game = props.game;
    this.state = { player: this.player };
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected() {
    let player;

    if (!this.selected) {
      if (this.game.crossTurn) {
        player = "x";
        this.setState({ player: player });
        this.game.crossTurn = false;
      } else {
        player = "o";
        this.setState({ player: player });
        this.game.crossTurn = true;
      }

      this.board.playerMattress[this.x][this.y] = player;
      this.player = player;

      this.selected = true;
      this.board.checkIfWinner(this.x, this.y);
    }
  }

  render() {
    return (
      <button className="square" onClick={this.setSelected} key={this.id}>
        {this.state.player}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.game = props.game;
    this.createBoxes();
    this.checkIfWinner = this.checkIfWinner.bind(this);
  }

  render() {
    return (
      <div className="board" key="board">
        <div className="row" key="firstRow">
          {this.boxes[0]}
        </div>
        <div className="row" key="secondRow">
          {this.boxes[1]}
        </div>
        <div className="row" key="thirdRow">
          {this.boxes[2]}
        </div>
      </div>
    );
  }

  createBoxes() {
    let counter = 0;
    let boxes = [];
    let playerMattress =
      []; /*A mattress a part from the boxes to represent the player that own
    each box*/
    let box;
    let row;
    let playerRow;

    for (let i = 0; i < 3; i++) {
      row = [];
      playerRow = [];

      for (let j = 0; j < 3; j++) {
        counter++;
        box = {
          key: counter,
          id: counter,
          x: j,
          y: i,
          game: this.game,
          board: this,
        };
        playerRow.push("");
        row.push(<Box {...box}></Box>);
      }
      playerMattress.push(playerRow);
      boxes.push(row);
    }

    this.playerMattress = playerMattress;
    this.boxes = boxes;
  }

  checkIfWinner(selectedX, selectedY) {
    let player = this.playerMattress[selectedX][selectedY];
    let range = {
      min: -1,
      max: 2,
    };
    let position = {
      x: selectedX,
      y: selectedY,
    };

    //get the position of the match relative to the selected box,
    //if the match is at 1,1 and the selected is at 2,2, the variable will be {x:1,y:1}
    let secondMatch = this.searchForMatches(range, position);

    if (secondMatch !== false) {
      if (this.playerMattress[secondMatch.x][secondMatch.y] === player) {
        console.log("war is won");
        this.game.finishGame(player);
      }
    }
  }

  searchForMatches(range, position) {
    for (let i = range.min; i < range.max; i++) {
      for (let j = range.min; j < range.max; j++) {
        if (
          position.x + i < 0 ||
          position.x + i > 2 ||
          position.y + j < 0 ||
          position.y + j > 2 ||
          (i === 0 && j === 0)
        ) {
          continue;
        } else {
          let loopMoment = {i: i, j: j};
          let secondMatch = this.getSecondMatch(position, loopMoment);
          
          if (secondMatch !== false){
            return secondMatch;
          }
        }
      }
    }
    return false;
  }
  getSecondMatch(position, loopMoment) {
    let nextX = position.x + loopMoment.i;
    let nextY = position.y + loopMoment.j;

    if (
      this.playerMattress[nextX][nextY] ===
      this.playerMattress[position.x][position.y]
    ) {
      let secondX = nextX + loopMoment.i;
      let secondY = nextY + loopMoment.j;

      if (secondX < 3 && secondX > -1 && secondY < 3 && secondY > -1) {
        let secondMatch = { x: nextX + loopMoment.i, y: nextY + loopMoment.j };
        return secondMatch;
      }
    }
    return false;
  }
}

export { Box, Board };
