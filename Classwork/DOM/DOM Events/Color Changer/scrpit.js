let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

let arr = ["black","green","red","Brown","yellow"]

let i = 0;

function magic(){
    box.style.backgroundColor = arr[i];
    if(i<arr.length){
        i += 1;
    }else{
        i = 0;
    }
}