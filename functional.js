// multiply each element of array using map 
var multBy2a = function(arr) {
  newarr = [];
  for (i in arr) {
    newarr[i] = 2 * arr[i];
  }
  return newarr;
};
var multBy2b = function(arr) {
  var newarr = [];
  for (var i in arr) {
    newarr[i] = 2 * arr[i];
  }
  return newarr;
};
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
var filterBigA = function(arr) {
  var newarr = [];
  var j = 0;
  for (var i in arr) {
    if (arr[i] > 16) {
      newarr[j++] = arr[i];
    }
  }
  return newarr;
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
var sumA = function(arr) {
  var sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
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

