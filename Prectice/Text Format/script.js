let input = document.getElementById("inp");
let para = document.getElementById("para");

function getValue() {
  document.querySelector("#para").innerHTML = input.value;
  input.value = "";
}
function italic(){
    para.style.fontStyle = "italic";
}
function bold(){
    para.style.fontWeight = "bold";
}
function uppercase(){
    para.style.textTransform = "uppercase";
}
function lowercase(){
    para.style.textTransform = "lowercase";
}
function underline(){
    para.style.textDecoration = "underline";
}
function line(){
    para.style.textDecoration = "line-through";
}
function overline(){
    para.style.textDecoration = "overline";
}
function coral(){
    para.style.color = "coral";
}
function font(){
    para.style.fontFamily = " Caveat", cursive;
}
function fontSize(){
    para.style.fontSize = "30px";
}
function spacing(){
    para.style.letterSpacing = "4px";
}
function shadow(){
    para.style.textShadow = "5px 5px 8px gray"
}
// function alignLeft(){
//     para.style.textAlign = "left";
// }
// function alignCenter(){
//     para.style.textAlign = "center";
// }
// function alignRight(){
//     para.style.textAlign = "right";
// }
function TextColor(color){
   para.style.color = color;
}
function reset(){
    para.style = "empty";
}
