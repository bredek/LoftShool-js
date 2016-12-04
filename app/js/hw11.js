// Testing handlebars goes here
// let handlebarsTest = {
//     _registerHelpers: function () {
//         Handlebars.registerHelper('list', function (items, options) {
//             let out = "<ul>";
//             for (let i = 0, l = items.length; i < l; i++) {
//                 out = out + "<li>" + options.fn(items[i]) + "</li>";
//             }
//             return out + "</ul>";
//         });
//         Handlebars.registerHelper('link', function (text, url) {
//             url = Handlebars.escapeExpression(url);      //экранирование выражения
//             text = Handlebars.escapeExpression(text);
//             return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
//         });
//     },
//     _initCompiledContent: function (source, content) {
//         let template = Handlebars.compile(source),
//             html = template(content);
//
//         document.write(html);
//     },
//     init: function () {
//         let source = document.getElementById("entry-template").innerHTML,
//             content = {
//                 title: 'Testing hanldebars.js',
//                 author: {
//                     name: 'Eugene Bredyuk',
//                     age: 26
//                 },
//                 poem: {
//                     title: "Testing another cool feature",
//                     url: "someurl.com"
//                 },
//                 people: [
//                     {firstName: "Yehuda", lastName: "Katz"},
//                     {firstName: "Carl", lastName: "Lerche"},
//                     {firstName: "Alan", lastName: "Johnson"}
//                 ]
//             };
//
//         this._registerHelpers();
//         this._initCompiledContent(source, content);
//     }
// };
//
// handlebarsTest.init();
// Handlebars testing ends here

// Working sample starts here
let hw11_1 = {
    _sortCities: function (input) {
        let byName = input['cities'].slice(0);
        byName.sort(function(a,b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        input['cities'] = byName;
        return input;
    },
    _getAJAX: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', function () {
                resolve(xhr.responseText);
            });
            xhr.addEventListener('error', function () {
                reject("Everything is fucked up! Check console...");
            });
            xhr.send();
        });
    },
    _registerHelpers: function () {
        Handlebars.registerHelper('list', function (items, options) {
            let out = "<ul class='cities__list'>";
            for (let i = 0, l = items.length; i < l; i++) {
                out = out + "<li>" + options.fn(items[i]) + "</li>";
            }
            return out + "</ul>";
        });
    },
    _initCompiledContent: function (source, content) {
        let template = Handlebars.compile(source),
            html = template(content);
        document.write(html);
    },
    _processInput: function () {
        function addClass(o, c){
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
            if (re.test(o.className)) return
            o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        }

        function removeClass(o, c){
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
            o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        }

        let input = document.getElementById('myInput'),
            citiesElements = document.querySelectorAll('.cities__list li');

            input.addEventListener('keyup', function () {
            citiesElements.forEach(function (item) {
                if (input.value && item.innerText.toLowerCase().indexOf(input.value.toLowerCase()) == -1) {
                    addClass(item, 'hidden');
                } else{
                    removeClass(item, 'hidden');
                }
            });
        });
    },
    init: function () {
        let source = document.getElementById("hw11-template").innerHTML,
            that = this,
            cities;

        this._getAJAX('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
            .then(function (response) {
                    citiesObj = {
                        cities: JSON.parse(response)
                    },
                    that._registerHelpers();
                    that._initCompiledContent(source, that._sortCities(citiesObj));
                    that._processInput(that._sortCities(citiesObj));
                },
                function (message) {
                    var newEl = document.createElement('p');
                    newEl.innerText = message;
                    document.body.appendChild(newEl);
                });
    }
};

hw11_1.init();