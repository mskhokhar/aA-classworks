class MaxIntSet
  attr_reader :store

  def initialize(max)
    @store = Array.new(max)
    @max = max
  end

  def insert(num)
    if num > @max || num < 0
      raise "Out of bounds"
    else
      @store[num] = true 
    end
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    return false if @store[num] == nil
    return true if @store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    idx = self[num]
    idx.delete_at(idx.index(num))
  end

  def include?(num)
    idx = self[num]
    idx.include?(num)
    
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if @count < num_buckets 
      if include?(num)
      else
        idx = self[num]
        idx << num
        @count += 1
      end
    else
      resize!
      insert(num)
    end

  end

  def remove(num)
    if include?(num)
      idx = self[num] # sub array in which the element may be present
      idx_ele = idx.index(num) #index of the element to be deleted
      idx.delete_at(idx_ele) # deleting the element from the particular index
      @count -= 1
    end
  end

  def include?(num)
    idx = self[num]
    idx.include?(num)
  end

  def inspect
    @count
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    store_temp = Array.new(num_buckets*2) { Array.new }
    @store.each do |ele|
      ele.each do |num|
        idx = num % (num_buckets*2)
        store_temp[idx] << num
      end
    end
    @store = store_temp

    
  end
end
