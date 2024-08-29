// control statement
// simple if() statement

let score = 30;

// if(score > 25) {
//     console.log("Your Score is above 25")
// }

//=-------------------------------------------------

 // if..else() 
// test the condition 
// confition => true if block
// conditon => false else block

score = 2
if(score > 25) {
    console.log("Your Score is above 25")
}
else {
    console.log("score less than 25");
    
}

// if..else If.. else
//check multiple condition

// ++++++++++++++++++++++++++++++++++++++++
//swich case

let month = 3;

switch(month) {
    case 1:
    console.log("january");
     break;   

    case 2:
    console.log("february");
     break;   

    case 3:
    console.log("march");
     break;   

    case 4:
    console.log("april");
     break;   

     default:
     console.log("Not Find");
} // march

const isLoggendIn = true

if(!isLoggendIn) {
    console.log("User logged In");
}
else {
    console.log("Not login");
    
}

// in comparision 
// operator : <, >, <=, >=, ==, ====

//+++++++++++++ truthy & falshy value +++++++++++++

// falshy values in js
// false,   0,   "",  null, undefined, NaN(not-a-number) 

// truthy values
// non emty string
// objects
// true

// +++++++++++++++++++++++ ternary Operator +++++++++++

// syntax
// condition ? true : false

let num1 = 10
let num2 = 20

let result = num1 > num2 ? num1 : num2;
console.log(result);

result = num1 > num2 ? console.log(`greater : ${num1}`) : console.log(`greater ${num2}`);

