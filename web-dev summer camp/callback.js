// // function f1(callback){                 callback with no argument
// //     console.log("i am inside function f1");
// //     callback();
// // }
// // function sayHello(){
// //     console.log("hello");
// // }
// // function sayGoodBye(){
// //     console.log("GoodBye");
// }
// // f1(sayHello);
// //  f1(sayGoodBye);

// // f1(()=> console.log("hello"));


// function f2(names,callback){                      //callback with arguments
//     console.log("i am inside function f2");
//     callback(names);
// }
// function greet(names){
//     console.log(`hello ${names}`);
// }
// function sayGoodBye(names){
//     console.log(`goodbye ${names}`);
// }

// f2(`Anjali`, greet);
// f2("Anjali", (names) => console.log(`heyaa ${names}`));    // method to pass function as argument using arrow notation

// f2(`Anjali`, sayGoodBye);
// f2("anji" , (names)=>console.log(`goodbye ${names}`) );



// function f3(name,callback){                              //callback with data and error
//     console.log("i am inside function f3");
//     if(typeof name==='string'){
//         const data= `hello ${name}`;
//         callback(null,data);
//     }
//     else{
//         const error= new Error('Error:Name is a  number');
//         callback(error,null);
//     }
// }
// function greet(error, data){
//     if(error){
//         console.log(error.message);
//     }
//     else{
//         console.log(data);
//     }
// }

// f3("aman", greet);    succes
// f3(123, greet);       fail

// f3("Anjali", (error,data)=> {if(error) {       //using arrow notation
//     console.log("this is an error")
// } else{
//     console.log(data)
// }
//  });

// f3("anjali", (error,data)=> {error ? console.log("error"): console.log(data)});    //using ternary operator






