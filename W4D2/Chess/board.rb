require_relative "piece.rb"
class Board
  attr_accessor :rows
  def initialize
    @rows = Array.new(8) {Array.new(8, nil)} 
    create_board    
    # private
    # @sentinel = NullPiece.instance
    
    
  end

  def move_piece(start_pos,end_pos)
    if start_pos.nil? 
      raise "There is no piece there" 
    end 
    
  end

  def create_board
    @rows.each.with_index do |row,idx1|
      row.each do |pos,idx2|
        piece = Piece.new("black", self, [idx1,idx2])
        pos = piece if idx1 < 2 || idx1 > 5
      end
      puts "running"
    end
  end

  def [](pos)
    x, y = pos
    self.rows[x][y]
  end

  def []=(pos,val)
  end


  def valid_pos?(pos)
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

end