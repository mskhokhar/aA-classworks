require "rspec"
require "deck"

describe Deck do
    subject(:new_deck) { Deck.new }
    describe "#create_deck" do
        it "should create a deck of 52 cards" do
            new_deck.create_deck
            expect(new_deck.deck.length).to eq(52)
        end
    end

end