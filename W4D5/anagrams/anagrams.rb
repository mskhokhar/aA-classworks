def first_anagram?(str1, str2)
  res = str1.split("").permutation
  res.include?(str2.split(""))
end


def second_anagram?(str1, str2)
  str1.each_char do |char|
    idx = str2.index(char)
    return false if  idx.nil?
    str2=str2[0...idx]+str2[idx+1..-1]
  end
  str2 == ""
end


def third_anagram?(str1, str2)
  alphabet = ("a".."z").to_a
  sorted = false
  until sorted do
    sorted = true
    (0...str1.length - 1).each do |i|
      if alphabet.index(str1[i]) > alphabet.index(str1[i + 1])
        str1[i], str1[i + 1] = str1[i + 1], str1[i]
        sorted = false
      end
      
      if alphabet.index(str2[i]) > alphabet.index(str2[i + 1])
        str2[i], str2[i + 1] = str2[i + 1], str2[i]
        sorted = false
      end
    end
  end

  str1 == str2
end


def fourth_anagram?(str1, str2)
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)

  str1.each_char do |char|
    hash1[char] += 1
  end

  str2.each_char do |char|
    hash2[char] += 1
  end

  hash1 == hash2
end

def bonus_anagram?(str1, str2)
  hash = Hash.new(0)

  str1.each_char do |char|
    hash[char] += 1
  end

  str2.each_char do |char|
    hash[char] += 1
  end

  # 'gizmo' 'sally' => { g => 1, i => 1, z => 1, m => 1, s => 1, l => 2, y => 1 } false 1,1,1,1,1,2
  # 'elvis' 'lives' => { e => 2, l => 2, v => 2, i => 2, s => 2 } true
  # 'hello' 'sally' => { h => 1, e => 1, l => 4, o => 1, a => 1, y => 1 } false
  # 'hello' 'elloh' => { h => 2, e => 2, l => 4, o => 2 } true
  
  hash.values.all? { |value| value.even? }

end