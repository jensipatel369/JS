let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let city = document.getElementById("city");
let number = document.getElementById("number");
let email = document.getElementById("email");
let pass = document.getElementById("password");

let firstNameErr = document.getElementById("first-nameerr");
let lastNameErr = document.getElementById("last-nameerr");
let cityErr = document.getElementById("cityerr");
let numberErr = document.getElementById("numbererr");
let emailErr = document.getElementById("emailerr");
let passErr = document.getElementById("passerr");

// First Name :-
firstName.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length <= 0) {
    firstNameErr.innerText = "The feild is empty..!";
  } else if (event.target.value.length <= 3) {
    firstNameErr.innerText = "The field must contain more then 3 letters..!";
  } else {
    firstNameErr.innerText = "";
  }
});

// Last Name :-
lastName.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length <= 0) {
    lastNameErr.innerText = "The feild is empty..!";
  } else if (event.target.value.length <= 5) {
    lastNameErr.innerText = "The field must contain more then 5 letters..!";
  } else {
    lastNameErr.innerText = "";
  }
});

// city :-
city.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length <= 0) {
    cityErr.innerText = "The feild is empty..!";
  } else if (event.target.value.length <= 5) {
    cityErr.innerText = "The field must contain more then 5 letters..!";
  } else {
    cityErr.innerText = "";
  }
});

// Number :-
number.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length === 0) {
    numberErr.innerText = "The field is empty..!";
  } 
  else if (!/^[1-9][0-9]*$/.test(value)) {
    numberErr.innerText = "Only digits 0 to 9 are allowed. No letters or symbols!";
  } 
  else if (value.length < 10) {
    numberErr.innerText = "The field must contain at least 10 digits..!";
  } 
  else {
    numberErr.innerText = "";
  }
});

// Email :-
email.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length <= 0) {
    emailErr.innerText = "The feild is empty..!";
  } else if (!event.target.value.includes("@")) {
    emailErr.innerText = "The email is not valid..!";
  } else {
    emailErr.innerText = "";
  }
});

// Password :-
pass.addEventListener("input", (event) => {
  // let value = event.target.value;
  // let strong = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  // let medium = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  // let weak = /^(?=.*[1-9])(?=.*[a-z])[a-z1-9]{4,}$/;
  if (/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
    passErr.innerText = "Password is strong.";
  } else if (/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value)) {
    passErr.innerText = "Password is medium.";
  } else if (/^(?=.*[1-9])(?=.*[a-z])[a-z1-9]{4,}$/.test(value)) {
    passErr.innerText = "Password is weak.";
  } else {
    passErr.innerText = "Password is too weak.";
  }
});
