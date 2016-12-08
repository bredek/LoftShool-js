function Calculator(firstNumber) {
    this.numberSum = firstNumber;
    this.numberDif = firstNumber;
    this.numberDiv = firstNumber;
    this.numberMul = firstNumber;
}

Calculator.prototype.sum = function () {
    for (let i = 0; i < arguments.length; i++) {
        this.numberSum += arguments[i]
    }
    return this.numberSum;
};

Calculator.prototype.diff = function () {
    for (let i = 0; i < arguments.length; i++) {
        this.numberDif -= arguments[i]
    }
    return this.numberDif;
};

Calculator.prototype.div = function () {
    for (let i = 0; i < arguments.length; i++) {
        try {
            if (arguments[i] === 0) {
                throw  new Error('Division by zero!')
            }
        } catch (e) {
            console.log(e.message);
        }
        this.numberDiv /= arguments[i]
    }

    return this.numberDiv;
};

Calculator.prototype.mul = function () {
    for (let i = 0; i < arguments.length; i++) {
        this.numberMul *= arguments[i]
    }

    return this.numberMul;
};

let myCalculator = new Calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.diff(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400



function SqrtCalculator(firstNumber) {
    Calculator.apply(this, arguments)
}

SqrtCalculator.prototype = Object.create(Calculator.prototype);

SqrtCalculator.prototype.sum = function () {
    console.log("SQRT calculations")
    Calculator.prototype.sum.apply(this, arguments);
    return this.numberSum *= this.numberSum;
};

let mySqrCalculator = new SqrtCalculator(100);


console.log(mySqrCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
