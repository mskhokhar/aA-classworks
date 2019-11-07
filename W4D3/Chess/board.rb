require_relative "rook.rb"
require_relative "bishop.rb"
require_relative "queen.rb"
require_relative "pawn.rb"
require_relative "king.rb"
require_relative "knight.rb"
require_relative "nullpiece.rb"

class Board
  attr_accessor :rows
  def initialize
    null_piece = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, null_piece) }
    create_board    
    # private
    # @sentinel = NullPiece.instance
    
    
  end

  def move_piece(start_pos,end_pos)
    if self[start_pos].is_a? NullPiece 
      raise "There is no piece there" 
    elsif end_pos.any?{|ele| ele > 7 || ele < 0}
      raise "Invalid Position"
    else
      self[start_pos], self[end_pos] = nil, self[start_pos]
    end 
    
  end

  def create_board
    populate_pawns
    populate_kings
    populate_queens
    populate_bishops
    populate_rooks
    populate_knights  
  end

  def populate_pawns
    (0...8).each do |x|
      self[[1,x]] = Pawn.new(:BLACK,rows,[1,x])
      self[[6, x]] = Pawn.new(:WHITE,rows,[6,x])
    end
  end
  
  def populate_kings
    self[[0,4]] = King.new(:BLACK,rows,[0,4])
    self[[7,4]] = King.new(:WHITE,rows,[7,4])
  end

  def populate_queens
    self[[0,3]] = Queen.new(:BLACK,rows,[0,3])
    self[[7,3]] = Queen.new(:WHITE,rows,[7,3])  
  end

  def populate_bishops
    self[[0,2]] = Bishop.new(:BLACK,rows,[0,2])
    self[[7,2]] = Bishop.new(:WHITE,rows,[7,2])  
    self[[0,5]] = Bishop.new(:BLACK,rows,[0,5])
    self[[7,5]] = Bishop.new(:WHITE,rows,[7,5])
  end

  def populate_rooks
    self[[0,0]] = Rook.new(:BLACK,rows,[0,0])
    self[[7,0]] = Rook.new(:WHITE,rows,[7,0])  
    self[[0,7]] = Rook.new(:BLACK,rows,[0,7])
    self[[7,7]] = Rook.new(:WHITE,rows,[7,7])
  end

  def populate_knights
    self[[0,1]] = Knight.new(:BLACK,rows,[0,1])
    self[[7,1]] = Knight.new(:WHITE,rows,[7,1])  
    self[[0,6]] = Knight.new(:BLACK,rows,[0,6])
    self[[7,6]] = Knight.new(:WHITE,rows,[7,6])
  end

  def [](pos)
    x, y = pos
    @rows[x][y]
  end

  def []=(pos,val)
    x, y = pos
    @rows[x][y] = val
  end


  def valid_pos?(pos)
    if pos.any?{|ele| ele > 7 || ele < 0}
      return false
    else
      return true
    end 
  end

  def add_piece(piece,pos)
  end

  def checkmate?(color)
  end

  def in_check?(color)
  end

  def find_king(color)
  end

  def pieces
  end

  def dup
  end

  def move_piece!(color,start_pos,end_pos)
   
  end

  def empty?(pos)
    x,y = pos
    @board[x][y].is_a? NullPiece
  end

end
