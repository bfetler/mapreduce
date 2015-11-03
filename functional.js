// multiply each element of array using map 
var doubleItem = function(item) {
  return item * 2;  // may be more complex or reusable function
};
var multBy2f = function(arr) {
  return arr.map(function(item) {
//  return item * 2;  // may be more complex
    return doubleItem(item);
  });
};
// filter array using boolean, return elements that match
var isBiggerThan16 = function(item) {
  return item > 16;
};
var filterBigF = function(arr) {
//return arr.filter(function(item) {
//  return item > 16;
//});
  return arr.filter(isBiggerThan16);
};
// return operation on all elements using reduce
var add2 = function(a, b) {
  return a + b;
};
var sumF = function(arr) {
//return arr.reduce(function(a, b) {
//  return a + b;
//});
  return arr.reduce(add2);
};

window.onload = function() {
  var arr = [5, 10, 15, 20, 25];
  var input = document.getElementById('input');
  var result;
  input.innerHTML = 'Input array: [' + arr + ']';
  document.getElementById('mapIt').onclick = function() {
    result = 'map output: [' + multBy2f(arr) + ']';
    document.getElementById('mapOutput').innerHTML = result;
  };
  document.getElementById('filterIt').onclick = function() {
    result = 'filter output: [' + filterBigF(arr) + ']';
    document.getElementById('filterOutput').innerHTML = result;
  };
  document.getElementById('reduceIt').onclick = function() {
    result = 'reduce sum output: [' + sumF(arr) + ']';
    document.getElementById('reduceOutput').innerHTML = result;
  };
};

