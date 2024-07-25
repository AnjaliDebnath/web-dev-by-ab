let body= document.body;  //to get into body
let container= document.createElement("div"); //to create element
container.classList.add("boxes");  // to give a class to div
body.appendChild(container);  // to add div into the body
// container.style.width= "100px";
// container.style.height="100px";
// container.style.backgroundColor= "red";

let box1= document.createElement("div");  //to create element
box1.classList.add("chotabox");            // to give a class to div

let box2= document.createElement("div");
box2.classList.add("chotabox");

let box3= document.createElement("div");
box3.classList.add("chotabox");

let box4= document.createElement("div");
box4.classList.add("chotabox");

container.appendChild(box1);   // to add boxes to the main container
container.appendChild(box2);
container.appendChild(box3);
container.appendChild(box4);

let boxes=document.querySelectorAll(".chotabox");   //to select on which element property is to be applied
boxes.forEach((element) => {
    element.style.width= "100px";
    element.style.height="100px";
    box1.style.backgroundColor= "red";
    box2.style.backgroundColor= "pink";
    box3.style.backgroundColor= "blue";
    box4.style.backgroundColor= "green";
    element.style.border= "2px solid black ";
    container.style.gap= ".5px";
    

    
});

container.style.display= "flex";
container.style.justifyContent="center";
container.style.alignItems= "center";
container.style.border= "2px solid black";
container.style.height= "100vh";
container.style.width="200vh";

box1.addEventListener("click", function(){
    body.style.backgroundColor=" red";
})
box2.addEventListener("click", function(){
    body.style.backgroundColor="pink";
})
box3.addEventListener("click", function(){
    body.style.backgroundColor=" blue";
})
box4.addEventListener("click", function(){
    body.style.backgroundColor=" green";
})


box1.addEventListener('mouseover', function()  {
    box1.style.backgroundColor = 'red';
});

box1.addEventListener('mouseout', function()  {
    box1.style.backgroundColor = 'lightblue';
});




