// Functional programming.  Functions call other functions, use immutable input data.

// multiply each element of array using map 
var doubleItem = function(item) {  // local variable function name
  return item * 2;
};
var multBy2F = function(arr) {
  return arr.map(function(item) {
    return doubleItem(item);       // named inner function
  });
};

var multBy2E = function(arr) {
  return arr.map(function(item) {  // anonymous inner function
    return item * 2;
  });
};

var big = 12;

// filter array using boolean, return elements that match
var isBiggerThanBig = function(item) {
  return item > big;    // boolean
};
var filterBigF = function(arr) {
  return arr.filter(isBiggerThanBig);  // named inner function
};

var filterBigE = function(arr) {
  return arr.filter(function(item) {  // anonymous inner function
    return item > big;  // boolean
  });
};

// return operation on all elements using reduce
var add2 = function(a, b) {
  return a + b;    // sum operation
};
var sumF = function(arr) {
  return arr.reduce(add2);  // named inner function
};

var sumE = function(arr) {
  return arr.reduce(function(a, b) {  // anonymous inner function
    return a + b;  // sum operation
  });
};

var randomArray = function(arr) {
  return arr.map(function(item) {
    return Number.parseInt(30 * Math.random());
  });
};

window.onload = function() {
  var arr = [5, 10, 15, 20, 25];
  arr = randomArray(arr).sort(function(a,b){ return a-b });
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
    result = 'sum: ' + sumE(arr);
    document.getElementById('reduceOutput').innerHTML = result;
  };
};

