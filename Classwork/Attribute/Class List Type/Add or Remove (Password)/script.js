// Set Attribute || Get Attribute

// let box = document.getElementById("box-1")
// console.log(box.getAttribute("class"));

function magic(){
    let input = document.getElementById("inp")
    let type = document.getElementById("type")
    if(type == ("text")){
        box.classList.remove("container")
        input.setAttribute("type","password")
    }else{
        box.classList.add("container")
        input.setAttribute("type","text")
    }
}
