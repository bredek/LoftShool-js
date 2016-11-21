function getCookies() {
    var cookiesArray = [];
    document.cookie.split('; ').forEach(function (cookie) {
        cookiesArray.push(cookie.split('='));
    });
    return cookiesArray;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}

function generateDomCookies(cookies) {
    var cookieContainer = document.createElement('div');
    cookieContainer.classList += 'cookie-holder';
    cookies.forEach(function (cookie) {
        var cookieElement = document.createElement('div');
        var deleteElement = document.createElement('button');
        deleteElement.innerText = 'Delete cookie';
        deleteElement.classList = 'delete';
        cookieElement.classList += 'cookie__element';
        cookieElement.innerHTML += '<p class="cookie__name">' + cookie[0] + ':' + cookie[1] + '</p>';
        cookieElement.appendChild(deleteElement);
        cookieContainer.appendChild(cookieElement);
    });
    document.body.appendChild(cookieContainer);
}

(function () {
    window.addEventListener('load', function () {
        generateDomCookies(getCookies());
        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('delete')) {
                if (window.confirm("Do you really want to delete this cookie?")) {
                    deleteCookie(e.target.parentNode.firstChild.innerText.split(':')[0]);
                    e.target.parentNode.remove();
                }
            }
            if (e.target.classList.contains('submit')) {
                e.preventDefault();
                console.log(document.forms[0]);
                var cookieName = document.forms[0].elements.cookieName.value;
                var cookieValue = document.forms[0].elements.cookieValue.value;
                var cookieDate = document.forms[0].elements.cookieDate.value;
                if(document.forms[0].elements.cookieName.value && document.forms[0].elements.cookieValue.value && document.forms[0].elements.cookieDate.value){
                    var date = new Date;
                    date.setDate(date.getDate() + cookieDate);
                    setCookie(cookieName, cookieValue, {
                        expires: date.toUTCString()
                    });
                    alert('Cookie set!');
                    document.querySelector('.cookie-holder').remove();
                    document.forms[0].reset();
                    generateDomCookies(getCookies());
                }
                else{
                    alert('Set ALL cookie data!');
                }
            }
        })
    })
})();