import {Box} from './Board'

class Game {
  constructor() {
    this.crossTurn = false; //First the circle, then the cross
    this.turnsLeft = 9;
    this.message = "Tic Tac Toe!";
    this.playable = true;
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
    let selectedBox = this.boxes[selectedPosition];
    this.searchMatches(selectedPosition, player);
    // for (let i = selectedPosition - 4; i < selectedPosition + 4; i++) {
    //   if (this.positions[i] === player && i !== selectedPosition) {
    //     adding = i - selectedPosition;
    //     nextPosition = i + adding;
    //     if (this.positions[nextPosition] === player) {
    //         if (this.boxes[nextPosition].x ){
    //             return true;
    //         }
    //     }
    //   }
    // }

    if (this.turnsLeft === 0) {
      this.finishGame(0);//0 is for tie
    }
  }
  searchMatches(selectedPosition, player){

  }
}

export default Game;
 /*
 1. Construir el juego
 2. El juego tiene un tablero, y el tablero tiene cajas
 3. Las cajas no le pertenecen a nadie al principio (0)
 4. Instanciar las cajas cuando se instancia el tablero
 5. Cuando se selecciona una caja, la caja le avisa al tablero que fue seleccionada, para que este busque otras cajas
 que han sido seleccionadas por el mismo jugador.
 6. 
 */