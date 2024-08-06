// Q: js program to generate a random integer between 2 numbers

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage:
// const min = 1;
// const max = 10;
// const randomInt = getRandomInt(min, max);
// console.log(`Random integer between ${min} and ${max}: ${randomInt}`);


// Q: Write a js program `(console.log(“running function”) )`  that would run for 5 times, every 1 sec. However, for the first time, it runs after 2 seconds.
// Modify the program that it runs only 5 times total, and stops automatically.

// let count = 0;
// const maxRuns = 5;

// function logMessage() {
//     console.log("running function");
//     count++;
//     if (count === maxRuns) {
//         clearInterval(intervalId);
//     }
// }

// const intervalId = setInterval(() => {
//     logMessage();
// }, 1000);

// // Start the first execution after a 2-second delay
// setTimeout(() => {
//     logMessage();
// }, 2000);



//Q rotate the string 
// function animate(id) {
//     var ele = document.getElementById(id);

//     // Check if element and its text content exist
//     if (!ele || !ele.innerText) {
//         return;
//     }

//     var textarea = ele.innerText; // Get the text content

//     setInterval(function () {
//         // Move the last character to the beginning of the string
//         textarea = textarea[textarea.length - 1] + textarea.substring(0, textarea.length - 1);

//         // Update the text content of the element with the modified string
//         ele.innerText = textarea;
//     }, 100);
// }


//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
// function difference(n) {
//     // Check if n is less than or equal to 13
//     if (n <= 13) {
//         return 13 - n;
//     } 
//     else {
        
//         return (n - 13) * 2;
//     }
// }


// console.log(difference(32));

// function check(x,y){
//     if(x==50 || y==50 || (x+y)==50){
//         return true;
//     }
//     else
//         return false;
// }
// console.log(check(50,3));

// function checkStr(str){
//     if(str===null || str=== undefined || str.substring(0,2)==="Py"){
//         return str;
//     }
//     else{
//         return "Py"+ str;
//     }
// }
// console.log(checkStr("jhdsvv"));


