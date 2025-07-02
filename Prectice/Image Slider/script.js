let img = document.querySelector("#img");
let btn = document.querySelector("#btn");

let arr = ["1.png","2.png","3.png"];

let i = 0;

function magic(){
    if(i<arr.length){
        img.src = arr[i];
        i++;
    }else{
        i = 0;
    }
}
