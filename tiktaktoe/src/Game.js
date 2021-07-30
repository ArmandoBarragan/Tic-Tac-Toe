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
    this.turnsLeft = 8;
  }
  confirmWinner(selectedPosition, player) {
    this.turnsLeft--;
    let adding;

    for (let i = selectedPosition - 4; i < selectedPosition + 4; i++) {
      if (this.positions[i] === player && i !== selectedPosition) {
        console.log("player" + player);
        console.log("matching player" + this.positions[i]);
        console.log("player position" + selectedPosition);
        console.log("match position" + i);
        adding = i - selectedPosition;
        if (this.positions[i + adding] === player) {
          console.log("heey");
          return true;
        }
      }
    }
  }
}

export default Game;
