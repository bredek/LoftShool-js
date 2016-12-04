/*
 *  1. ƒ« 1:
 —оздать модуль, который экспортирует функцию `timer`.
 ‘ункци€ `timer` должна возвращать новый промис.
 ‘ункци€ `timer` принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состо€ние `fulfilled`.
 ѕример использовани€:
 timer(3000).then(() => console.log('€ вывелась через 3 секунды'))
 * */
// (function () {
//     function timer(time) {
//         return new Promise((resolve, reject) => {
//             if (time > 5) {
//                 reject();
//             }
//             else {
//                 setTimeout(function () {
//                     resolve();
//                 }, time * 1000);
//             }
//         });
//     }
//
//     timer(3).then(
//         function () {
//             console.log('Correct!');
//         },
//         function () {
//             console.log('Error!');
//         }
//     );
// })();

/*
 * 2. ƒ« 2:
 «агрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
 ќтсортировать города по алфавиту и вывести на странице.
 »спользование промисов об€зательно.
 «апрещено использование любых библиотек (включа€ jQuery) и фреймворков.
 */

(function () {
    // function getAJAX(url) {
    //     return new Promise(function (resolve, reject) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.addEventListener('load', function () {
    //             // console.log(xhr.responseType);
    //             resolve(xhr.responseText);
    //             // console.log(JSON.parse(xhr.responseText));
    //         });
    //         xhr.addEventListener('error', function () {
    //             // console.dir();
    //             reject("Everything is fucked up! Check console...");
    //
    //         });
    //         xhr.send();
    //     });
    // }
    //
    // getAJAX('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(function (response) {
    //         var t = document.getElementById('sendXHR');
    //         t.addEventListener('click', function () {
    //             var newEl = document.createElement('p');
    //             newEl.innerText = response;
    //             document.body.appendChild(newEl);
    //         });
    //     },
    //     function (message) {
    //         var newEl = document.createElement('p');
    //         newEl.innerText = message;
    //         document.body.appendChild(newEl);
    //     });
})();

/*
 * 3. ƒ« 3 (со звездочкой):
 —оздать страничку с текстовым полем.
 ѕосле загрузки странички, загрузить список городов при помощи AJAX.
 ѕри вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названи€х которых есть введенный текст.
 »спользование промисов об€зательно.
 «апрещено использование любых библиотек (включа€ jQuery) и фреймворков.
 * */

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

    var citiesArray = [];

    getAJAX('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(function (response) {
            var cities = JSON.parse(response);
            console.log(cities);
            cities.forEach(function (i, item) {
                for (var key in cities[item]) {
                    citiesArray.push(cities[item][key]);
                }
            });
            // console.log(citiesArray);
        },
        function (message) {
            var newEl = document.createElement('p');
            newEl.innerText = message;
            document.body.appendChild(newEl);
        });

    var input = document.getElementById('myInput');
    var newEl = document.createElement('p');
    var match = '';
    document.body.appendChild(newEl);
    input.addEventListener('keyup', function () {
        newEl.innerHTML += '';
        console.log(input.value);
        citiesArray.forEach(function (item) {
            if (input.value && item.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
                console.log(item);
                match += item + "<br>";
            }
        });
        newEl.innerHTML = match;
        match = '';
    });

})();