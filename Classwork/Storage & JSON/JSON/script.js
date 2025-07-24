// JSON :- JavaScript Object Notation
// -> This is a lightweight object and fast or easy to manage
// -> JSON.stringify() method converts the object in json string
// -> JSON object use data store in local storage and backend
let obj = {name:"Rahul",age:34}
// Noral object to JSON object
localStorage.setItem("Student",JSON.stringify(obj))
// JSON to Noraml object
let Student = JSON.parse(localStorage.getItem("Student"))
console.log(Student.name)
// console.log(JSON.stringify(obj))