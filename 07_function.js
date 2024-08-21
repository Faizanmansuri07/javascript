// declaration
//  function(parameter) {
//     block of code
// }

// calculate sum

function sumOf(num1, num2) {
    const output = typeof (num1 ,num2) === "number" ? num1+num2 :  alert("Enter Valid Numbers")
    return output;
}

// rest operator
// function showCartValue(price) {
//     return price
// }
console.log(showCartValue(20,30));
// its only print the first value
// use of rest operator

function showCartValue(...otherPrice) {
    return otherPrice;
}
console.log(showCartValue(29,49,50));

//++++++++ multiple types of function+++++

hello(); //printf console
function hello() {
    console.log("Hello javascript");
}
hello(); //print console


// greet(); // error 
// you cant call function before initialization
const greet = function() {
    console.log(" hello Faizan .");
}
greet() //print console

// +++++++++++++  this & arrow function +++++++++++++

const user = {
    id : 1,
    name : "Faizan",
    isLoggedIn : true,
     greetMe : function() {
        console.log(`heyy ${this.name}`);
        
    }
}
console.log("Bedore User :",user);

user.name = "farhan"
console.log(user.greetMe());
console.log("User After",user);


// if you not use the return statement then simply use () in code 
// without { } braces
const sumIn = (num1, num2) => (
    typeof(num1,num2) === "number" ? num1 + num2 : alert("Enter Valid Numbers")
)

console.log(sumIn(3,5));

//++++++++++++++++ IIFE +++++++++++++
// imediatly invoked functions expretion
// used to avoid global variable polution
// Note : You can access the global variable in IIFE function
// but you can not use var variable which is declared in IIFE function in outside

console.log("IIFE");

//( ) is used to 
( function hello() {
    console.log("I am a IIFE function");
})(); // semicolon is compalsary



// you can also pass value in it
( (car) => {
    console.log(`I love  ${car}`);
    
})("BMW");

// importatn 
let howAll = "Faizan";

( () => {
   console.log(`my name is ${howAll}`);    
} )()