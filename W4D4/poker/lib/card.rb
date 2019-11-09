class Card
    attr_reader :value, :suit
    def initialize(value, suit)
        @value = value
        @suit = suit
    end

    def <=>(another_card)
        self.value <=> another_card.value
    end

    def to_s

    end
end