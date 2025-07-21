let mode = document.getElementById("body");

function light(){
  mode.classList.remove("bg-gray-900", "text-white");
  mode.classList.add("bg-white", "text-black");
}
function dark(){
  mode.classList.remove("bg-white", "text-black");
  mode.classList.add("bg-gray-900", "text-white");
}