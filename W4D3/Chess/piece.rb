class Piece 
  attr_reader :pos, :color
  def initialize(color,board,pos)
    @color = color
    @board = board
    @pos = pos
    
  end

  def to_s
  end

  def empty?
    # x,y = pos
    # @board[x][y].nil?
  end

  def valid_moves
  end

  def pos=(val)
  end

  def symbol
  end

  private 
  def move_into_check?(end_pos)

  end
end