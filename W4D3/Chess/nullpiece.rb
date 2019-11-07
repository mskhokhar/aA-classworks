require_relative "piece.rb"
require "singleton"
class NullPiece < Piece
  include Singleton
  def initialize(color = :NONE, board = :BOARD, pos = :POS)
    super
  end

  def moves  
  end

  def symbol
    color
  end
  

end
