// Example 1 :-
class car{
    constructor(id,brand,color,price){
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    greet(){
        console.log(`Enter your car details :-`);    
        console.log(`Id : ${this.id}`);         
        console.log(`Car Brand : ${this.brand}`);         
        console.log(`Car Color : ${this.color}`);         
        console.log(`Car Price : ${this.price}`);  
        console.log("");               
    }
}
let obj = new car(1,"BMW","Black",50000)
obj.greet()


// Example 2 :-
class jewellery{
    constructor(id,name,jewel){
        this.id = id;
        this.name = name;
        this.jewel = jewel;
    }
    greet(){
        console.log(`Enter your jewellery details :-`);     
        console.log(`ID : ${this.id}`);     
        console.log(`Jewellery name : ${this.name}`);     
        console.log(`Jewel : ${this.jewel}`);
        console.log("");        
    }
}
let obj2 = new jewellery(2,"Ring","Pearl")
obj2.greet()


// Example 3 :-
class bottle{
    constructor(id,material,color){
        this.id = id;
        this.material = material;
        this.color = color;
    }
    greet(){
        console.log(`Enter your bottle details :-`);     
        console.log(`ID : ${this.id}`);
        console.log(`Bottle material : ${this.material}`);
        console.log(`Bottle color : ${this.color}`); 
        console.log("");            
    }
}
let obj3 = new bottle(3,"Plastic","blue")
obj3.greet()


// Example 4 :-
class book{
    constructor(id,title,author,pages){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    greet(){
        console.log(`Enter your book details :-`);     
        console.log(`ID : ${this.id}`);
        console.log(`Book's Title : ${this.title}`);
        console.log(`Book's Author : ${this.author}`); 
        console.log(`Book Pages : ${this.pages}`); 
        console.log("");            
    }
}
let obj4 = new book(4,"The Hobbit","J.R.R. Tolkien",310)
obj4.greet()


// Example 5 :-
class movie{
    constructor(id,title,director,year){
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
    }
    greet(){
        console.log(`Enter your movie details :-`);     
        console.log(`ID : ${this.id}`);
        console.log(`Movie title : ${this.title}`);
        console.log(`Movie's Director : ${this.director}`); 
        console.log(`Movie's Year : ${this.year}`); 
        console.log("");            
    }
}
let obj5 = new movie(5,"Inception","Christopher Nolan",2010)
obj5.greet()