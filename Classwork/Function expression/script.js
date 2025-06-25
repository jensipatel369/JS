// Function Expression
// Function Expression are not hosited...
// Function expression can be anonymous (without a name)
const sum = function(a,b){
    console.log(a+b);
    console.log("Hello this is a function expression..!");
}
sum(25,25);


// Arrow Function :-
const multi = (a,b)=>{
    console.log(a*b);
    console.log("Hello this is a function expression..!");
}
multi(20,2);

// IIFE :-
(function(){
    console.log("IIFE");    
})();

// Function Declaraion
// Function Expression
// Anonymous Function
// Arrow Function
// IIFE (Immediately Invoked Function Expression)
// Hoisting
