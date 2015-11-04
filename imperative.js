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
// filter array using boolean, return elements that match
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
    result = 'map output: [' + multBy2b(arr) + ']';
    document.getElementById('mapOutput').innerHTML = result;
  };
  document.getElementById('filterIt').onclick = function() {
    result = 'filter output: [' + filterBigA(arr) + ']';
    document.getElementById('filterOutput').innerHTML = result;
  };
  document.getElementById('reduceIt').onclick = function() {
    result = 'reduce sum output: [' + sumA(arr) + ']';
    document.getElementById('reduceOutput').innerHTML = result;
  };
};

