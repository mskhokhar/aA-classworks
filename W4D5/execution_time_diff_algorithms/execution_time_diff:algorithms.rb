require "byebug"
# def my_min(list)
#   smallest = list.first #list[0]
#   (1...list.length-1).each do |i|
#     smallest = list[i] if list[i] < smallest
#   end
#   smallest
# end



# def largest_contiguous_subsum_phase1(list)
#   subs = []
#   (0...list.length-1).each do |i|
#     (i...list.length).each do |j|
#       sub = list[i..j].sum 
#       subs << sub
#     end
#   end
#   max = subs.map{ |m| m.sum}
#   m.max
  
# end

# def largest_contiguous_subsum_phase_a(list)
#   largest = 0
#   (0...list.length-1).each do |i|
#     (i...list.length).each do |j|
#       largest = list[i..j].sum if  list[i..j].sum > largest
#     end
#   end
#   largest
# end

def largest_contiguous_subsum(list)
  return list.max if list.all?{|ele| ele < 0}
  largest = list.first #keeping track of largest number

  inner_point = 0 # acting as inner loop  
  outer_point = 0 # acting as outer loop

  sum = 0
  comparator = 0
  # debugger
  loop do
    break if outer_point == list.length - 1 #checking for our changing starting point

    sum = comparator + list[inner_point] # 8 - 7 =
    if sum > largest
      largest = sum
      comparator = sum
    else
      comparator = sum
    end
    inner_point += 1
    if inner_point > list.length-1 #initializing our loop with different starting points
      outer_point += 1 #updating the starting point
      inner_point = outer_point
      comparator = 0
      sum = 0
    end
  end

  largest
end


list = [2, 3, -6, 7, -6, 7]
largest_contiguous_subsum(list)




# [5,3,-7]

# [5] [5,3] [5,3,-7] [3] [3,-7] [-7] 

# largest = 
# sum = 
# comparator = 

# list.each_with_index do |ele, i|
#  
# end
