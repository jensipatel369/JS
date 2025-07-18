let name = document.getElementById("name")
let box = document.getElementById("box")
let btn = document.getElementById("btn")

btn.addEventListener("click",(event)=>{
  let heading = document.createElement("h2")
  heading.innerText = name.value
  box.appendChild(heading)
  name.value = ""
})
