/*
# ДЗ 1:
Написать функцию 'isAllTrue', которая принимает 2 параметра - 'source' и 'filterFn'
source - массив
'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' для ВСЕХ элементов массива, то и сама 'isAllTrue' вернет 'true'
Если фильтрующая функция вернет 'false' хотя бы для одного элемента массива, то и сама 'isAllTrue' вернет 'false'

пример:
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

Выбрасывать и обрабатывать исключение, если в 'source' пустой массив.
*/

function isAllTrue(source, filterFn) {
    if (source === undefined || source.length == 0) {
        throw new Error("The sourse array is empty!");
    }
    try {
        var i = 0;
        for (i; i < source.length; i++) {
            if (filterFn(source[i])) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    } catch (e) {
        console.error(e.message);
    }
}

/*
# ДЗ - 2
Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
'source' - массив
'filterFn' - фильтрующая функция

Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'

Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
Так же, нельзя использовать функции для работы с массивами.

пример:
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
*/

function isSomeTrue(source, filterFn) {
    if (source === undefined || source.length == 0) {
        throw new Error("The sourse array is empty!");
    }
    try {
        var i = 0;
        for (i; i < source.length; i++) {
            if (!filterFn(source[i])) {
                continue;
            } else {
                return true;
            }
        }
        return false;
    } catch (e) {
        console.error(e.message);
    }
}

/*
# ДЗ 3 (со звездочкой)
Написать функцию 'calculator' (в виде модуля), которая имеет один параметр - 'firstNumber'
'firstNumber' - это число, с которым будут производиться действия
Функция 'calculator' должна возвращать объект, у которого должно быть несколько функций.
Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
- 'sum' - складывает 'firstNumber' с переданным аргументами
- 'dif' - вычитает из 'firstNumber' переданные аргументы
- 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
- 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю

пример:
var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
*/

function calculator(firstNumber) {
    return {
        getArguments: function(arguments) {
            return [].slice.call(arguments);
        },
        sum: function() {
            var funcArgument = this.getArguments(arguments),
                result = firstNumber;
            for (var i = 0; i < funcArgument.length; i++) {
                result += funcArgument[i];
            }
            return result;
        },
        dif: function() {
            var funcArgument = this.getArguments(arguments),
                result = firstNumber;
            for (var i = 0; i < funcArgument.length; i++) {
                result -= funcArgument[i];
            }
            return result;
        },
        div: function() {
            var funcArgument = this.getArguments(arguments),
                result = firstNumber;
            for (var i = 0; i < funcArgument.length; i++) {
                if (funcArgument[i] === 0) {
                    throw new Error("Division by zero!");
                }
                try {
                    result /= funcArgument[i];
                } catch (e) {
                    console.error(e.message);
                }

            }
            return result;
        },
        mul: function() {
            var funcArgument = this.getArguments(arguments),
                result = firstNumber;
            for (var i = 0; i < funcArgument.length; i++) {
                result *= funcArgument[i];
            }
            return result;
        }
    }
}

var hw2 = {
    init: function() {
        // TESTING
        var allNumbers = [1, 2, 3, 4, 5, 6],
            someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
            noNumbers = ['это', 'массив', 'без', 'чисел'];

        function isNumber(val) {
            return typeof val === 'number';
        }

        console.log(isAllTrue(allNumbers, isNumber)); //вернет true
        console.log(isAllTrue(someNumbers, isNumber)); //вернет false
        console.log(isAllTrue(noNumbers, isNumber)); //вернет false

        console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
        console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
        console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

        var myCalculator = calculator(100);

        console.log(myCalculator.sum(1, 2, 3)); //вернет 106
        console.log(myCalculator.dif(10, 20)); //вернет 70
        console.log(myCalculator.div(2, 2)); //вернет 25
        console.log(myCalculator.mul(2, 2)); //вернет 400
    }
}

hw2.init();
