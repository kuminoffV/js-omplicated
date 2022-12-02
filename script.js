let num = 266219;

// получили массви в числ числа 266219
let array = ('' + num).split('').map(Number);


//вывели полученный массив
console.log(array);

// посчитали длину массива
lengthArray = array.length;

// цикл перемножения
let composition = 1;
while (lengthArray > 0) {
  lengthArray--;
  composition *= array[lengthArray];
}

// вывели результат перемножения
console.log(composition);


// возвели результат перемножения в степень 3
degree = composition ** 3;
console.log(degree);

// вывели в консоль первые две цифры полученного числа
const numbers = degree.toString();
console.log(numbers[0] + " " + numbers[1]);