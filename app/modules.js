if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(greeting, name) {
      var C = function(greeting, name){
        this.greeting = greeting;
        this.name = name;
      }
      C.prototype.sayIt = function(){
        return this.greeting + ", " + this.name;
      }
      return new C(greeting, name);
    }
  };
});

