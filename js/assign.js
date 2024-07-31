// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let result=document.querySelector("#result");
// let addBtn=document.querySelector("#addBtn");

// addBtn.addEventListener("click",function(){

//     let no1=input1.value;
//     let no2=input2.value;
//     let add=parseInt(no1)+parseInt(no2);
//     result.value=add;

// })

//ASSIGN 2
// let operand1 = 0;
// let operand2 = 0;
// let operation = "";
// let isNew = false;

// let elements = document.querySelectorAll(".btns");
// let digits = document.querySelector("#digits")
// let resultBtn = document.querySelector("#resultBtn");
// elements.forEach(function (element) {
//     element.addEventListener("click", clickHandler)
// })

// let operations = document.querySelectorAll(".operationButton")
// operations.forEach(function (element) {
//     element.addEventListener("click", operationHandler)
// })

// function operationHandler(e) {
//     let target = e.target;
//     operation = e.target.innerText;
//     operand1 = parseInt(digits.innerText);
//     isNew = true;


// }

// function clickHandler(e) {
//     if (digits.innerText == "0")
//         digits.innerText = "";

//     let target = e.target;
//     if (isNew == false)
//         digits.innerText += target.innerText;
//     else {
//         digits.innerText = "";
//         digits.innerText += target.innerText;
//         isNew = false;

//     }

// }

// resultBtn.addEventListener("click",function(){
//     operand2=parseInt(digits.innerText);

//     if(operation=="+")
//         {
//             let resultData=parseInt(operand1)+parseInt(operand2);
//             digits.innerText=resultData;
//             isNew=true;
//         }
//         if(operation=="-")
//             {
//                 let resultData=parseInt(operand1)-parseInt(operand2);
//                 digits.innerText=resultData;
//                 isNew=true;
//             }
// })

//TODO APP
let tasks = [];
let id = 1;
let task = document.querySelector("#task");
let taskList = document.querySelector("#taskList");
task.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        // let taskname=task.value;
        // tasks.push(taskname);
        // addToDom(taskname);
        // console.log(tasks);
        let obj = {};
        obj.title = task.value;
        obj.status = "pending";
        obj.taskid = id;
        id++;
        tasks.push(obj);
        setLocalStorage();

        task.value = "";
        addToDom(obj);
        console.log(tasks);


    }

    // console.log("Called",e);

})

function addToDom(task) {
    // let p=document.createElement("p");
    // p.innerText=task.value;
    //taskList.append(p);
    // let item=document.createElement("li");
    // item.innerText=task.value;
    // taskList.append(item);
    let taskdiv = document.createElement("div");
    taskdiv.setAttribute("id", task.taskid);

    let span = document.createElement("span");
    span.innerText = task.title;

    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {
        //console.log(chk.checked);
        let status = "pending"
        if (chk.checked == true) {
            status = "completed";
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
            status = "pending";
        }



        tasks = tasks.map(function (item) {
            if (item.taskid == task.taskid)
                item.status = status;

            return item;
        })
        setLocalStorage();
        console.log(tasks);


    })

    let delbtn = document.createElement("button");
    delbtn.innerText = "del";
    // delbtn.addEventListener("click",function(){
    //     taskdiv.remove();
    //     tasks=tasks.filter(function(item){
    //         if(item.taskid!=task.taskid)
    //             return true;

    //     })
    //     console.log(tasks);

    // })
    delbtn.addEventListener("click", delHandler);

    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delbtn);


    taskList.append(taskdiv);



}
function delHandler(e) {
    let parent = e.target.parentNode;
    let id = parent.getAttribute("id");
    parent.remove();
    tasks = tasks.filter(function (item) {
        if (item.taskid != id)
            return true;

    })
    setLocalStorage();
    console.log(tasks);



}

function setLocalStorage() {

    localStorage.setItem("tasks",JSON.stringify(tasks));

    //let arr=["one","Two"];
    //document.write(arr);
    // localStorage.setItem("items",arr);

    // let arr = [];
    // let obj = {};
    // obj.title = "test";
    // arr.push(obj);
    // //    document.write(arr);
    // //    localStorage.setItem("items",arr);
    // localStorage.setItem("items", JSON.stringify(arr));

    // // let obj={};
    // // obj.title="Test";
    // // document.write(JSON.stringify(obj));
    // let str = JSON.parse(localStorage.getItem("items"));

    // console.log(str[0]);






    // let name="Code";
    //localStorage.setItem("name",name);

}
//setLocalStorage();
function getLocalStorage()
{
    //tasks=JSON.parse(localStorage.getItem("tasks"));
    if(localStorage.getItem("tasks"))
        tasks=JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function(item){
        addToDom(item);
        
    })
    console.log(tasks);

}
getLocalStorage();