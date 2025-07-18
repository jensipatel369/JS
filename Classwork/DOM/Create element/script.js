let name = document.getElementById("name")
let btn = document.getElementById("btn")

btn.addEventListener("click",(event)=>{
  let heading = document.createElement("h1")
  let name = document.getElementById("name").value
    if (name) {
      alert(`🎉 Hello, ${name}! Great to see you! 🌟`);
    } else {
      alert("⚠️ Please enter your name first!");
    }
  box.appendChild(heading)
  name.value = ""
})
