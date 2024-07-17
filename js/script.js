//console.log("Welcome to javascript");
// a=10;
// console.log(a);
// console.log(typeof(a));
// a="test";
// console.log(a);
// console.log(typeof(a));
//'use strict'
//number,string,boolean,
//const a=10;
//a=20;

//console.log(username);

//var username="Code";
//console.log(username);

//var username="Test";

// //userName="Test";
// //console.log(username);
// let name="Code"
// //console.log("Your name is ",name);
// //let output="Your name is "+name+" and you are eligible for test";
// //let output=`your name is ${name} and you are eligible for test`;
// test();

// function test()
// {
//     console.log("Test called");

// }


// var fun=function(){
//     console.log("func");
// }
// fun();
// let a=10;
// console.log(a);
// //console.log(fun());
// let x=fun();

// console.log(x);


// function sum(x,y=0)
// {
//     console.log(x,y)

//     //console.log(arguments);
//    /* for(let i=0;i<arguments.length;i++)
//         console.log(arguments[i]);
// */

// //console.log("sum called",x,y);
// }
// sum(8,10);


//sum(4,5,6,45,5,6,6);

//OBJECTS
//let obj={name:'Code',age:30,name:'Test'}
// let obj={};
// obj.name="Code";
// obj.age=30;
// console.log(obj);
// let obj=new Object();
// console.log(obj);

// let obj={
//     name:'Code',
//     age:30,
//     'your city':'Karnal',
//     '10th':490
// }
// console.log(obj.name);
// console.log(obj["10th"]);

// for(key in obj)
// {
//     console.log(key);
//     console.log(obj[key]);

// }

// let keys="name";
// //console.log(obj.keys);
// console.log(obj[keys]);




//console.log(obj.name);
//console.log(obj["name"]);




//console.log(output);

let person1={
    name:'Code',
    age:30,
   // education:["a","c","d"],
    //marks:{'x':480,'xii':410},
    getName:getMyName
}
let person2={
    name:'Quotient',
    age:35,
   // education:["a","c","d"],
    //marks:{'x':480,'xii':410},
    getName:getMyName
}

function getMyName()
{
    
        console.log(this.name);
    
}
person1.getName();
// console.log(obj.name);
// console.log(obj.education[0]);
// console.log(obj.marks.x);
// obj.getName();

// obj.education.forEach(function(item){
//     console.log(item);
// })

let arr=[{'name':'Code',age:30},{'name':'Quotient',age:40}]
arr.forEach(function(item){
    console.log(item.name);


})