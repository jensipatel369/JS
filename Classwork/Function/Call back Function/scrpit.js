// Callback Function
// When a function passed to another  unction as an argument or runs on another function execution.

// Higher order function
// when a function takes another function as an argument or excute that on its result.

function a(){ // Highr order function
    b()
}   

function b(){ // Callback function
    console.log("I'm Callback");    
}
a()

// Clouser :- A function bundled together with its lexical scope, makes a clouser.

function meet(){ // Lexical Scope
    let name = "rahul";
    function greet(){
        console.log(name);        
    }
    greet()
}
meet()