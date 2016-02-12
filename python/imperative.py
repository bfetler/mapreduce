# imperative programming in Python

arr = [5, 10, 15, 20, 25]

print 'input array:', arr

# anonymous methods
# map
a2 = []
for a in arr:
    a2.append(a * 2)

print 'map: mult by 2:', a2

big = 12

# filter
a2 = []
for a in arr:
    if a > big:
        a2.append(a)

print 'filter: bigger than', big, ':', a2

# reduce
a2 = 0
for a in arr:
    a2 += a

print 'reduce: sum:', a2

print 'named methods for code reuse'
def multBy2(ar):
    a2 = []
    for a in ar:
        a2.append(a * 2)
    return a2

def filterBig(ar):
    a2 = []
    for a in ar:
        if a > big:
            a2.append(a)
    return a2

def sumArray(ar):
    a2 = 0
    for a in arr:
        a2 += a
    return a2

print 'map: mult by 2:', multBy2(arr)
print 'filter: if >', big, ':', filterBig(arr)
print 'reduce: sum:', sumArray(arr)

# define my own functions
def mymap(func, ar):
    rr = []
    for a in ar:
        rr.append( func(a) )
    return rr

def myfilter(func, ar):
    rr = []
    for a in ar:
        if func(a):
            rr.append( a )
    return rr

def myreduce(func, ar, initval=0):
    sum = initval
    if type(ar[0]) == str:
        if type(initval) != str:
            sum = ''
    for a in ar:
        sum = func(sum, a)
    return sum

print 'mymap: mult by 2:', mymap( (lambda x: x * 2), arr)
print 'myfilter: filter >', big, ':', myfilter( (lambda x: x > big), arr)
# cases work the same as builtin map, filter
print 'myfilter: mult by 2:', myfilter( (lambda x: x * 2), arr)
print 'mymap: filter >', big, ':', mymap( (lambda x: x > big), arr)
print 'myreduce: sum:', myreduce( (lambda x,y: x + y), arr, 5)
print 'myreduce: sum str:', myreduce( (lambda x,y: x + y), ['a', 'b', 'c'])
print 'myreduce: sum str:', myreduce( (lambda x,y: x + y), ['a', 'b', 'c'], 'd')


