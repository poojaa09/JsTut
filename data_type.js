/* JavaScript is a dynamically typed language. This means that variable 
types are determined at runtime, and you do not need to explicitly declare
 the type of a variable before using it. You can assign different types 
 of values to a variable during its lifetime.*/


 // primmtive datatype-> 7 types: string,number.boolean,BigInt,symbol,null,undefined
 //non-primitve: array,object,functions

 //symbol
 const id=Symbol('123')
 const id1=Symbol('123')
 console.log(id===id1);
 //output will be false

 // BigInt
 const bigNum=4471861645478653n
 //n represent bigint
 console.log(typeof(bigNum));
 
// array, object,functions
const hero=["superma","batman","shaktiman"]
console.log(hero);

let obj= 
{
    name:"pooja",
    age:20,
    gradyear:2026

}
console.log(typeof obj);

const myFun=function(){
    console.log("hello world");

}
//null ka datatype object hota h


