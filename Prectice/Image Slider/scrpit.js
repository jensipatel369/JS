let left = document.querySelector("#left");
let right = document.querySelector("#right");

let arr = ["url(https://images.pexels.com/photos/936194/pexels-photo-936194.jpeg),]

let i = 0;

function magic(){
    box.style.backgroundColor = arr[i];
    if(i<arr.length){
        i += 1;
    }else{
        i = 0;
    }
}