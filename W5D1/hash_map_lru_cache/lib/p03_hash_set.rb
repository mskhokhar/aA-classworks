require "byebug"

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    # debugger
    if !self.include?(key)
      if num_buckets > @count
        input = key.hash
        self[input] << key
        @count += 1
      else
        resize!
        insert(key)
      end
    end
  end

  def include?(key)
    input = key.hash
    self[input].include?(key)
  end

  def remove(key)
    # debugger
    if self.include?(key)
      self[key.hash].delete(key) # sub array in which the element may be present
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num % num_buckets
    @store[idx]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_size = num_buckets * 2
    store_temp = Array.new(new_size) { Array.new }
    
    @store.each do |ele|
      ele.each do |num|
        idx = num % new_size
        store_temp[idx] << num
      end
    end
    @store = store_temp
  end
end
