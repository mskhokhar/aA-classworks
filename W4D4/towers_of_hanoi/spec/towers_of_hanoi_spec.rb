require "rspec"
require "towers_of_hanoi"

describe TowersOfHanoi do
    subject(:toi) { TowersOfHanoi.new(4) }
    describe "#initialize" do
        it "should take an arg for num plates" do
            expect(toi.num_plates).to eq(4)
        end
    end

    describe "#valid_move?" do
        
        it "should check if move is valid" do
            expect(toi.valid_move?(toi.array_1, toi.array_2)).to be true
        end
        it "should return false if move is invalid" do
            expect(toi.valid_move?(toi.array_3, toi.array_1)).to be false
        end
    end

    describe "#populate" do

        it "should populate first array" do
            expect(toi.array_1.length).to eq(4)
        end
    end
end


