// higher order array loops

// for..of loop
// used to put loop on array

let numbers = ["farhan", "Faizan",  "fardin", "ahil", "ayan"]
for (const num of numbers) {
    console.log(num);
    
} // farhan  Faizan   fardin ahil ayan

let str = "Faizan mansuri"

for (const val of str) {
    console.log(val);
    
} // string converted in single characters



// try with objects

let obj = {
    name : "faizan",
    age : 17,
    isLoggedIn : true
}

// for (const val of obj) {
//     console.log(val); // object is not iterable
    
// }
// instead of using these you can use this below syntax

for (const val of  Object.keys(obj)) {
    console.log(` Object Keys : ${val}`);
    
}
// also you can apply loop on values and entries
for (const val of Object.entries(obj)) {
    console.log(val);
    
}
// if the array consist with objects

let arrays = [
    {
        name : "javascript",
        fileName : "js"
    },
    {
        name : "java",
        fileName : "java"
    },
    {
        name : "pyhon",
        fileName : "py"
    },
]

for (const values of arrays) {
    console.log(values.name);
    
}




// +++++++++++++++++++++++++++ for in +++++++++++
// used to put loop on objects

// for..in()
// used to put loop on objects

console.log("++++++++++ for of loop ++++++++++++++");

let obj1 = {
    courseName : "webdev",
    price : 1299,
    courseDuration : "2 years"
}

for (const obj in obj1) {
    console.log(obj1[obj]); // print the values
    
} // return keys 
// for values use

// array inside the obj

// +++++++++++++++++++++++++++++++++ using for of in maps

let maps = new Map()
maps.set('js', 'javascript')
maps.set('py', 'python')
maps.set('java', 'java')
console.log(maps);

for (const [key, value] of maps) {
    console.log(`key : ${key}, values : ${value}`);
    
}
