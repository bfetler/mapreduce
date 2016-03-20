# functional map-reduce in Python

from functools import reduce  # needed for python 3

arr = [5, 10, 15, 20, 25]

print('input array:', arr)
# use list() to store results for map / filter, needed in python 3

print('anonymous methods')
print('map: mult by 2:', list(map(lambda x: x * 2, arr)))

big = 12

print('filter: if >', big, ':', list(filter(lambda x: x > big, arr)))

print('reduce: sum:', reduce(lambda x,y: x + y, arr))

print('named methods (for code reuse)')
def multBy2(a2):
    return a2 * 2

def filterBig(a2):
    return (a2 > big)

def sum2(a, b):
    return (a + b)

def dblArray(ar):
    return list(map( multBy2, arr ))

def filtArray(ar):
    return list(filter( filterBig, arr ))

def sumArray(ar):
    return reduce( sum2, arr )

print('map: mult by 2:', dblArray(arr))
print('filter: if >', big, ':', filtArray(arr))
print('reduce: sum:', sumArray(arr))

# named lambda instead of def method - good for code reuse
mBy2 = lambda x: x*2
ifBig = lambda x: x > big
add2 = lambda x,y: x + y

def dbArray(ar):
    return list(map( mBy2, arr ))

def filArray(ar):
    return list(filter( ifBig, arr ))

def smArray(ar):
    return reduce( add2, arr )

print('map: mult by 2:', dbArray(arr))
print('filter: if >', big, ':', filArray(arr))
print('reduce: sum:', smArray(arr))

print('\nfun with python')
print('map: add two arrays:', list(map( sum2, [2,3,4], [10,11,12] )))
print('map: multiply three arrays:', list(map( (lambda a,b,c: a*b*c), \
        [2,3,4], [10,11,12], [-3,-2,-1])))
print('reduce: sum initval 10:', reduce( (lambda x,y: x + y), arr, 10))

# Q: are list comprehensions or tuple generators functional or imperative?  functional
# Q: which of the following methods are map-like, filter-like, or reduce-like?
#    join, all, min, max, zip, reversed, sorted
#    other methods?

print('list comprehension: map * 2:', [a * 2 for a in arr])
print('list comprehension: filter if >', big, ':', [a for a in arr if a > big])
a2 = [a + b for a in range(3) for b in range(3)]
print('list comprehension: map arr + arr:', a2)

tup = (6, 11, 16, 21, 26)
print('\ninput tuple:', tup)
print('tuple map: mult by 2:', tuple(map( lambda x: x * 2, tup )))
print('tuple filter: if >', big, ':', tuple(filter( lambda x: x > big, tup )))
print('tuple reduce: sum:', reduce( lambda x,y: x + y, tup ))
print('tuple generator: reduce sum list:', sum(a for a in arr))
print('tuple generator: reduce sum tuple:', sum(a for a in tup))

