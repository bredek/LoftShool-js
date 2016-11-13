function generateRandom(from, to) {
    return Math.ceil(Math.random() * (from - to)) + to;
}

function generateRandomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += generateRandom(0, 9);
    }
    return color;
}

function generateNewDiv() {
    var w = window.innerWidth,
        h = window.innerHeight,
        newDiv = document.createElement('div'),
        parent = document.querySelector('.wrapper-generator');

    newDiv.classList += 'drag-n-drop';
    parent.appendChild(newDiv);
    //styling
    newDiv.style.position = 'absolute';
    newDiv.style.background = generateRandomColor();
    newDiv.style.width = generateRandom(100, 300);
    newDiv.style.height = generateRandom(100, 300);
    newDiv.style.left = generateRandom(0, w);
    newDiv.style.top = generateRandom(0, h);
}

var globalX, globalY, activeElement, generateID = document.getElementById('generateBtn');

generateID.addEventListener('click', function () {
    generateNewDiv();
});

document.body.addEventListener('mousemove', function (e) {
    activeElement.style.left = (e.clientX - globalX) + 'px';
    activeElement.style.top = (e.clientY - globalY) + 'px';
});


document.body.addEventListener('mouseup', function (e) {
    if (e.target.classList.contains('drag-n-drop')) {
        activeElement = null;
    }
});

document.body.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('drag-n-drop')) {
        activeElement = e.target;
        globalX = e.offsetX;
        globalY = e.offsetY;
    }
});