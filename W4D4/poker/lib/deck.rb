require_relative "card"
SUITS = [:HEARTS, :SPADES, :DIAMONDS, :CLUBS]

class Deck
    attr_accessor :deck
    def initialize
        @deck = []
    end

    def create_deck
        SUITS.each do |suit|
            (1..13).to_a.each do |val|
                self.deck << Card.new(val, suit)
            end
        end
    end

    def shuffle_deck
        

    end

    def draw # from top

    end

    def return_card_to_deck

    end

end