# Imperative programming in Ruby.

# can I do lambdas, assign functions to variables in ruby?
# I think so, maybe?

puts 'simple imperative map-reduce examples'

arr = [5, 10, 15, 20, 25]
puts 'input array     : ' + arr.to_s

# anonymous methods, just call proc on object
puts "\nuse procs, anonymous methods"

# map multiply by 2
a2 = []
arr.each{ |a| a2 << a*2 }
puts 'map: mult by 2  : ' + a2.to_s

# filter if > 12
a2 = []
arr.each{ |a|
  if (a > 12) then a2 << a end
}
puts 'filter: if > 12 : ' + a2.to_s

# reduce sum
a2 = 0
arr.each{ |a| a2 += a }
puts 'reduce: sum     : ' + a2.to_s

# wrap code in named methods, keep code DRY, reusable

# map returns another array
def multBy2(a1)
  a2 = []
  a1.each{ |a| a2 << a*2 }
  return a2
end

# big = 12

# filter uses boolean
def filterBig(a1)
  big = 12
  a2 = []
  a1.each{ |a|
    if (a > big) then a2 << a end
  }
  return a2
end

# reduce returns single value
def sumArray(a1)
  a2 = 0
  a1.each{ |a| a2 += a }
  return a2
end

puts "\nuse named methods for code reuse"
puts 'map: mult by 2  : ' +  multBy2(arr).to_s
puts 'filter: if > 12 : ' + filterBig(arr).to_s
puts 'reduce: sum     : ' + sumArray(arr).to_s

