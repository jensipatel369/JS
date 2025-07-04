// Object - {} it is used to store data in key value pair.

let class11th = [
    {
        name : "Punit",
        rollNumber : 1001
    },
    {
        name : "Krisha",
        rollNumber : 1002
    },
    {
        name : "Kavy",
        rollNumber : 1003
    },
    {
        name : "Jenil",
        rollNumber : 1004
    },
    {
        name : "Hiyu",
        rollNumber : 1005
    }
]

// For Each loop naya data return nhi krta...
// item Function name hai...
class11th.forEach((item)=>{
    console.log(item.name);
    console.log(item.rollNumber);    
})

// For Each loop naya data return krta hai...
class11th.map((item)=>{
    if(item.rollNumber == 1003){
        console.log(item.name);        
    }
})

let confirmedStudent = class11th.map((item)=>{
    if(item.rollNumber == 1002){
        console.log(item.name);   
        return item;     
    }
})

let singleData = class11th.find((item)=>item.rollNumber == 1004);
console.log(singleData);