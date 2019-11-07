require_relative "piece.rb"
require_relative "stepable.rb"
class Knight < Piece
  include Stepable
  def initialize(color,board,pos)
    super  
  end

  def symbol
    color
  end

  
  protected
  def move_diffs
    x,y = pos
    possible_moves = [
      [x+1,y+2],[x-1,y+2],
      [x+1,y-2],[x-1,y-2],
      [x+2,y-1],[x+2,y+1],
      [x-2,y-1],[x-2,y+1]
    ]
  end
end