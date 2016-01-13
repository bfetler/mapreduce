# Functional programming in Ruby.

puts 'simple functional map-reduce examples'

arr = [5, 10, 15, 20, 25]
puts "input array     : " + arr.to_s

# anonymous methods
puts "\nuse procs, anonymous methods"

# map mult by 2
a2 = arr.map { |a| a*2 }
puts "map: mult by 2  : " + a2.to_s

@big = 12

# filter if > 12
a2 = arr.select { |a| a > @big }
puts "filter: if > #{@big} : " + a2.to_s

# reduce sum
a2 = arr.reduce { |a,b| a + b }
puts "reduce: sum     : " + a2.to_s

a2 = arr.reduce(:+)
puts "reduce: sum+    : " + a2.to_s


# wrap code in named methods, keep code DRY, reusable

def doubleItem(a)
  return a*2
end

# map returns another array
def multBy2(a1)
  return a1.map { |a| doubleItem(a) }
end

# filter uses boolean
def filterBig(a1)
  return a1.select { |a| a > @big }
end

# reduce returns single value
def sumArray(a1)
  return a1.reduce { |a, b| a + b }
end

puts "\nuse named methods for code reuse"
puts "map: mult by 2  : " +  multBy2(arr).to_s
puts "filter: if > #{@big} : " + filterBig(arr).to_s
puts "reduce: sum     : " + sumArray(arr).to_s


# fun with ruby
puts "\nfun with map filter reduce"

puts "bang methods replace input variable, not pure FP"

# map mult by 2
arr.map! { |a| rand(30) }.sort!
puts "input array      : " + arr.to_s

arr.map! { |a| a*2 }
puts "map!: mult by 2  : " + arr.to_s

# filter if > 24
arr.select! { |a| a > 24 }
puts "select!: if > 24 : " + arr.to_s

# reduce sum
begin
# reduce! method does not exist.  
a2 = arr.reduce! { |a,b| a + b }
rescue NoMethodError => e
  puts e.message
end

bowie = ['turn', 'and', 'face', 'the', 'strange', 'changes']
puts "\nbowie says: " + bowie.map { |b| b[0..1] + '-' + b }.to_s

# Questions.
#
# 1. Why does Array.reduce! not exist?
#
# 2. The basic elements of MapReduce methods are:
#        map    - Array returns Array
#        filter - Array returns Array using a boolean
#        reduce - Array returns a single object
#
#    Which MapReduce elements are used in:
#        Array.reject() ?
#        Array.join() ?
#        Array.find() ?
#        Array.zip() ?
#
# 3. For all methods in Array.methods.sort, how many use elements of
#    map, filter, reduce?
#
# 4. For all methods in Hash.methods.sort, how many use elements of
#    map, filter, reduce?
#


