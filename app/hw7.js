function removeClassName(elem, name) {
    var remClass = elem.className;
    var re = new RegExp('(^| )' + name + '( |$)');
    remClass = remClass.replace(re, '$1');
    remClass = remClass.replace(/ $/, '');
    elem.className = remClass;
}
function removeTrigers(parentDiv, className) {
    for (var i = 0; i < parentDiv.length; i++) {
        removeClassName(parentDiv[i], className);
    }
}
window.addEventListener('load', function () {
    var trigger = document.querySelector('ul.accordeon-list');
    var allTrigeredElements = document.querySelectorAll('.accordeon-content');
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('accordeon-item')) {
            if (e.target.childNodes) {
                for (var i = 0; i < e.target.childNodes.length; i++) {
                    if (e.target.childNodes[i].classList) {
                        if (e.target.childNodes[i].classList.contains('accordeon-content')) {
                            var triggerEl = e.target.childNodes[i];
                            removeTrigers(allTrigeredElements, 'show-accordeon-item');
                            triggerEl.classList.add('show-accordeon-item');
                        }
                    }
                }
            }
        } else if (e.target.classList.contains('accordeon-trigger')){
            removeTrigers(allTrigeredElements, 'show-accordeon-item');
            e.target.nextElementSibling.classList.add('show-accordeon-item');
        }
    });
});

function generateRandom(from, to) {
    return Math.ceil(Math.random() * (from-to)) + to;
}

function generateNewDiv() {
    var newDiv = document.createElement('div');
    var parent = document.querySelector('.wrapper-generator');
    parent.appendChild(newDiv);
    newDiv.innerText = generateRandom(100, 300) + ", " + generateRandom(100, 300);
}


var generateID = document.getElementById('generateBtn');
generateID.addEventListener('click', function (e) {
    generateNewDiv();
});