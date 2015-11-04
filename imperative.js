// Imperative programming in JavaScript.
// It works, but not elegant.

// do operation on each array element : see map
var multBy2A = function(arr) {
  var newarr = [];     // local variables - better
  for (var i in arr) {
    newarr[i] = 2 * arr[i];  // operation: multiply by 2
  }
  return newarr;
};
var multBy2Bad = function(arr) {
  newarr = [];       // global variable - bad
  for (i in arr) {   // global variable - bad
    newarr[i] = 2 * arr[i];  // multiply by 2
  }
  return newarr;
};

// return array elements matching boolean expression : see filter
var filterBigA = function(arr) {
  var newarr = [];
  var j = 0;
  for (var i in arr) {
    if (arr[i] > 16) {      // boolean
      newarr[j++] = arr[i];
    }
  }
  return newarr;
};

// return operation on all elements : see reduce
var sumA = function(arr) {
  var sum = 0;
  for (i in arr) {
    sum += arr[i];  // sum operation
  }
  return sum;
};

window.onload = function() {
  var arr = [5, 10, 15, 20, 25];
  var input = document.getElementById('input');
  var result;
  input.innerHTML = '[' + arr + ']';
  document.getElementById('mapIt').onclick = function() {
    result = '[' + multBy2A(arr) + ']';
    document.getElementById('mapOutput').innerHTML = result;
  };
  document.getElementById('filterIt').onclick = function() {
    result = '[' + filterBigA(arr) + ']';
    document.getElementById('filterOutput').innerHTML = result;
  };
  document.getElementById('reduceIt').onclick = function() {
    result = 'sum: ' + sumA(arr);
    document.getElementById('reduceOutput').innerHTML = result;
  };
};
