/*
 *  1. ƒ« 1:
 —оздать модуль, который экспортирует функцию `timer`.
 ‘ункци€ `timer` должна возвращать новый промис.
 ‘ункци€ `timer` принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состо€ние `fulfilled`.
 ѕример использовани€:
 timer(3000).then(() => console.log('€ вывелась через 3 секунды'))
 * */
(function () {
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
})();

/*
 * 2. ƒ« 2:
 «агрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
 ќтсортировать города по алфавиту и вывести на странице.
 »спользование промисов об€зательно.
 «апрещено использование любых библиотек (включа€ jQuery) и фреймворков.
 */

(function () {
    function getAJAX(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', function () {
                // console.log(xhr.responseType);
                resolve(xhr.responseText);
                // console.log(JSON.parse(xhr.responseText));
            });
            xhr.addEventListener('error', function () {
                // console.dir();
                reject("Everything is fucked up! Check console...");

            });
            xhr.send();
        });
    }

    getAJAX('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(function (response) {
            var t = document.getElementById('sendXHR');
            t.addEventListener('click', function () {
                var newEl = document.createElement('p');
                newEl.innerText = response;
                document.body.appendChild(newEl);
            });
        },
        function (message) {
            var newEl = document.createElement('p');
            newEl.innerText = message;
            document.body.appendChild(newEl);
        });
})();