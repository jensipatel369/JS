// Scope :-

let a = 10; // Global Scope

function sum(){  
    let a = 15; // Function Scope [Local Scope]
    console.log(a);    
}
console.log(a);
sum();

// Block Scope
if(true){
    let a = 35;
    console.log(a);
}
