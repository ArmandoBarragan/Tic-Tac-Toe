import {Box} from './Board'

class Game {
  constructor() {
    this.crossTurn = false; //First the circle, then the cross
    this.turnsLeft = 9;
    this.message = "Tic Tac Toe!";
    this.playable = true;
  }

  finishGame(winner) {
    if (winner === "") {
      this.message = "It's a tie!";
    } else {
        this.message = `Player ${winner} has won!`
    }
    this.playable = false;
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