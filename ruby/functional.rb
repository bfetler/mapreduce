# Functional programming in Ruby.

# can I do lambdas, assign functions to variables in ruby?
# I think so, maybe?

# what if looping over two arrays?  can use map? zip?

puts 'simple functional map-reduce examples'

arr = [5, 10, 15, 20, 25]
puts 'input array     : ' + arr.to_s

# anonymous methods, just call proc on object
puts "\nuse procs, anonymous methods"

# map mult by 2
a2 = arr.map{ |a| a*2 }
puts 'map: mult by 2  : ' + a2.to_s

# filter if > 12
a2 = arr.select{ |a| a > 12 }
puts 'filter: if > 12 : ' + a2.to_s

# reduce sum
a2 = arr.reduce{ |a,b| a + b }
puts 'reduce: sum     : ' + a2.to_s

a2 = arr.reduce(:+)
puts 'reduce: sum+    : ' + a2.to_s

# add method to Array?
# def plus(a, b)
#   return a + b
# end

# a2 = arr.reduce(:plus)
# puts a2.to_s


# wrap code in named methods, keep code DRY, reusable

# map returns another array
def multBy2(a1)
  return a1.map { |a| a*2 }
end

# big = 12

# filter uses boolean
def filterBig(a1)
  big = 12
  return a1.select { |a| a > big }
end

# reduce returns single value
def sumArray(a1)
  return a1.reduce { |a, b| a + b }
# return a1.reduce(:+)
end

puts "\nuse named methods for code reuse"
puts 'map: mult by 2  : ' +  multBy2(arr).to_s
puts 'filter: if > 12 : ' + filterBig(arr).to_s
puts 'reduce: sum     : ' + sumArray(arr).to_s

