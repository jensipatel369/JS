class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);     
    }
}

let obj = new person("Rahul",24)
obj.greet()