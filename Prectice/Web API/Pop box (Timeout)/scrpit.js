// Web API's

// setTimeout Function
let box = document.getElementById("box")
setTimeout(()=>{
    box.classList.add("magic");
},3000)
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    box.classList.remove("magic")
})
