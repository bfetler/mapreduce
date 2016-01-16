# funcprog
### Map Reduce

[_Map Reduce_](https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/) is one of the common idioms in modern programming languages, usually associated with functional programming techniques.  In [_Functional Programming_](https://en.wikipedia.org/wiki/Functional_programming), functions may be assigned to variables, and functions (anonymous or not) may be passed as arguments to other functions.

The _Map Reduce_ idiom usually includes the Map, Filter, and Reduce functions. While it is possible to write such data transforms using imperative code, functional methods may be easier to read and reason 
about, and usually use immutable arrays and are optimized for execution speed.

A few simple examples of Map Reduce are given in the directories.

ruby
+ imperative.rb shows imperative programming examples of map, filter, and reduce methods.
+ functional.rb show functional programming examples of map, filter, and reduce methods.  Blocks and lambdas are helpful when writing functional ruby code.

javascript
+ imperative.js shows imperative programming examples of map, filter, and reduce functions.
+ functional.js shows functional programming using map, filter, and reduce functions.  It has
 fewer variable declarations, and is easier to read and understand.

#### Programming Style
Neither Ruby nor JavaScript are pure functional languages, but they have functional elements.  One can take advantage of functional elements in them to write better, more organized code.  
+ Ruby is an OO language with classes and objects.  Some parts can be written in either a functional or imperative style.
+ JavaScript has objects and prototypes (objects inherit from other objects).  It can also be written in either a functional or imperative style.
