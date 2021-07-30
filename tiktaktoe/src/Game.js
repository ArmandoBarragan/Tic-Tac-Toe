// class Vector {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.player = 0;
//   }
//   setPlayer(player) {
//     this.player = player;
//   }
// }
class Game {
  constructor() {
    this.crossTurn = false; //First the circle, then the cross
    this.turnsLeft = 9;
    this.message = "Tic Tac Toe!";
    this.playable = true;

    this.positions = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    };
  }

  finishGame(winner) {
    if (winner === 0) {
      this.message = "It's a tie!";
    } else {
        this.message = `Player ${winner} has won!`
    }
    this.playable = false;
  }

  playerWon(selectedPosition, player) {
    this.turnsLeft--;
    let adding;

    for (let i = selectedPosition - 4; i < selectedPosition + 4; i++) {
      if (this.positions[i] === player && i !== selectedPosition) {
        adding = i - selectedPosition;
        if (this.positions[i + adding] === player) {
          return true;
        }
      }
    }
    if (this.turnsLeft === 0) {
      this.finishGame(0);//0 is for tie
    }
    return false;
  }
}

export default Game;
