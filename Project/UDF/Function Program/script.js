// Function Declaration
// Question 1 :-
// function greet(){
//     console.log("Hello Function");
// }
// greet();

// Question 2 :-
// function word(){
//     console.log("Hello JS");
// }
// word();


// -----------------------------------------------------------------------------


// Function Declaration (With Parameters)
// Question 1 :-
// let a = Number(prompt("Enter your first number : "))
// let b = Number(prompt("Enter your second number : "))
// function sum(a,b){
//     console.log(a+b);
// }
// sum(a,b);

// Question 2 :-
// let c = Number(prompt("Enter your first number : "))
// let d = Number(prompt("Enter your second number : "))
// function sum(c,d){
//     console.log(c*d);
// }
// sum(c,d);


// -----------------------------------------------------------------------------


// Function Declaration (Without Parameters)
// Question 1 :-
// let a = Number(prompt("Enter your first number : "))
// let b = Number(prompt("Enter your second number : "))
// function sum(){
//     console.log(a-b);
// }
// sum();

// Question 2 :-
// let c = Number(prompt("Enter your first number : "))
// let d = Number(prompt("Enter your second number : "))
// function sum(){
//     console.log(c/d);
// }
// sum();

// -----------------------------------------------------------------------------


// Function Declaration (Return Keyword)
// Question 1 :-
// let a = Number(prompt("Enter your first number : "))
// let b = Number(prompt("Enter your second number : "))
// function sum(a,b){
//     return a + b;    
// }
// let result = sum(a,b);
// console.log(result);

// Question 2 :-
// let n = Number(prompt("Enter your first number : "))
// function cube(n){
//     return n*n*n;    
// }
// console.log("Cube is : ",cube(n));


// -----------------------------------------------------------------------------


// Function Recursion
// Question 1 :-
// function fact(a){
//     if(a<1){
//         return 1;
//     }
//     let result = a * fact(a-1);
// } 


// -----------------------------------------------------------------------------


// Function Expression (Anonymous Function)
// Question 1 :-
// const sum = function(a,b){
//     console.log(a+b);
// }
// sum(25,25);

// Question 2 :-
// const multi = function(a,b){
//     console.log(a*b);
// }
// multi(5,5);


// -----------------------------------------------------------------------------


// Arrow Function
// Question 1 :-
// const multi = (a,b)=>{
//     console.log(a*b);
// }
// multi(20,2);

// Question 2 :-
// const divide = (a,b)=>{
//     console.log(a/b);
// }
// divide(20,2);


// -----------------------------------------------------------------------------


// IIFE :-
// Question 1 :-
// (function(a,b){
//     console.log("Sum : ", a+b);    
// })(5,7);

// Question 2 :-
(function(num){
    if(num%2==0){
        alert("Your number is odd...!")
    }else{
        alert("Your number is even...!")
    }
})(50);