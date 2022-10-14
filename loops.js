// while
// var limit = 3;
// var counter = 0;
// var number;
// while(counter < limit) {
//     number = +prompt('Введите число');
//     console.log(number);
//     counter++;
// }

// do while - выполнится хотя бы один раз, вне зависимост от условия
// var txt = '';
// do {
//     txt = prompt('Confirm: yes or no')
// } while(txt !== 'yes' && txt !== 'no')

// Синтаксис цикла for:
// for (initialization; condition; expression)
//     statement
// for(var i = 0, j = 10; i !== j; i++, j--) {
//     console.log(i, j);
// }

// Задача: Программа генерирует случайное число от 1 до 7.
// пользователь вводит целое число и если угадывает его, 
// то появляется сообщение о победе (alert)
// Доп. условие, у пользователя 5 попыток

// var rnd = Math.round(Math.random() * 6) + 1; // случайное число от 1 до 7

// var rnd = Math.round((Math.random() * 10) + 1);
// var constNumber = 3;
// console.log(rnd);
// for (var i = 0; i < 5; i++){
//     var num = prompt('Введите число');
//     console.log(typeof num);
//     if(num === constNumber) continue;
//     if (constNumber === num){
//         alert('Вы выйграли!');
//         break;
//     }
// }

// Использование меток
// Пример, внутри цикла по i находится цикл по j, 
// и при выполнении некоторого условия происходит выход из обоих циклов
// outer: for(var i = 0; i < 3; i++) {
//     for(var j = 0; j < 3; j++) {
//         var input = prompt(`Значение в координатах (${i}, ${j})`);
//         if(!input) break outer;
//     }
// }

// Вывести ряд простых чисел с использованием метки и оператора continue
// next: for(var i = 2; i <= 10; i++) {
//     for(var j = 2; j < i; j++) {
//         if(i % j === 0) continue next;
//     }
//     document.write(i + '<br>');
// }


// var iterable = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// // Императивный подход перебора массива данных
// for(var i = 0; i < iterable.length; i++) {
//     sum += iterable[i];
// }
// console.log(`Сумма = ${sum}`);

// // Декларактивный подход перебора массива данных
// Пример с for of используется для прохода по массиву
// var sum2 = 0;
// for (const value of iterable) {
//     sum2 += value;
// }
// console.log(`Сумма2 = ${sum2}`);

// // Декларативный подход. Вариант 2.
// var sum3 = iterable.reduce(
//     (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(`Сумма3 = ${sum3}`);

// Пример с for in используется для прохода по объекту
// var student = {
//     'name': 'Kirill',
//     'secondName': 'Anisimov',
//     'age': '17',
//     'status': (() => 'student')()
// };

// for (const key in student) {
//     // document.write(`<b>${key}: ${student[key]}</b><br>`);
    
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = student[key];  
//         document.write(`${key}: ${element} <br>`);
//     }
// }