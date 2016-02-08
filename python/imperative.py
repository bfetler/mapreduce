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

