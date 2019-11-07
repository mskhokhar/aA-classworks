require_relative "piece.rb"
class Pawn < Piece
  def initialize(color,board,pos)
    super
  end

  def symbol
  end
  
  def moves
    #given a board state for a particular pawn
    possible_moves = []
    y , x = pos
    forward_steps.each do |step|
      new_y = y + step[0]
      new_x = x + step[1]
      new_step = [new_y,new_x]
      if board.empty?(new_step) && board.valid_pos?(new_step)
      elsif board.empty?(new_step) && board[new_step].color != color
        possible_moves << new_step 
      end
    end
    side_attacks.each do |step|
      if board[step].color != color
        possible_moves << step
      end
    end
    possible_moves
  end
  
  private
  def at_start_row?
    if color == :WHITE && pos[0] == 6
      return true
    elsif color == :BLACK && pos[0] == 1
      return true
    else
      return false
    end
  end

  def forward_dir
    if color == :WHITE
      return 1
    else
      return -1
    end
  end
  
  def forward_steps
    possible = []
    if at_start_row? == true
      return [[forward_dir*2,1],[forward_dir*2,-1],[forward_dir,1],[forward_dir,-1]]
    else
      return [[forward_dir,1],[forward_dir,-1]]
    end
  end
  
  def side_attacks
    step = color.forward_dir
    [ [pos[0] - step, pos[1]+1], [pos[0] - step,pos[1]-1] ]

  end
end