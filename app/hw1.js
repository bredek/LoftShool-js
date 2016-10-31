function consoleRec(input, index) {
    if (index < input.length) {
        console.log(input[index]);
        consoleRec(input, ++index);

    }
}

var hw1 = {
    init: function() {
        var testData = ['Ja', 'умею', 'писать', 'рекурсивные', 'функции'];
        consoleRec(testData, 0);
    }
}

hw1.init();
