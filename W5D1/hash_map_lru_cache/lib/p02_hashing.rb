class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    # res = []
    str = self.to_s
    # str.each_char do |ele|
    #   res << ele.ord.hash
    # end
    # res.join("").to_i
    str.chars.map{|x| x.ord}.map{|x| x.to_s}.join('').to_i
  end

  
end

class String
  def hash
    res= []
    self.each_char do |el|
      res << el.ord
    end
    res.join("").to_i
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    
    self.sort_by{|k,v| v }.to_s.chars.map{|x| x.ord}.map{|x| x.to_s}.join('').to_i
  end
end
