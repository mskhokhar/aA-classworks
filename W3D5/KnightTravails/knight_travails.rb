
require_relative "./00_tree_node.rb"

class KnightPathFinder

    def self.valid_moves(pos)
        x = pos.value[0]
        y = pos.value[1]
        possible_moves = [
                            [x+2, y+1], [x+2, y-1],
                            [x-2, y+1], [x-2, y-1],
                            [x-1, y+2], [x-1, y-2], 
                            [x+1, y+2], [x+1, y-2]
                        ]
        possible_moves.select! {
            |eq| 
            (eq[0] is between 0 and 8) and
            (eq[1]is between 0 and 8)
                            
        }    

    end

    def intialize(pos)
        @root_node = PolyTreeNode.new(pos)
        @considered_positions = [pos]
        build_move_tree(@root_node)
    end

    def new_move_positions(pos)
       KnightPathFinder.valid_moves(pos).each do |position|
        @considered_positions << position if !@considered_positions.include?(position)
       end
       @considered_positions
    end

    def build_move_tree(pos)
        
    end

end


#   2 1 2
#     1 2
# r n b k q b n r

#[0,0] > [7,7]   gave : [2,3] =>[]