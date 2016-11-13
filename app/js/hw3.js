/*
ДЗ - 1:

написать модуль, который экспортирует аналоги методов для работы с массивами:
forEach, filter, map, slice, reduce, splice  пример:

let array = [1, 2, 3, 4, 5, 6];
forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let sqare = map(array, item => item*item);

Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.
     
Реализация функции splice является задачей со звездочкой.
Ее выполнение не обязательно, но желательно.

Внимание:
 в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные 
операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'
*/

Array.prototype.forEach = function(callback, thisArg) {
    var T;
    if (arguments.length > 1) {
      T = thisArg;
    }
    for (var i = 0; i < this.length; i++) {
        callback.call(T, this[i], i, this);
    }
};

Array.prototype.filter = function(callback, thisArg) {
    var T;
    if (arguments.length > 1) {
      T = thisArg;
    }
	var result = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(T, this[i], i, this)){
        	result[result.length] = (this[i]);
        }
    }
    return result;
};

Array.prototype.map = function(callback, thisArg) {
    var T;
    if (arguments.length > 1) {
      T = thisArg;
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result[result.length] = callback(this[i]);
    }
    return result;
};

function printBr(element, index, array) {
    console.log(index + " is " + element + " array: " + array);
}

[12, 5, 8, 130, 44].forEach(printBr);

function isBigEnough(value) {
  return value > 8;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles);
