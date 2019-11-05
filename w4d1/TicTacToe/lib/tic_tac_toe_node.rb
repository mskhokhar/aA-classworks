require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_accessor :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    new_board = board.dup
    kids = []
    @board.rows.each_with_index do |row, idx1|
      row.each_with_index do |spot, idx2|
        if spot.nil?
          
          next_mover_mark = (next_mover_mark = :x ? :o : :x)
          node = TicTacToeNode.new(board.dup, next_mover_mark, [idx1,idx2])
          # new_board = board.dup
          kids << node
          # prev_move_pos = spot
          
        end
      end
    end
    kids
  end

  def losing_node?(evaluator)
    return true if !board.won? && board.over?
  end

  def winning_node?(evaluator)
  end
end
