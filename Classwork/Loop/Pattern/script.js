// Question 1 :
for (let i=0; i<5; i++) {
    for (let j=0; j<i; j++) {
       console.log(j);
}
console.log();
}

// Question 2 :
for (let i=1; i<=5; i++) {
    for (let j=i; j<=5; j++) {
    if (j%2 == 0) {
      document.write(0);
    } 
    else{
      document.write(1);
    }
}
     document.write("<br>")
}

// Question 3 :
for(let i=1; i<=5; i++)
{
  for(let j=i; j<=5; j++)
  {
    document.write(j);
  }
  document.write("<br>")
}

// Question 4 :
for (let i=5; i>0; i--) {
    for (let j=i; j>0; j--) {
     document.write(j)  
}
     document.write("<br>")
}

// Question 5 :
for(let i=1; i<=5; i++){
     for(let j=1; j<5; j++){
        if(i%2 == 0){
          document.write("0")
        }
        else{
          document.write("1")
        }
     }
   document.write("<br>")

}