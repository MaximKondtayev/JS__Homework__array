// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).


let beetroot = [{
    "classroom": "small room",
    "course": "front End",
    "seats": 15,
},
{
    "classroom": "big room",
    "course": "designer",
    "seats": 10,
},
{
    "classroom": "hall",
    "course": "cofee",
    "seats": 5,
}
];

//- Вывод на экран всех аудиторий;
function printBeetroot(_beetroot) {
    let _buf = '<ul>';
    for (const key in _beetroot) {
        if (typeof _beetroot[key] == 'object') {
            _buf += `<li>${key.toUpperCase()}: ${printBeetroot(_beetroot[key])}</li>`;
        } else {
            _buf += `<li>${key}: ${_beetroot[key]}</li>`;
        }
    }
    return _buf + '</ul>';
}
document.write(`${printBeetroot(beetroot)}`);

//- Вывод на экран аудиторий для указанного факультета;

let beetrootCourse = (prompt("Введите название факультета, чтобы узнать в какой аудитории занятия", "designer"));
for (i = 0; i < beetroot.length; i++) {
    if (beetrootCourse == beetroot[i].course) {
        alert(beetroot[i].classroom)
    }
}

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;

let group = [{
    "name": "Front-End",
    "count": 15,
    "fack": "base",
},
{
    "name": "Back-End",
    "count": 5,
    "fack": "base",
},
{
    "name": "Python",
    "count": 3,
    "fack": "base",
},
{
    "name": "JavaScript",
    "count": 3,
    "fack": "Advanced",
}
];

let groopName = prompt("Как называется ваша группа ?");
for (i = 0; i < group.length; i++) {
    if (groopName == group[i].name) {
        let a = group[i].count;
        console.log(a);
        for (i = 0; i < beetroot.length; i++) {
            if (a <= beetroot[i].seats) {
                alert(`Вам подойдет  ${beetroot[i].classroom}`);
            }
        }
    }
}

// Функция сортировки аудиторий по количеству мест;

beetroot.sort(function (a, b) {
    if (a.count > b.count) {
        return 1;
    }
    if (a.count < b.count) {
        return -1;
    }

    return 0;
});
console.log(beetroot);

// Функция сортировки аудиторий по названию (по алфавиту).

