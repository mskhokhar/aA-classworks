import React from 'react';
import Tile from './tile'
import * as Minesweeper from '../minesweeper';
class Board extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.board);
        // this.props.updateGame
    }
    render() {
        const board = this.props.board.grid;
        const rows = board.map((el1, i) => {
            return <div key={i}>
                                    {
                                        el1.map((tile, j) => {
                                            return <Tile updateGame ={this.props.updateGame} tile={tile} key={[i, j]} />
                                        })
                                    }
                                </div>
                    })
        return (
            <div className="board">
               { rows }
            </div>
        );
    }
}

export default Board;
