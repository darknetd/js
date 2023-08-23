// console.log(1);
// console.log('string');
// console.log(2323);
// console.log(true);
// console.log(false);
// var names = 'Бекзод'
// var year = 30
// var boolean = true
// var und
// console.log(names);
// console.log(year);
// console.log(boolean);
// console.log(und);
// var fullInfo = 'Я ' + names + ' мне ' + year + ' лет '

// console.log(fullInfo);




// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(10 / 3);
// console.log(10 % 3);


// console.log('6 + 3 = ' + (6 + 3));
// console.log('6 - 3 = ' + (6 - 3));
// console.log('6 * 3 = ' + (6 * 3));
// console.log('10 / 3 = ' + (10 / 3));
// console.log('10 % 3 = ' + (10 % 3));


var str = prompt ('Введите свое имя ')
console.log(( 'Меня зовут ' + str));

var str = +prompt('Введите свое год рождения')
// var str2 = +prompt('введите н год')
console.log(2023 - str);

var str = prompt('Решите пример  12+ 8 = ?')
console.log('Пример 1: 12 + 8 = ' + (12 + 8) + '.  Ваш ответ'+ str);


var str = prompt('Решите пример 30 - 8 = ?')
console.log('Пример 2: 30 - 8 = ' + (30 - 8) + '.  Ваш ответ'+ str);


var str = prompt('Решите пример 10 * 2 = ?')
console.log('Пример 3: 10 * 2 = ' + (10 * 2) + '.  Ваш ответ'+ str);


var str = prompt('Решите пример 12 / 3 = ?')
console.log('Пример 4: 12 / 3 = ' + (12 / 3) + '.  Ваш ответ'+ str);


var str = prompt('Решите пример 22 % 3 = ?')
console.log('Пример 5: 22 % 3 = ' + (22 % 3) + '.  Ваш ответ'+ str);


var str = prompt('Откройте консоль для просмотра ответа.')
var x, y, z, k;
x = +prompt('Введите число:')
y = +prompt('Введите число:')
z = +prompt('Введите число:')
k = ((x + y + z) / 3)
console.log('k = ' + k);