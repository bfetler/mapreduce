# jsmapreduce
### JavaScript MapReduce

In [_Functional Programming_](https://en.wikipedia.org/wiki/Functional_programming), functions may be assigned to variables, and functions 
(anonymous or not) may be passed as arguments to other functions.

Functional Programming languages usually implement the [_MapReduce_](https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/) paradigm, 
including the Map, Filter, and Reduce functions.

While it is possible to write imperative _MapReduce_ code, functional methods are easier to read and reason 
about, and usually use immutable arrays and are optimized for execution speed.

A few simple examples of _MapReduce_ are given in the JavaScript files.
+ imperative.js shows imperative implementations of map, filter, and reduce functions.  It works, but isn't elegant.
+ functional.js shows functional programming using map, filter, and reduce functions.  It has
 fewer variable declarations, and is easier to read and understand.
