//console.log(document.all[4]);
//document.write("Hello");

//var elements=document.getElementsByTagName("p");
///console.log(elements[1].innerText);
//elements[1].innerHTML="Demo <b>New Content</b>";
//var element=document.getElementById("mypara");
//element.innerHTML="Dynamic javascript content";
// var elements=document.getElementsByClassName("design");
// for(i=0;i<elements.length;i++)
//     {
//         //elements[i].style.add ("background-color","red");
//         elements[i].setAttribute("style","background-color:red");


//     }
//var elements=document.getElementsByClassName
// elements.forEach(element => {
//     console.log(element);

// // });
// var elements=document.querySelectorAll(".design");
// console.log(elements);
// elements.forEach(function(item){
//     console.log(item);

// })
// var box=document.querySelector("#box");
// box.value="Initial";

// let mypara=document.querySelector("#mypara");
// //mypara.setAttribute("data","test");
// //mypara.setAttribute("class","x")
// //console.log(mypara.classList)
// //mypara.classList.add("z");
// //mypara.classList.toogle("x");
// function test()
// {
//     console.log("Para clicked");

// }
// function clickHandler()
// {
//     console.log("Button clicked");

// }

// let btn=document.querySelector("#btn");
// let btn1=document.querySelector("#btn1");
// btn.addEventListener("click",clickHandler);
// btn1.addEventListener("click",clickHandler);

// function clickHandler(e)
// {
//     console.log("Button clicked");
//     console.log(e.target);
// }

// btn.addEventListener("click",function(){
//     console.log("Button clicked");
// })


let digits=document.querySelector("#digits")
// let btn1=document.querySelector("#btn1");
// let btn2=document.querySelector("#btn2");
// let btn3=document.querySelector("#btn3");
// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// btn3.addEventListener("click",clickHandler);

let btns=document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener("click",clickHandler);
})

function clickHandler(e)
{
    if(digits.innerText=="0")
        digits.innerText="";
    
    digits.innerText=digits.innerText+ e.target.innerText;

}
