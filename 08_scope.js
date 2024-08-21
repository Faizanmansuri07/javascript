// scope()

if(true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30

// log show error for a and b both  beacuse.
// let and const is block scope variables

// while var is global scope variable

// function scope

function one() {
  const username = "Faizan"

  function two() {
    const msg = "hello "
    // console.log(msg + username);
  }
  two()
  //console.log(msg); error msg not defined
  
}
// console.log(username); error 

one()

// ----------------------------------------------------------