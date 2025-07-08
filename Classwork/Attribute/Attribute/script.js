// Set Attribute || Get Attribute

// let box = document.getElementById("box-1")
// console.log(box.getAttribute("class"));

function magic(){
    let input = document.getElementById("inp")
    let type = document.getElementById("type")
    if(type == ("text")){
        input.setAttribute("type","password")
    }else{
        input.setAttribute("type","text")
    }
}
