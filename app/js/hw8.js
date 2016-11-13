function timer(time) {
    return new Promise((resolve, reject) => {
        if (time > 5) {
            reject();
        }
        else {
            setTimeout(function () {
                resolve();
            }, time * 1000);
        }
    });
}

timer(3).then(
    function () {
        console.log('Correct!');
    },
    function () {
        console.log('Error!');
    }
);