class Array
    def my_uniq
        hash = Hash.new(0)
        self.each { |ele| hash[ele] += 1 }
        hash.keys
    end

    def two_sum
        new_arr = []
        (0...self.length).each do |i|
            (0...self.length).each do |j|
                new_arr << [i, j] if j > i && self[i] + self[j] == 0
            end
        end
        new_arr
    end

end


def my_transpose(array)
    height = array[0].length
    width = array.length
    trans = Array.new(height) { Array.new(width) }

    (0...height).each do |i|
        (0...width).each do |j|
            trans[i][j] = array[j][i]
        end
    end
    trans
end

def stock_picker(array)
    lowest = array[1] - array[0]  
    result = [0, 1]

    array.each_with_index do |num_1 , i|
        array.each_with_index do |num_2, j|
            if j > i && num_2 - num_1 > lowest
                result = [i, j] 
                lowest = num_2 - num_1
            end
        end
    end
    result
end



