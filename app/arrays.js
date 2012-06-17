if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(x,y){
        return x+y;
      });
    },

    remove : function(arr, item) {
      return arr.filter(function(a){
        return a != item;
      });
    },

    append : function(arr, item) {
      arr.push(item);
      return arr
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var counter = 0;
      arr.forEach(function(i){
        if(i == item){
          counter = counter + 1;
        }
      });
      return counter;
    },

    duplicates : function(arr) {
      return arr.reduce(function(acc, curr, i){
        if(arr.indexOf(curr, i+1) != -1){
          acc.push(curr);
        }
        return acc;
      },[]);
    },

    square : function(arr) {
      return arr.map(function(i){
        return i*i;
      });
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(acc, curr, i){
        if(curr == target){
          acc.push(i);
        }
        return acc;
      },[]);
    }
  };
});
