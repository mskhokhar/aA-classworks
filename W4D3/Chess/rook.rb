require_relative "piece.rb"
require_relative "slideable.rb"
class Rook < Piece
  include Slideable
  def initialize(color,board,pos)
    super
  end

  def symbol
    color
  end
  
  protected
  def move_dirs
    HORIZONTAL_AND_VERTICAL_DIRS
  end
end