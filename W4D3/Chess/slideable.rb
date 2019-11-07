module Slideable
  private
  HORIZONTAL_AND_VERTICAL_DIRS = [ [1,0], [0,1], [-1,0], [0,-1] ]
  DIAGONAL_DIRS =[ [1,1], [-1,-1],[ 1,-1], [-1,1] ]

  public
  def horiontal_dirs
    @@HORIZONTAL_DIRS
  end

  def diagonal_dirs
    @@DIAGONAL_DIRS
  end

  def moves #shoud take any values
    # grow_unblocked_moves_in_dir
    # move_dirs
    possible_moves=[]
    move_dirs.each do |el|
      dx, dy = el
      possible_moves.concat( grow_unblocked_moves_in_dir(dx,dy))
    end
    possible_moves
  end

  private
  def move_dirs # always gets overwritten
  end

  def grow_unblocked_moves_in_dir(dx,dy)
    new_x, new_y = pos
    
    result = []
    #conditions for validity
    loop do
      new_x, new_y = new_x + dx, new_y + dy
      new_pos = [new_x,new_y]
      break unless board.valid_pos?(new_pos)
      if board.empty?(new_pos)
        res << new_pos 
      else
        res << new_pos if board[new_pos].color != color
        break
      end
    end
    result
  end
  
end