// Object - {} it is used to store data in key value pair.

let arr = [23,34,15,23,25]

let obj = {
    name : "Jensi",
    subject : ["JS","Node","React"],
    city : "Rajkot",
    state : "Gujarat",
    married : false,
    contact : 8128144522,
    parents : {
        father : "Rajeshbhai"
    }
}

obj.name = "Jeni";
obj.subject[0] = "HTML";

console.log(obj);
console.log(typeof(obj));
console.log(obj.state);
console.log(obj["state"]);
console.log(obj.subject[1]);
console.log(obj.parents.father);