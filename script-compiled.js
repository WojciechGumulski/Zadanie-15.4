'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Zadanie 1

var a = 'Hello';
var b = 'World!';
var c = a + ' ' + b;

console.log(c);

//Zadanie 2

var x = prompt('podaj wartość x');
var y = prompt('podaj wartość y');
var multiple = function multiple(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log('' + multiple(x, y));

//Zadanie 3

var suma = 0;
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return suma = suma + arg;
  });return suma = suma / args.length;
};

average(5, 2, 3, 1);
console.log('' + suma);

//Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var first = grades[0],
    second = grades[1],
    rest = grades.slice(2);

suma = 0;
console.log(average.apply(undefined, [first, second].concat(_toConsumableArray(rest))));

//Zadanie 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName);
console.log(lastName);
