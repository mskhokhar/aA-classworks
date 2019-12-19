import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(10, 15);
        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }
    updateGame(tileObj, flagBoolean){
        if (flagBoolean) {
            tileObj.toggleFlag();
        } else {
            tileObj.explore();
        }
        this.setState({ board: this.state.board });
    }

    render(){
        let board = this.state.board;
        if (board.won() || board.lost()) {
            $(".game").off("click");
        } 
        return(
            <div className="game">
                <Board board={this.state.board} updateGame={this.updateGame} />
                <div className="hidden">
                    <section class="modal-screen"></section>
                    <section class="modal-form">
                        Game Over!!
                        <button>Click to play</button>
                    </section>
                    
                </div>
            </div>
        );
    }
}
export default Game;