console.log('This is Manjeet');

// variables -----------------------------------

// Variables are used whenever there is a need to store data, it can be used anywhere in programe later => reusability; var, const, let
//         Datatypes – Numbers, Boolean, String, Null 

// Operators- Arithmetic operators(+,-,*,/,%)
// Assignment operators(shorthand operators)(+=, -=, *=, /=, 





// var let const keyword 

var nameOne = "Manjeet";
// famous are let , const 
console.log(nameOne);

const nameTwo = 'Manjeet Dhayal';
console.log(nameTwo);

//nameTwo = 'Manjeet changed'; // we can not change the value of a const 

let nameThree = 'Manjeet Dhayal NIT Rourkela';
console.log(nameThree);
nameThree = 'name changed';
console.log(nameThree);

// Template variable 

let anotherOne = `this is tamplate variable ${nameThree}`;
console.log(anotherOne);

let firstDeclare;
firstDeclare = 'first Declare';
console.log(firstDeclare);

// const constVar;        // ERROR - we must initilaize a const at the time of declaration 
// constVar='reassigned'; 

// Why let is  preferred over var ? 
// var can be redeclared but let can not 
var declare = 1;
var declare = 2;
console.log(declare);

let Declare = 3;
//    let Declare = 4;      // ERROR - let can not be reassigned again 
console.log(Declare);


// another diff btw let and var 
// var - global scope if defigned outside function and local if defined inside a function 
// let - block scope i.e, {inside paranthesis only }

let x = 10;
if (1) {
    x = 20;
    console.log('inside block' + x);  // 20 
}
console.log('outside block' + x);    // 20 

// you are wondering why? 
// coz if i declare x inside the block then it changes like below 

let y = 10;
if (1) {
    let y = 20;
    console.log(y);  //20

}
console.log(y); //10


var z = 10;
if (1) {
    z = 20;
    console.log(z); //20

}
console.log(z); //20

var w = 10;
if (1) {
    var w = 20;
    console.log(w); //20

}
console.log(w); //20     







//-----------------------------------------------------------------------------//



