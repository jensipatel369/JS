let status = document.getElementById("status")
setTimeout(()=>{
    let id = 1;
    let name = "Jensi";
    let email = "jenc25@gmail.com";
    document.getElementById("status").textContent = "Data received:";
    document.getElementById("output").innerHTML = "<strong>ID:</strong> " + id + "<br>" +
                                                  "<strong>Name:</strong> " + name + "<br>" +
                                                  "<strong>Email:</strong> " + email;
}, 3000);