let body = document.getElementById("body")
let box = document.getElementById("box")

window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
        box.style.position = "fixed"
        body.style.backgroundColor = "gray";
    }else{
        box.style.position = "relative"
        body.style.backgroundColor = "white";
    }
})