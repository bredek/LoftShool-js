/*
# ДЗ - 1

Создать модуль, который экспортирует функцию `prepend`
prepend имеет два параметра, в которые нужно передать элементы
Задача функции - вставить второй элемент в начало первого. Например:
`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.
*/

Node.prototype.prepend = function(newElement) {
    this.insertBefore(this.firstChild, newElement)
}

var container = document.getElementById('parent'),
    newElement = document.createElement('p');

newElement.innerHTML = "Hello! This is a new line!";
container.prepend(newElement);


/*
# ДЗ - 2

Создать модуль, который экспортирует функцию `deleteTextNodes`
Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.
*/

Node.prototype.deleteTextNodes = function() {
    var children = this.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType === 3) {
            this.removeChild(children[i]);
        }
    }
}

container.deleteTextNodes();

/*
# ДЗ - 3(со звездочкой)
Реалзиовать функцию, описанную в ДЗ 2, рекурсивно
*/

(function rec(el) {
	debugger;
    console.dir("Current element: " + el);
    console.dir("Element type: " + el.nodeType);
    if (children[i].nodeType === 3){
        el.parentNode.removeChild(el);
    }
    if (el.hasChildNodes()) {
        var childs = el.childNodes,
            i = childs.length;
        while (i--) {
            rec(childs[i]);
        }

    }

}(document.body));
