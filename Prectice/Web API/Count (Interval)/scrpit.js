// Web API's

// setInterval 
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    clearInterval(interval)
})
let num = 0;
let interval = setInterval(()=>{
    num +=1;
    document.getElementById("head").innerText = num;
},1000)
