require_relative "plate"

class TowersOfHanoi

    
    def initialize(num_plates)
        @num_plates = num_plates
        @array_1 = populate(num_plates)
        @array_2 = []
        @array_3 = []
        @user_input = []

    end

    def move(start_arr, target_arr)
        
        if valid_move?(start_arr, target_arr)
            target_arr.push((start_arr.pop)) 
            return true
        else
            return false
        end

    end

    def start_game
        while get_input
            move(user_input[0], user_input[1]) 
            break if won?
        end
    end
    



    def get_input # [1,3]
        print "Enter first and target towers: (eg 1,3)"
        input = gets.chomp.split(",").map { |i| i.to_i }
        arr = []
        input.each do |num|
            case num
            when 1
                arr << array_1
            when 2
                arr << array_2
            when 3
                arr << array_3
            else
                raise
            end
        end
        # debugger
        first, second = arr
        if valid_move?(first, second) 
            self.user_input = arr
            return true
        else
            return false
        end

        

        
    end

    def won?
        array_3.length == num_plates    
    end

    def valid_move?(start_arr, target_arr) # check if the move is valid 
        return true if target_arr.empty?
        return false if start_arr.empty?
        start_arr[-1].size < target_arr[-1].size 
    end

    def populate(num)
        (1..num).map { |size| Plate.new(size) }
    end

    # private
    attr_accessor :array_1, :array_2, :array_3, :num_plates, :user_input

end