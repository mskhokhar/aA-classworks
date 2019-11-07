module Stepable
  def moves
    possible_moves =[]
    move_diffs.each do |move|
      if board.valid_pos?(move) && board.empty?(move)
        possible_moves << move
      elsif board[move].color != color
        possible_moves << move
      end
    end
    possible_moves
  end

  private
  def move_diffs #always gets overwritten
  end
end