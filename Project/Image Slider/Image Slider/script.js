let img = document.querySelector("#img");
let arr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let i = 0   

function Right(){
    i++;
    if (i >= arr.length)
        i = 0;
        img.src = arr[i];
    
}
function Left(){
    i--;
    if (i < 0)
        i = arr.length - 1;
        img.src = arr[i];
    
}