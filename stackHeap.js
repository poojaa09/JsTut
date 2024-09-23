// stack->primitive data type,heap->non-primitive
let myName="hello"
let anothName=myName
anothName="namaste"
console.log(anothName);
console.log(myName);

/* stack me dusre variable ko phle variable ka copy milta that means 
on changing the value of 2nd variable will not effect value of 1st one*/
/* but in heap 2nd variable gets the refernce of another variable that means on changing
 the value of 2nd will change the value of 1st one also*/
 let obj1={
    email:"xyz@gmail.com",
    name:"xyz"
 }
 let obj2=obj1
 obj2.email="abc@gmail.com"
 console.log(obj2);
 console.log(obj1);
