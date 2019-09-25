'use strict';

(function () {
  window.utils = {};

  window.utils.randomInteger = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  window.utils.randomArrayElements = function (array, quantityElements) {
    var clone = array.slice();
    var runNumbers = [];

    for (var i = 0; i < quantityElements; i++) {
      var randomElement = Math.floor(Math.random() * clone.length);

      runNumbers.push(clone.splice(randomElement, 1));
    }

    return runNumbers;
  }

  window.utils.createNumericArray = function (quantityNumbers) {
    var array = [];
    var randomIndex;
    var tempVariable;

    for (var i = quantityNumbers; i > 0; i--) array.push(i);

    for (var i = 0; i < array.length - 1; i++) {
      randomIndex = window.utils.randomInteger(0, array.length - 1);
      tempVariable = array[randomIndex];
      array[randomIndex] = array[array.length - 1];
      array[array.length - 1] = tempVariable;
    }

    return array;
  }
})();
