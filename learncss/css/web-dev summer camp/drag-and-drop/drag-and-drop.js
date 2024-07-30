let body=document.body;
let smallbox=document.createElement("div");
smallbox.classList.add("small");
body.appendChild(smallbox);
smallbox.style.width="100px";
smallbox.style.height="100px"
smallbox.style.backgroundColor= "lightblue";
smallbox.style.border="1px solid black";
smallbox.innerHTML="BOX 1";
smallbox.style.textAlign="center";


let bigbox=document.createElement("div");
bigbox.classList.add("big");
body.appendChild(bigbox);
bigbox.style.width="300px";
bigbox.style.height="300px"
bigbox.style.backgroundColor= "lightblue";
bigbox.style.border="2px dotted black";
bigbox.innerHTML="BOX 1";
bigbox.style.textAlign="center";
bigbox.style.marginTop="50px";

const dragables= document.querySelectorAll('.small');
const dropzones= document.querySelectorAll('.big');

dragables.forEach(dragable=>{
    dragable.addEventListener('dragstart',dragStart);
});






