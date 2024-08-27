// // declaration :-

// const num = 100.5588;
// console.log(num);

// const num1 = new Number(200)
// console.log(num1);

// //--------------------methods-----------

// //toExponential()
// // return number in exponential notation
// console.log(num1.toExponential(1)); // 2.0e+2

// // toFixed()
// // return decimal number in fixed perticular decimal point
// console.log(num.toFixed(2)); // 100.56

// //toLocalString()
// // provie more readabilty of the number
// const num3 = 1229900;
// console.log(num3.toLocaleString('en-IN')); // 12,29,900

// //topricision
// // return number depending uppon the parameter
// console.log(num.toPrecision(5)); // 100.56

// console.log(num.valueOf());

// // Math 

// console.log(Math.floor(2.7)); // 2
// console.log(Math.ceil(2.1)); // 3
// console.log(Math.round(5.6)); // 5.6 => 6
// console.log(Math.round(5.1)); // s.1 => 5


// console.log(Math.random()*10);
// console.log(Math.floor(Math.random() * 10 ) + 1);

// let min = 10
// let max = 20

// console.log(Math.floor(Math.random() * (max-min) + 1) + min);

// // indices value generator
// console.log("math.random practise :");
// console.log(Math.floor(Math.random() * 6) +1);

// // generating random color

// function randomColor() {
//     let num = ""
//     let char = "ABCDEFGH1234567890"
//     let random = "#"
//     for(let i=0; i<6; i++) {
//          random += char[Math.floor(Math.random() *char.length) ]; 
//     }
//     console.log(random);
// }