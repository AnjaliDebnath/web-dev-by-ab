// let num=10;
// if(num>0){
//     console.log("positive number");
// }
// else if(num<0){
//     console.log("negative number");
// }
// else{
//     console.log("zero");
// }

// let year=2020;
// if((year%4==0 && year% 100!=0)  || (year%400==0)){
   
//     console.log("it is a leap year");
// }
// else{
//     console.log("not a leap year");
// }

let body= document.body;
let container= document.createElement("div");
container.classList.add("box");
body.appendChild(container);

container.style.height="90vh";
 container.style.width="50vh";
container.style.border="5px solid black";

let box1=document.createElement("div");
box1.classList.add("smallBox");

let box2=document.createElement("div");
box2.classList.add("smallBox");

let box3=document.createElement("div");
box3.classList.add("smallBox");

let box4=document.createElement("div");
box4.classList.add("smallBox");

let box5=document.createElement("div");
box5.classList.add("smallBox");

let box6=document.createElement("div");
box6.classList.add("smallBox");

let box7=document.createElement("div");
box7.classList.add("smallBox");

let box8=document.createElement("div");
box8.classList.add("smallBox");


container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);
container.appendChild(box4);
container.appendChild(box5);
container.appendChild(box6);
container.appendChild(box7);
container.appendChild(box8);


box1.style.height="50px";
box1.style.width="50px";
box1.style.border="2px solid black";

box2.style.height="50px";
box2.style.width="50px";
box2.style.border="2px solid black";

box3.style.height="50px";
box3.style.width="50px";
box3.style.border="2px solid black";

box4.style.height="50px";
box4.style.width="50px";
box4.style.border="2px solid black";

box5.style.height="50px";
box5.style.width="50px";
box5.style.border="2px solid black";

box6.style.height="50px";
box6.style.width="50px";
box6.style.border="2px solid black";

box7.style.height="50px";
box7.style.width="50px";
box7.style.border="2px solid black";

box8.style.height="50px";
box8.style.width="50px";
box8.style.border="2px solid black";


container.style.display= "flex";
container.style.justifyContent="center";
container.style.gap="5px";
container.style.alignContent="center";
container.style.flexWrap="wrap";







        