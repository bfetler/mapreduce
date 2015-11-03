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
//        return item * 2;  // may be more complex
          return doubleItem(item);
        });
      };
      var isBiggerThan16 = function(item) {
        return item > 16;
      };
      var filterBigF = function(arr) {
//      return arr.filter(function(item) {
//        return item > 16;
//      });
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
      var add2 = function(a, b) {
        return a + b;
      };
      var sumF = function(arr) {
//      return arr.reduce(function(a, b) {
//        return a + b;
//      });
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
        var outPut = document.getElementById('output');
        var arr = [5, 10, 15, 20, 25];
        outPut.innerHTML = 'input array: ' + arr;
        var input = document.getElementById('clickme');
        input.innerHTML = 'Input array: ' + arr + ' (' + input.innerHTML+')';
//      document.getElementById('clickme').onclick = function() {
        input.onclick = function() {
          var result = 'output: ';
//        result += arr;
          result += multBy2f(arr);
          outPut.innerHTML = result;
        };
      };

