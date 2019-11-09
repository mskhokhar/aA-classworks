require "rspec"
require "card"

describe Card do
    subject(:card) { Card.new(9, :SPADES) }
    it "initializes a card and hold value" do
        expect(card.value).to eq(9)
    end
    it "should hold suit" do
        expect(card.suit).to eq(:SPADES)
    end

    describe "#<=> method" do
        let(:new_card) { Card.new(2, :HEARTS) }
        it "should return -1, 0, 1 after comparing two cards" do
            expect(card<=>new_card).to eq(1)
        end
    end
end
