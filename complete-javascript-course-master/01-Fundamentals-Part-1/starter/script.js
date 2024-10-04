//fundamental of js part 1
/*
let js = 'amazing';
if (js === 'amazing') alert("Javascript is a Good programing Language!");

console.log(40 + 8 + 23 - 10);

console.log('Rishi');
console.log(45);
********************

variable example
let firstname = 'Rishi';
let lastName = 'Keshri'
console.log(firstname + " " + lastName);
********************

Camel case example

let first = 'rishikant';
let middleName = 'Kumar'
let Last_name = 'Keshri'
let age$ = 24;

console.table([first, middleName, Last_name, age$]);
******************************


let 3year = 3;
o/p - > starter\script.js:32
let 3year = 3;
    ^
SyntaxError: Invalid or unexpected token

let function = 24;

o/p --> script.js:37
let function = 24;
    ^^^^^^^^
SyntaxError: Unexpected token 'function'

let pi = 3.1415; //define already
let PI = 3.1415;

********************************

    Bad code pratice-- -> avoid this kind of mistake
let job1 = 'operation executive';
let job2 = 'senior system associate';

Good pratice of code----> always use this kind of code pratice

let myFirstJob = 'Operation executive';
let myCurrentjob = 'Senior system associate';

console.table([job1, job2, myFirstJob, myCurrentjob]);

*/
//Data types
/*
1) Number   12345678
2) Boolean  -> true false
3) String   'Rishi'
4) undefined let x;
5) Null
6) Symbol
7) Bigint

//let const var

let age = 24;
age = 25;
console.log(age);  // value we can change as per requirement

const x = 34;
x = 35;
console.log(x); // can not possiblr to vhsnge the value in const keyword
// o/p ----> script.js:76
// x = 35;
//   ^
// TypeError: Assignment to constant variable.

var job = 'java developer'
job = 'full stack developer'
console.log(job);
*/
// operators
// arthmetic operator + - / * % **  2 ** 2 = 4 2 power 2


// const ageRishi = 24;
// const ageShambhu = 32;
// const sum = ageRishi + ageShambhu;
// console.log(sum);

// const sub = ageRishi - ageShambhu;
// console.log(sub)

// const mul = ageRishi * ageShambhu;
// console.log(mul);

// const div = ageRishi / ageShambhu;
// console.log(div);

// o/p 56
//     -8
//     768
//     0.75
//******************************* */
// assignment operator =
// let x = 5 + 5;     // x = 10
// x += 10            // x = x + 10 = 20
// console.log(x);

//Comparison operator > < >= <=

// const now = 2024;
// const ageRishi = now-2000;
// const ageShambhu =now-1990;
// console.log(now-2000>now-1990);


// console.log(25-10-5); //left to right operation
// let x,y;
// x=y=25-10-5
// console.log(x,y);

//Coding challenge   1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnheight = 1.95;

// const markBMI = markMass / markHeight ** 2
// const johnBMI = johnMass / (johnheight*johnheight);
// let markHeigherBMi = markBMI > johnBMI;
// console.log(markHeigherBMi);
// console.log(markBMI,johnBMI);

//*********************************** */
// String and Template
// let firstname = 'Rishikant'
// let job = 'Seniour system Assosiate'
// let birthYear = 2000;
// let year = 2024;
//String example before es6
//let Rishikant = "I'm " + firstname + ', a ' + (year - birthYear) + 'years old ' + job + '!' ;
// console.log(Rishikant);
//now Template after es6
// let newRishi = `I'm ${firstname}, a ${year - birthYear} year old ${job} !`;
// console.log(newRishi);
// console.log(`just a regular string.........`);
//  
/******** */
//if else statement 
// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Rishikant can start driving license 😊');
//     //no output
// }
// const age1 = 19;
// const isOldEnough1 = age1 >= 18;
// if (isOldEnough1) {
//     console.log('Rishikant can start driving license 😊');
//  //output Rishikant can start driving license.
// }

//ifelse
/**
 if(){
 }else{
 }
 */
// const age = 15;
// if (age >= 18) {
//     console.log("Rishi can start driving");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Rishi is too young. wait for anyother ${yearsLeft} years ^_____^`);
// }
// const birthYear = 2000;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21
// }
// console.log(century);

//Coding challenge   2
/* 1.Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" */

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnheight = 1.76;

// const markBMI = markMass / markHeight ** 2
// const johnBMI = johnMass / (johnheight * johnheight);
// console.log(markBMI, johnBMI);

// if(markBMI > johnBMI){
// console.log("mark's BMI is higher than john's!");
// }else{
//     console.log("john's BMI is higher than Mark's !");

// }

/*2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/
// if (markBMI > johnBMI) {
//     console.log(`mark's BMI (${markBMI})is higher than john's (${johnBMI})!`);
// } else {
//     console.log(`john's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);

// }
/***********************************/

//Type Conversion
// const inputYear = "2000";
// console.log(Number(inputYear), inputYear);

// console.log(inputYear + 18);

// console.log(Number (inputYear) + 18);
// console.log(Number('John'));

// console.log(typeof NaN)

// console.log(String(23), 23);

//type coercion
// console.log('I am ' + 23 + '  years old')
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');