# Functional programming in Ruby.

puts 'simple functional map-reduce examples'

arr = [5, 10, 15, 20, 25]
puts "input array            : " + arr.to_s

# blocks ~ anonymous methods
puts "\nuse blocks, similar to anonymous methods"

# map mult by 2
a2 = arr.map { |a| a*2 }
puts "map: mult by 2         : " + a2.to_s

@big = 12

# filter if > 12
a2 = arr.select { |a| a > @big }
puts "filter: if > #{@big}        : " + a2.to_s

# reduce sum
a2 = arr.reduce { |a,b| a + b }
puts "reduce: sum            : " + a2.to_s

# use named methods, DRY reusable code

def doubleIt(e)
  return e*2
end

# map returns another array
def multBy2(a1)
  return a1.map { |e| doubleIt(e) }
end

# filter uses boolean
def filterBig(a1)
  return a1.select { |e| e > @big }
end

# reduce returns single value
def sumArray(a1)
  return a1.reduce { |a, b| a + b }
end

puts "\nuse named methods for code reuse"
puts "map: mult by 2         : " +  multBy2(arr).to_s
puts "filter: if > #{@big}        : " + filterBig(arr).to_s
puts "reduce: sum            : " + sumArray(arr).to_s


# use a named lambda in place of block, keep code DRY, reusable
puts "\nuse named lambda references instead of blocks for code reuse"

doubleItem = lambda { |e| e*2 }
a2 = arr.map &doubleItem
puts "map: lambda doubleItem : " + a2.to_s

gt12 = lambda { |e| e > @big }
a2 = arr.select &gt12
puts "select: lambda gt12    : " + a2.to_s

summit = lambda { |a,b| a + b }
a2 = arr.reduce &summit
puts "reduce: lambda sum     : " + a2.to_s


# fun with ruby
puts "\nfun with map select reduce"

puts "\nmap-reduce can use symbols or references for methods, Procs or lambdas"
puts "input array            : " + arr.to_s

a2 = arr.map &:odd?
puts "map: ref odd?          : " + a2.to_s

a2 = arr.select &:odd?
puts "select: ref odd?       : " + a2.to_s

a2 = arr.reduce &:+
puts "reduce: ref symbol +   : " + a2.to_s

a2 = arr.reduce :+
puts "reduce: symbol +       : " + a2.to_s

# use a named proc instead of block
multBy3 = Proc.new{ |e| e*3 }
a2 = arr.map &multBy3
puts "map: Proc multBy3       : " + a2.to_s

# use anonymous lambda, but it's just a longer version of block
a2 = arr.map &lambda { |e| e*3 }
puts "map: lambda triple     : " + a2.to_s

def dblItem(item)
  return item * 2
end
begin
  a2 = arr.map &dblItem
  puts "map: def dblItem     : " + a2.to_s
rescue ArgumentError => e
  puts 'map: def dblItem, ' + e.message
end

# generally not a good idea to extend builtin classes
class Fixnum
  def dbl
    self * 2
  end
end
a2 = arr.map &:dbl
puts "map: class def dbl     : " + a2.to_s

puts "\nbang methods replace input variable, not pure FP"

# map mult by 2
arr.map! { |a| rand(30) }.sort!
puts "input array            : " + arr.to_s

arr.map! { |a| a*2 }
puts "map!: mult by 2        : " + arr.to_s

# filter if > 24
arr.select! { |a| a > 24 }
puts "select!: if > 24       : " + arr.to_s

# reduce sum
begin   # method does not exist
  a2 = arr.reduce! { |a,b| a + b }
rescue NoMethodError => e
  puts e.message
end

bowie = ['turn', 'and', 'face', 'the', 'strange', 'changes']
# puts "\nbowie says: " + bowie.map { |b| b[0..1] + '-' + b }.to_s
puts "\nbowie says: " + bowie.map { |b| b[0] + '-' + b }.to_s

# Questions.
#
# 1. Why does Array.reduce! not exist?
#
# 2. The basic elements of MapReduce methods are:
#        map    - Array returns Array
#        filter - Array returns Array filtered by a boolean
#        reduce - Array returns a single object
#
#    Which MapReduce elements are used in the following?  How
#    might they be implemented?
#        Array.reject() ?
#        Array.join() ?
#        Array.find() ?
#        Array.zip() ?
#
# 3. For all methods in Array.methods.sort, how many use elements of
#    map, filter, reduce?
#
# 4. For all methods in Hash.methods.sort and Set.methods.sort, how
#    many use elements of map, filter, reduce?
#
# 5. Are map, select and reduce functional?  Yes, in the sense they
#    do not modify external parameter state.  They modify only interal
#    parameters within the block.  They can use procs or lambdas in
#    place of a block.
#
# 6. Are map! and select! functional?  No, in the sense they modify
#    state of external parameters.  But they are convenient methods
#    for doing common actions.
#
# 7. For map, select, and reduce to take symbols or references, it's
#    easiest to use named Procs or lambdas, or to use builtin methods
#    on the element class.
#    It's generally not a good idea to add methods to builtin classes
#    as it will add clutter to the namespace.  But you can extend
#    builtin classes, e.g. MyNum < Fixnum.  
#


