const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance); 
// Output : [Number: 100], Here Number is prototype

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // basically this is used in e-comerce web-app

const otherNum = 123.894;
// console.log(otherNum.toPrecision(4));

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-IN'));


// -----------------MATH---------------------------


console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(9.6));

console.log(Math.ceil(5.7));
// Output : 6

console.log(Math.floor(24.4));
console.log(Math.min(24.4, 8, 9));

console.log(Math);
// output : Object [Math] {}


console.log(Math.random());

console.log("Ramdom Cal- ");

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// imp. formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

