document.getElementById("message").textContent = "Loading...";

setTimeout(()=>{
    document.getElementById("message").textContent = "Welcome to our website!";
}, 2000);