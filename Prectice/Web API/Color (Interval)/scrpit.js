// Web API's

// setInterval 
// Method 1 :-
// let arr = ["black","green","red","Brown","yellow","Pink"]
// let i = 0;
// setInterval(()=>{
//     box.style.backgroundColor = arr[i];
//     if(i<arr.length){
//         i += 1;
//     }else{
//         i = 0;
//     }
// },1000)

// Method 2 :-
let arr = ["black","green","red","Brown","yellow","Pink"]
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    clearInterval(interval)
})
let num = 0;
let interval = setInterval(()=>{
    num +=1;
    document.getElementById("box").style.backgroundColor = arr[num];
},1000)
