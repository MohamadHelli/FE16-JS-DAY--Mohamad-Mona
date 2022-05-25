var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

var c = Number(c);
var d = Number(d);

var sum = a + b + c + d + e;
console.log(sum);


var f = "1",
    g = 15,
    h = 8,
    i = '1';
var sum1 = Number((f = "1")) * (g = 15) * (h = 8) * Number((i = '1'));
console.log(sum1);

var totalsum = sum / sum1;
console.log(totalsum)

let numbers = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];
let num1 = numbers[1][1];
let num2 = numbers[4][2];
let num3 = numbers[5][3];
let num4 = numbers[2][3];
let num5 = numbers[2][1];


console.log(num1 + "," + num2 + "," + num3 + "," + num4 + "," + num5);