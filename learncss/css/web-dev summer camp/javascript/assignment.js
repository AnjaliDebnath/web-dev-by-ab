// BOXES HOMEWORK IN JAVASCRIPT


// // let num=10;
// // if(num>0){
// //     console.log("positive number");
// // }
// // else if(num<0){
// //     console.log("negative number");
// // }
// // else{
// //     console.log("zero");
// // }

// // let year=2020;
// // if((year%4==0 && year% 100!=0)  || (year%400==0)){
   
// //     console.log("it is a leap year");
// // }
// // else{
// //     console.log("not a leap year");
// // }

// let body= document.body;
// let container= document.createElement("div");
// container.classList.add("box");
// body.appendChild(container);

// container.style.height="90vh";
//  container.style.width="50vh";
// container.style.border="5px solid black";

// let box1=document.createElement("div");
// box1.classList.add("smallBox");

// let box2=document.createElement("div");
// box2.classList.add("smallBox");

// let box3=document.createElement("div");
// box3.classList.add("smallBox");

// // let box4=document.createElement("div");
// // box4.classList.add("smallBox");

// // let box5=document.createElement("div");
// // box5.classList.add("smallBox");

// // let box6=document.createElement("div");
// // box6.classList.add("smallBox");

// // let box7=document.createElement("div");
// // box7.classList.add("smallBox");

// // let box8=document.createElement("div");
// // box8.classList.add("smallBox");


// container.appendChild(box1);
// container.appendChild(box2);
// container.appendChild(box3);
// // container.appendChild(box4);
// // container.appendChild(box5);
// // container.appendChild(box6);
// // container.appendChild(box7);
// // container.appendChild(box8);


// box1.style.height="50px";
// box1.style.width="60%";
// box1.style.border="2px solid black";

// box2.style.height="50px";
// box2.style.width="20%";
// box2.style.border="2px solid black";

// box3.style.height="50px";
// box3.style.width="20%";
// box3.style.border="2px solid black";

// // box4.style.height="50px";
// // box4.style.width="50px";
// // box4.style.border="2px solid black";

// // box5.style.height="50px";
// // box5.style.width="50px";
// // box5.style.border="2px solid black";

// // box6.style.height="50px";
// // box6.style.width="50px";
// // box6.style.border="2px solid black";

// // box7.style.height="50px";
// // box7.style.width="50px";
// // box7.style.border="2px solid black";

// // box8.style.height="50px";
// // box8.style.width="50px";
// // box8.style.border="2px solid black";


// container.style.display= "flex";
// //container.style.justifyContent="center";
// container.style.gap="1px";
// //container.style.alignContent="center";
// //container.style.flexWrap="wrap";

// box1.style.alignSelf="center";




// homework 27-07-2024

// Q5
// let year=2020;
// if((year%4==0 && year% 100!=0)  || (year%400==0)){
   
//     console.log("it is a leap year");
// }
// else{
//     console.log("not a leap year");
// }

//Q6
// let arr=[10,20,30,40]
// var ans=arr.map((num)=>{
//     return num*num;
// });
// console.log(ans);



//Q7
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age; // new member variable
//     }

//     // Method to display person details
//     display() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// // Create an instance of the class
// let person1 = new Person('John Doe', 30);

// // Display person details
// person1.display();

// person1.address = '123 Main St';

// // console.log(person1.address); 

// delete person1.address;

// console.log(person1.address);



//Q8
// checkNum = (num)=>{
//     if(num%2==0){
//         return "even number";
//     }
//     else{
//         return "odd number";
//     }
// }

// console.log(checkNum());


//Q9
// function check(val){

// let val;
//     switch(val){
//         case : return 0;
//         break;
//         case 'yellow': return 1;
//         break;
//         case 'green': return 2;
//         break;
//         default: return -1;

//     }
//     return val
// }
// console.log(val);

//Q11
// let arr=[21,56,82,3,90,47,35,72,1,10];
// arr.sort(function(a,b){ return a-b});
// console.log(arr);

//Q12
// let arr=['html', 'css', 'javascript', 'react', 'node', 'postgres'];
// console.log(arr.length);
// console.log(arr[2]);
// arr.pop();
// console.log(arr);
// arr.push('sql');
// console.log(arr);


//Q13 
// Create an array of numbers of size 10
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Use filter to filter odd numbers and map to return the cube of each number
// let oddCubes = numbers.filter(number => number % 2 !== 0)
// .map(number => number ** 3);

// // Print the new array
// console.log(oddCubes);


// q14
// function Todo(title, description, status) {
//     this.title = title;
//     this.description = description;
//     this.status = status;
// }

// Create an array with 5 TODO objects
// let todos = [
//     new Todo("Task 1", "coding", "not done"),
//     new Todo("Task 2", "sleeping", "done"),
//     new Todo("Task 3", "music", "not done"),
//     new Todo("Task 4", "homework", "done"),
//     new Todo("Task 5", "assignment", "not done")
// ];

// todos.forEach(todo=>{
//     console.log(`Title: ${todo.title}, Description: ${todo.description}, Status:  ${todo.status}`);
// });

// let titles= todos.map(todo=>todo.title);
// console.log(titles);


//hw 28-07-24

function calc(num1, num2, opr){
    switch(opr){
        case '+': return num1+num2;
        case '-': return num1num2;
        case '*': return num1*num2;
        case '/': 
        if(num2===0){
            return 'error';
        }
        return num1/num2;
        case '%': return num1%num2;
        default:
             return 'error: invalid operator';
    }
}
const a=5, b=10, op='*';
console.log(calc(a,b,op));



        