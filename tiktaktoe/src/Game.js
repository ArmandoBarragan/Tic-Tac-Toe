class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.player = 0;
    }
    setPlayer(player){
        this.player = player;
    }
}
class Game{
    constructor(){
        this.crossTurn = false;//First the circle, then the cross
        this.positions = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0, 
            9: 0
        }
        this.turnsLeft = 8;
    }
    confirmWinner(crossTurn){
        let pivot = 0;
        this.turnsLeft --;
        let player;

        if (crossTurn){
            player = 1; //asign 1 to the cross and check if the values of the boxes next to it are the same value
        }
        else {
            player = -1
        }
        

    }
}
export default Game;