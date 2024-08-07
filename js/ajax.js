// //1. Create an Object of XMLHttpRequest
// let request=new XMLHttpRequest();
// //2. Prepare Method, URL, Mode(async,sync)
// request.open("GET","../data.json");
// //3. Event Load
// // request.onload=function(){
// //     console.log(request.responseText);

// // }

// request.addEventListener("load",function(){
//     let result=JSON.parse(request.responseText);

//     console.log(result);

// })

// //4 Send/Submit
// request.send();

// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",function(){
//     let result=JSON.parse(request.responseText);
// console.log(result.data);
// })
// request.send();

// let request=new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.addEventListener("load",function(){
//     console.log(request.responseText);
// })
// request.setRequestHeader("content-type","application/json");

// let obj={};
// obj.name="Code";
// obj.job="Trainer";

// //request.send("variablename=value&variable=name")
// request.send(JSON.stringify(obj));

// let no=11
// let prom=new Promise((resolve,reject)=>{

//         if(no%2==0)
//             resolve();
//         else
//             reject();
// })

// prom.then(()=>{
//     console.log("Even")
// }).catch(()=>{
//         console.log("ODD");

// })
// let result=fetch("../data.json");
// result.then((data)=>{
//     //console.log(data);
//   return  data.json();
// }).then((data)=>{
//     console.log(data);
// })

// fetch("../data.json").then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);

// })

// fetch("https://reqres.in/api/users?page=2").then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);

// })
let obj={};
obj.name="Code";
obj.job="Trainer";

// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//         "content-type":"application/json"
//     }
// }).then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data)
// })
// async function getData()
// {
//    let result= await fetch("https://reqres.in/api/users",{
//         method:"POST",
//         body:JSON.stringify(obj),
//         headers:{
//             "content-type":"application/json"
//         }
//     })
//     let output=await result.json();

//     console.log(output);

// }
// getData();


//console.log(result);
