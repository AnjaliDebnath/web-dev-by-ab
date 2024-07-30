// // // // // // // // // // // // var fname="anjali";
// // // // // // // // // // // // function greet(){
// // // // // // // // // // // //     var lname="debnath";
// // // // // // // // // // // //     console.log(lname);
// // // // // // // // // // // // }
// // // // // // // // // // // // greet();
// // // // // // // // // // // // console.log(lname);

// // // // // // // // // // // let a=10;
// // // // // // // // // // // (a%2==0)? console.log("even") : console.log("odd");

// // // // // // // // // // let a=33;
// // // // // // // // // // if((a<0) || (a%2!=0)){
// // // // // // // // // //     console.log("yes");
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("no");
// // // // // // // // // // }

// // // // // // // // // function func(){
// // // // // // // // //     console.log("meow");
// // // // // // // // // }
// // // // // // // // // function printName(fname, lname){
// // // // // // // // //     // console.log("hello " + fname +" " + lname);
// // // // // // // // //     console.log(`hello ${fname} ${lname}`);

// // // // // // // // // }
// // // // // // // // // // printName("annu","deb");


// // // // // // // // // function prodFunc(num1, num2){
// // // // // // // // //     return num1*num2;
// // // // // // // // // }
// // // // // // // // // const ans= prodFunc(10,20);
// // // // // // // // // console.log(ans);

// // // // // // // // function check(num){
// // // // // // // //     return (num%2==0)?"even":"odd";
// // // // // // // // }
// // // // // // // // var ans=check(45);
// // // // // // // // console.log(ans);

// // // // // // // const obj={
// // // // // // //     fname: "anji",
// // // // // // //     lname: "debnath",
// // // // // // //     age: 21,
// // // // // // //     getFullName :function(){
// // // // // // //         return (this.fname + " " + this.lname);
// // // // // // //     }
// // // // // // // }
// // // // // // // obj.getFullName();
// // // // // // // // console.log(obj.getFullName());

// // // // // // // write a method which gives YoB given todays year

// // // // // // const info={
// // // // // //     name: "piku",
// // // // // //     age: 25,
// // // // // //     // findAge: function(){
// // // // // //         // console.log(currentYear-this.age);
// // // // // //     // }
// // // // // // }
// // // // // // // info.findAge();
// // // // // // info["hobbies"]="dancing";
// // // // // // console.log(info);

// // // // // const personInfoForm= function(fname, lname, age){
// // // // //     var person={
// // // // //         fname:fname, 
// // // // //         lname:lname, 
// // // // //         age:age
// // // // //     }
// // // // //     return person;
// // // // // }
// // // // // let ans= personInfoForm("adi", "deb", 12);
// // // // // console.log(ans);

// // // // //object that has function which returns an object

// // // // let arr=[1,2,3,4,5];
// // // // // function printElem(num){
// // // // //     console.log(num*num);
// // // // // }
// // // // // arr.forEach(printElem);

// // // // arr.forEach(function(num){
// // // //     console.log(num*num);
// // // // });


// // let arr=[1,2,3,4,5];
// // // var newArr= arr.map(function(num){
// // //     return num*num;
// // // });
// // // console.log(newArr);

// // function isEven(num){
// //     return num%2===0;
// // }
// // var evenArr = arr.filter(isEven);
// // console.log(evenArr);

// // return sq of odd nos which are >10

// const arr=[1,2,3,4,5,6,7,8,9];

// let arr2=arr.filter((num)=>{
//     if(num%2!=0){
//         return num;
//     }
// }) .map((num)=>{
//             return num*num;
    
// }).filter((num)=>{
//     if(num<10){
//         return num;
//     }
// });
// console.log(arr2);

let mapOfNum= new Map();
mapOfNum.set(1, "anji");
mapOfNum.set(2, "ashi");

console.log(mapOfNum);
console.log(mapOfNum.has("anji"));

