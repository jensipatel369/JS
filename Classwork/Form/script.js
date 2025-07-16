let name = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("password")

let nameErr = document.getElementById("nameerr")
let emailErr = document.getElementById("emailerr")
let passErr = document.getElementById("passerr")

function handleSubmit(e){
    e.preventDefault()

    let regex = /^(?=.*[1-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-])(?=.*[A-Z]).+$/;
    if(!regex.test(pass.value)){
        passErr.innerText = "Password is weak";
    }else{
        passErr.innerText = "";
    }
    // // Name :-
    // if(name.value.length <= 0){
    //     nameErr.innerText = "The feild is empty..!"
    // }else if(name.value.length <= 8){
    //     nameErr.innerText = "The field must contain more then 8 letters..!"
    // }else{
    //     nameErr.innerText = ""
    // }
    // // Email :-
    // if(email.value.length <= 0){
    //     emailErr.innerText = "The feild is empty..!"
    // }else if(!email.value.includes("@")){
    //     emailErr.innerText = "The email is not valid..!"
    // }else{
    //     emailErr.innerText = ""
    // }
    // // Password :-
    // if(pass.value.length <= 0){
    //     passErr.innerText = "The feild is empty..!"
    // }else{
    //     passErr.innerText = ""
    // }
}