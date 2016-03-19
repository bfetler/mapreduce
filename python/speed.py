# tests of map, filter, reduce array speed operations

import sys
import time
import numpy as np
from functools import reduce   # python 3

# test speed of running through array using:
#   array access: for loop, map, list comp, recursion
#   compare with native C

# compare yield vs. return: yield for generators, gets next element

def time_delta(t1, t2):
    return t2 - t1

def print_time_stats(label, tarray):
    print("  %-18s: mean %.3f, std %.3f s" % (label, np.mean(tarray), np.std(tarray)))
#   print("  raw", tarray)
    sys.stdout.flush()

def speed_test():
    print("Dr. Evil: One Million Dollars?  Bwaahaahaahaaaa!")

#   bigs = [100000, 1000000, 3000000, 10000000]
    bigs = [100000, 1000000]

    loops = 10

    for big in bigs:
        a1 = list(range(big))

        print("\ncounting evil steps: %d  (10 ^ %.1f)" % (big, np.log10(big)))

# map
        tappend = []
        for i in range(loops):
            t1 = time.time()
            a2 = []
            for a in a1:
                a2.append(a*2)
            t2 = time.time()
            td = time_delta(t1, t2)
            tappend.append(td)
        print_time_stats("map append", tappend)

        tlambda = []
        for i in range(loops):
            t1 = time.time()
            a3 = list(map(lambda a: a*2, a1))
            t2 = time.time()
            td = time_delta(t1, t2)
            tlambda.append(td)
        print_time_stats("map lambda", tlambda)

        tlcomp = []
        for i in range(loops):
            t1 = time.time()
            a4 = [a*2 for a in a1]
            t2 = time.time()
            td = time_delta(t1, t2)
            tlcomp.append(td)
        print_time_stats("list comp", tlcomp)

# filter
        tappend = []
        big2 = big / 2
        for i in range(loops):
            t1 = time.time()
            a2 = []
            for a in a1:
                if a > big2:
                    a2.append(a*2)
            t2 = time.time()
            td = time_delta(t1, t2)
            tappend.append(td)
        print_time_stats("filter append", tappend)
    
        tlambda = []
        for i in range(loops):
            t1 = time.time()
            a3 = list(filter(lambda a: a > big2, a1))
            t2 = time.time()
            td = time_delta(t1, t2)
            tlambda.append(td)
        print_time_stats("filter lambda", tlambda)

# reduce
        tsum = []
        for i in range(loops):
            t1 = time.time()
            ssum = 0
            for a in a1:
                ssum += a
            t2 = time.time()
            td = time_delta(t1, t2)
            tsum.append(td)
        print_time_stats("reduce for loop", tsum)

        treduce = []
        for i in range(loops):
            t1 = time.time()
            rsum = reduce(lambda a,b: a+b, a1)
            t2 = time.time()
            td = time_delta(t1, t2)
            treduce.append(td)
        print_time_stats("reduce lambda", treduce)

# fun
        tlambda = []
        for i in range(loops):
            t1 = time.time()
            a3 = [a*2 for a in a1 if a > big2]
            t2 = time.time()
            td = time_delta(t1, t2)
            tlambda.append(td)
        print_time_stats("filter lambda", tlambda)


# main program
if __name__ == '__main__':
    speed_test()


