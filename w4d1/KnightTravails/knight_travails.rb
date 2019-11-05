
require_relative "./00_tree_node.rb"
require "byebug"

class KnightPathFinder
    attr_accessor :considered_positions, :root_node
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
            (eq[0] >= 0 && eq[0] < 8) &&
            (eq[1] >= 0 && eq[1] < 8)
                            
        }    
        return possible_moves
    end

    def initialize(pos)
        @root_node = PolyTreeNode.new(pos)
        @considered_positions = [pos]
        build_move_tree
    end

    def new_move_positions(pos)
        new_positions = []
        KnightPathFinder.valid_moves(pos).each do |position|

            if !@considered_positions.include?(position)
                new_positions << position
                @considered_positions << position
            end
        end
        new_positions
    end
      

    

    def build_move_tree
        queue = [root_node]
        
        until queue.empty?
          
            start_pos = queue.shift
            moves = new_move_positions(start_pos)
            moves.each do |move|
                new_move = PolyTreeNode.new(move)
                start_pos.add_child(new_move)
                queue << new_move
            end
            
        end
        
    end

    def trace_path_back(last)
        result =[]
        current_node = last
        until current_node.parent.nil?
            return result if current_node.parent.nil?
            result << current_node.value
            current_node = current_node.parent
        end
        result << root_node.value
    end

    def find_path(last_node)
        start = root_node
        end_node = start.dfs(last_node)
        trace_path_back(end_node).reverse
    end

end