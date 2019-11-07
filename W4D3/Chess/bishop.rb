require_relative "piece.rb"
require_relative "slideable.rb"
class Bishop < Piece
  include Slideable
  def initialize(color,board,pos)
    super
  end

  def symbol
    color
  end
  
  protected
  def move_dirs
    DIAGONAL_DIRS
  end
end