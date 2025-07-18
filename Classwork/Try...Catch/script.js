try{
    let age = Number(prompt("Enter your age"))
    if(age>18){
        console.log("Great");
    }else{
        throw "This is invalid";
    }
}catch(error){
    console.log(error);
}finally{
    console.log("Hello...!!")
}