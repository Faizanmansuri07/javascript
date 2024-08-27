// type conversion confusion
console.log("type conversion confusion");

let num1 = 20;
let newVal = String(num1)
console.log(typeof newVal, newVal); // string

// but if the num1 is mix with string and num

num1 = "20a"
newVal = Number(num1)
console.log(newVal); //NaN

// num <=> boolean

num1 = 1;
newVal = Boolean(num1)
console.log(typeof (newVal),newVal); //type : boolean => val : true

// if the num1 is 0 then
// its convert it into false

// similarly  in boolean to number 
// its convert true into 1 and false into 0

// typeof()
console.log(typeof Object());
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof null); // object

//+++++++++++++++++++++  string ++++++++++++++++++++++

// string is collection of character

// declaration ++
let str =  "Faizan Mansuri"
console.log(str);

let newStr = new String("Faizan")
console.log(newStr); // its provide a prototype 

//+++++++++++ Methods of string +++++++++++++++

// 1  length()
console.log(str.length); // 14

// 2 at()
// return the character at perticular position
console.log(str.charAt(0)); // f

// 3 charAt()
// return positon of character
console.log(str.charAt(2)); // i

// Note : the diff. between at() and charAt() 
// at() take negative values also
// but charAt() Note

// ---------------------------------------------------------------------

//charCodeAt()
// return the asci code of the character
console.log(str.charCodeAt(1)); // 97

// slice()
// return a part of string from the array
// not include last index
// also take negative values
console.log(str.slice(3,-2)); // zan mansu

// sunstring()
// return a  part of string 
// not accept negative values
// if negative consider 0
console.log(str.substring(0,7)); // Faizan

// substr()
//calculate the string from last 
console.log(str.substr(3,6)); // zan Ma


// toupperCase()
// convert string to upper case
console.log(str.toUpperCase()); // FAIZAN MANSURI

// toLowerCase()
// convert string to lower Case
console.log(str.toLowerCase()); // faizan mansuri

// concate()
const city = " Chhapi"
const concatination = str.concat(city)
console.log(concatination); // Faizan Mansuri Chhapi


// trim()
// used to remove unwanted space
const hello = "     HIII       "
console.log(hello.trim());

//+++++++++++++++++++++++++++++++ number && Methods ++++++++++++++++++++

// number declaration
let number = 10;
const number1 = new Number(20) // return protype in console
console.log(number1);


// toString()
console.log(number.toString()); //string value 10

// toExponsial()
console.log(number.toExponential()); // 1e+1

// to fixed()
number = 101.2363
// return fix digit after point
console.log(number.toFixed(2)); // 101.24

// toPricision()
console.log(number.toPrecision(1)); // 1e+2

//toLocalString()
number = 12289000
console.log(number.toLocaleString('En-In'));

//++++++++++++++++++++++++++ array && Metjods +++++++++++++

const marvel = ["ironman", "captain", "spiderman"]
const dc = ["spiderman", "wanda", "vision"]

console.log(marvel)
console.log(dc);


// length
console.log(marvel.length); // 3

// push()
// add element
marvel.push("Faizan")
console.log(marvel); //  ['ironman', 'captain', 'spiderman', 'Faizan']

//pop()
// delete last element
marvel.pop()
console.log(marvel)

// unshift()
// add el at first
marvel.unshift("Faizan")
console.log(marvel);  //  ['Faizan', 'ironman', 'captain', 'spiderman']

// shift()
//delete first el 
marvel.shift()
console.log(marvel); // ['ironman', 'captain', 'spiderman']

//at()
// return position el
console.log(marvel.at(1)); // captain

// concate()
//concate string
const newArr = marvel.concat(dc);
console.log(newArr);

// using spread operator
const spreadOp = [...marvel, ...dc]
console.log(spreadOp);

//include()
// return boolean
console.log(marvel.includes("spiderman")); // true
