// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.


let check = [{
    "name": "beer",
    "price": 49,
    "count": 3,
},
{
    "name": "snacks",
    "price": 25,
    "count": 4,
},
{
    "name": "water",
    "price": 15,
    "count": 2,
},
{
    "name": "meat",
    "price": 150,
    "count": 1,
}
];

// Распечатка чека на экран;

check.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }

    return 0;
});
console.log(check);

function printCheck(_check) {
    let _buf = '<ul>';
    for (const key in _check) {
        if (typeof _check[key] == 'object') {
            _buf += `<li>${key.toUpperCase()}: ${printCheck(_check[key])}</li>`;
        } else {
            _buf += `<li>${key}: ${_check[key]}</li>`;
        }
    }
    return _buf + '</ul>';
}
document.write(`${printCheck(check)}`);

// Подсчет общей суммы покупки;
let sum = 0;
for (let i = 0; i < check.length; i++) {
    sum += check[i].count * check[i].price;
}
console.log(sum);

// Получение самой дорогой покупки в чеке;

let expensive = 0;
for (let i = 0; i < check.length; i++) {
    a = check[i].count * check[i].price;
    if (a > expensive) {
        expensive = a;
    }
}
console.log(expensive);

// Подсчет средней стоимости одного товара в чеке.

let totalPrice = 0;
for (let i = 0; i < check.length; i++) {
    totalPrice += check[i].count;
}

let middlePrice = sum / totalPrice;
console.log(middlePrice);