let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (pos[0] > 7 || pos[1] > 7 || pos[0] < 0 || pos[1] < 0){
    throw console.error("wrong pos");
  }else{
    return this.grid[pos[0]][pos[1]];
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if(this.validMoves(color).length !== 0){
    return true;
  }else{
    return false;
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece && piece.color === color){
    return true;
  }else{
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos)){
    return true;
  }else{
    return false;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if(!this.hasMove("white") && !this.hasMove("black")){return true;}
  return false;

};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] > 7 || pos[1] > 7 || pos[0] < 0 || pos[1] < 0){
    return false;
  }else{return true;}
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  if(!piecesToFlip){
    piecesToFlip=[];
  }else{
    piecesToFlip.push(pos);
  }
  // let piece = board.getPiece(pos);
  let new_pos = [pos[0] + dir[0], pos[1] + dir[1]];

  if (!board.isValidPos(new_pos)){
    return null;
  } else if (!board.isOccupied(new_pos)) {
    return null;
  } else if(board.isMine(new_pos,color)){
    return piecesToFlip.length === 0 ?  null : piecesToFlip ;
  }else{
    // piecesToFlip.push(new_pos);
    return _positionsToFlip(board,new_pos,color,dir,piecesToFlip);
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)){
    throw new Error("Invalid Move");
  }
  let possible_positions = [];
  Board.DIRS.forEach(direc =>{
    // debugger;
    let positions = _positionsToFlip(this, pos, color, direc, []);
    possible_positions = possible_positions.concat(positions);
  });
  
  possible_positions = possible_positions.filter(function (el) {
    return el != null;
  });
  console.log(possible_positions);
  if (possible_positions){
    possible_positions.forEach( pos =>{
      debugger;
      let piece = this.getPiece(pos);
      if(piece){
        piece.flip();
      }else{
        let new_piece = new Piece(color);
        this.grid[pos[0]][pos[1]] = new_piece;
      }
    });
  }
  let new_piece = new Piece(color);
  this.grid[pos[0]][pos[1]] = new_piece;
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for (let i = 0; i < this.grid.length; i++) {
    const row = this.grid[i];
    console.log(row.join(" "));
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  for (let i = 0; i < Board.DIRS.length; i++) {
    let valid_moves = _positionsToFlip(this, pos, color, Board.DIRS[i]);
    if (valid_moves) {return true;}
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let valid_pos = [];
  for (let i = 0; i < this.grid.length; i++) {
    for (let j = 0; j < this.grid.length; j++) {
      if (this.validMove([i, j], color)){
        valid_pos.push([i,j]);
      }
    }
    
  }
  return valid_pos;
};

module.exports = Board;
