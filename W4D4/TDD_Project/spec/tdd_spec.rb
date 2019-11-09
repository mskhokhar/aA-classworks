require "rspec"
require "tdd"



describe "Array#my_uniq" do

    it "should remove duplicates" do
        expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
    end

    it "should return new array" do
        arr = [1,2,3]
        expect(arr.my_uniq).to_not be(arr)      
    end

    # it "should not use Array#uniq" do
    #     # allow()
    # end

end


describe "Array#two_sum" do
    it "should find all pairs that sum to zero" do
        expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end

end

describe "#my_transpose" do

    it "should transpose arrays successfully" do
        expect(my_transpose([[0, 1, 2],[3, 4, 5],[6, 7, 8]])).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end

end

describe "#stock_picker" do

    it "should return most profitable pair of days" do
        arr = [150, 200, 170, 300, 100, 150]
        expect(stock_picker(arr)).to eq([0, 3])
    end

end

