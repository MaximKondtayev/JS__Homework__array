// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный


let list = [
    {
        "name": "Milk",
        "cost": 20,
        "count": 1,
        "bought": false,
    },
    {
        "name": "Beer",
        "cost": 30,
        "count": 6,
        "bought": true,
    },
    {
        "name": "Apple",
        "cost": 23,
        "count": 4,
        "bought": false,
    },
    {
        "name": "Smoke",
        "cost": 55,
        "count": 2,
        "bought": true,
    }
];


list.sort(function (a, b) {
    if (a.bought > b.bought) {
        return 1;
    }
    if (a.bought < b.bought) {
        return -1;
    }

    return 0;
});

console.log(list);

function printList(_list) {
    let _buf = '<ul>';
    for (const key in _list) {
        if (typeof _list[key] == 'object') {
            _buf += `<li>${key.toUpperCase()}: ${printList(_list[key])}</li>`;
        } else {
            _buf += `<li>${key}: ${_list[key]}</li>`;
        }
    }
    return _buf + '</ul>';
}

// document.write(`${printList(list)}`);

list.unshift({
    "name": "Cake",
    "cost": 23,
    "count": 4,
    "bought": true,
});

for (let i = 1; i < list.length; i++) {
    if (list[i].name == list[0].name) {
        list[i].count = list[i].count + list[0].count;
        list.shift();
        break;
    }
}
console.log(list);

// document.write(`${printList(list)}`);


let productIsBought = prompt("Что купили?");

for (let i = 0; i < list.length; i++) {
    if (list[i].name == productIsBought) {
        list[i].bought = true;
        break;
    }
}

// console.log(list);

document.write(`${printList(list)}`);