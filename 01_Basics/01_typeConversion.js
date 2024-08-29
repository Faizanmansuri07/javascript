let score = 33;

// if the score has number and strings mix value then the type of the score
// is NaN(not a number)

// type of null is object
// type of undefined is undefined

// console.log(score);

// // checking the type of score variable 
// console.log(typeof score);
// number

// changing the type of variable


const newValue = String (score);
// console.log(typeof newValue)
// string

const obj = {
    index : 1,
    name : "Faizan",
    class : "A",
    pass : true
}

// console.log(typeof obj); // object

 score2 = true;
//bolean => number;
// if true return 1;
// false return 0;
// console.log(Number (score2))

// typeConversion to number
//"33" => 33
// 33 => "33"
// "33abc" => NaN
// true => 1
// false => 0

// -------------------------------------------------------------------------------------------------------------
// operations

// console.log(3 + 2); // 5
// console.log("1" + 2+2); //12
// console.log(2+2+ "1"); // 41


// pree and post increment 

let gameCounter = 5

// postle increament
let newCounter = gameCounter++
// console.log(newCounter);  // value : 5
// console.log(gameCounter); // 6
// when you use post increment then the value of the gameCounter is assign 
// first into the newCounter variable then the gamecounter varible incremented


// pre increment;
let simpleVal = 5;
let preIct = ++simpleVal;
// console.log(preIct)  // value : 6
// console.log(simpleVal) // value 6

// stack and heap

// primitive datatypes : Number, string, boolean, undefined, null, symbol, bigInt
// non-primitive : array, object, function

// stack gives the copy of that perticular variables values

let myEmail = "faizan@google.com"

let secEmail = myEmail;
secEmail = "farhan@gmail.com"

// console.log(myEmail)
// console.log(secEmail);

// inprimitive data type stack provide the copy of variables 
// value 

// heap (non-primitive) data types
// heap memory provide reffrence of perticular function,object or array
// in heaap memory when you change the object or any other than the actual value and object 
// becomes effected
// const user = {
//     name : "faizan",
//     age : 17,
//     isLogin : true
// }

// let newUser = user
// newUser.name = "farhan" 
// console.log(user);
// console.log(newUser);

// const cars = ['supra', "bmw", "maruti", "farari"]
// const newCars = cars;


// newCars[0] = "swift";

// console.log(cars)
// console.log(newCars);

