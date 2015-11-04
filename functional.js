// Functional programming, declarative style.
// Much better than imperative: 
//   Fewer global or local variables, immutable input data.

// multiply each element of array using map 
var doubleItem = function(item) {
  return item * 2;  // may be more complex, reusable function
};
var multBy2F = function(arr) {
  return arr.map(function(item) {
    return doubleItem(item);
  });
};
var multBy2E = function(arr) {
  return arr.map(function(item) {
    return item * 2;
  });
};

// filter array using boolean, return elements that match
var isBiggerThan16 = function(item) {
  return item > 16;    // boolean
};
var filterBigF = function(arr) {
  return arr.filter(isBiggerThan16);
};
var filterBigE = function(arr) {
  return arr.filter(function(item) {
    return item > 16;  // boolean
  });
  return arr.filter(isBiggerThan16);
};

// return operation on all elements using reduce
var add2 = function(a, b) {
  return a + b;    // sum operation
};
var sumF = function(arr) {
  return arr.reduce(add2);
};
var sumE = function(arr) {
  return arr.reduce(function(a, b) {
    return a + b;  // sum operation
  });
  return arr.reduce(add2);
};

window.onload = function() {
  var arr = [5, 10, 15, 20, 25];
  var input = document.getElementById('input');
  var result;
  input.innerHTML = '[' + arr + ']';
  document.getElementById('mapIt').onclick = function() {
    result = '[' + multBy2F(arr) + ']';
    document.getElementById('mapOutput').innerHTML = result;
  };
  document.getElementById('filterIt').onclick = function() {
    result = '[' + filterBigF(arr) + ']';
    document.getElementById('filterOutput').innerHTML = result;
  };
  document.getElementById('reduceIt').onclick = function() {
    result = 'sum: ' + sumF(arr);
    document.getElementById('reduceOutput').innerHTML = result;
  };
};

