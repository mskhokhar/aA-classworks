import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.tile = this.props.tile;
        // console.log(this.tile);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, tileObj){
        let updateGame = this.props.updateGame;
        let flag =event.altKey;
        updateGame(tileObj, flag);
    }

    render(){
        const tile = this.props.tile;
        const bombCount = tile.adjacentBombCount();
        let tileContent = ' ';
        if (tile.explored) {
            if (tile.bombed) {
                tileContent = "💣";
            } else if (bombCount > 1) {
                tileContent = bombCount;
            }
        }else if (tile.flagged) {
            tileContent = "🏴‍☠️"
        }
        return(
            <div onClick={() => { this.handleClick(event, tile) }} className={(tile.explored ? "explored" : "tile") } >
                {
                    tileContent
                }
            </div>
        );
    }
}
export default Tile;