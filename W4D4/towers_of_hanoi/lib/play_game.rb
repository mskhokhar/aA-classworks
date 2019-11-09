require_relative "towers_of_hanoi"

class PlayGame
    def play 
        print "Enter number of plates: "
        num_plates = gets.chomp.to_i
        toi = TowersOfHanoi.new(num_plates)
        toi.start_game
        print "you won"
    end

    

end

p = PlayGame.new

p.play