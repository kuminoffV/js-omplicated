let num = 266219;

// получили массив в чисел числа 266219
let array = ('' + num).split('').map(Number);

// выполнили перемножние чисел числа 266219
const multiplication = array.reduce(function (currentMul, currentNumber) {
  return currentMul * currentNumber;
}, 1);
console.log(multiplication);

// возвели результат перемножения в степень 3
degree = multiplication ** 3;
console.log(degree);

// вывели в консоль первые две цифры полученного числа
const numbers = degree.toString();
console.log(numbers[0] + " " + numbers[1]);