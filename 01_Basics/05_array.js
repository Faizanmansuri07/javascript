
// // declaration
const fruit = ["apple", "banana", "kiwi", "orange"]
// console.log(fruit);

// const car = [];
// car[0] = "van"
// car[1] = "supra"
// car[2] = "lambo"

// console.log(car);

// //++++++++++++++ array method++++++++

// // length
// console.log(fruit.length);

// // push()
// // used to push element at last index
// console.log(fruit.push('ege'));
// console.log(fruit);

// //pop()
// // used to remove last element
// const el = fruit.pop();
// // el return that element that deleted
// console.log(el);
// console.log(fruit);

// // unshift()
// // push an element at the starting of the array
// fruit.unshift('hello')
// console.log(fruit);

// //shift()
// // delete the inserted from the unshift method
// fruit.shift()
// console.log(fruit); // 4) ['apple', 'banana', 'kiwi', 'orange']

// // indexOf() 
// // return the index of array elements
// console.log(fruit.indexOf("kiwi"));

// // include
// console.log(fruit.includes("banana"));

// // concate 
// // used to concate the string
// // you can also contact more than one string .
// const girls = ["saniya", "princy", "sana"]
// const boys = ["emi","faizan","farhan"]

// const groupA = boys.concat(girls);
// console.log(groupA);

// // copyWthIn()
// //The copyWithin() method copies array elements to another position in an array
// // its change the real array

// let data = fruit.copyWithin(3,0) // mens copy 0th index element at 3rd position
// console.log(data);
// console.log(fruit);

// //flat() method
// // its create new array which is in sub array
// // converts its into one array

// const subArr = [ 
//     [1, 2],
//     [3, 4],
//     [5, 6]
//  ];
//  // if the array consist same element then
//  // its not replace it
//  console.log(subArr.flat());
 
//  // splice()
//  // used to ad items in array
//  let data1 = fruit.splice(1
//     ,0,"hellow", "Faizan")
//  // first index for where elmet should be inserted
//  // and secon for how element should be delete after insert element

//  console.log(data);
 
// ++++++++++++++++++ other methods+++++++++++++\\

// // spread operator
// const  marvel_Hero = ["spiderMan", "captain", "ironman"]
// const dc_hero = ["wolf", "wanda", "jarvis"];

// const all_hero = marvel_Hero.concat(dc_hero)
// console.log(all_hero); // ['spiderMan', 'captain', 'ironman', 'wolf', 'wanda', 'jarvis']

// // spread operator
// const newArr = [...marvel_Hero,...dc_hero]
// console.log(newArr); //['spiderMan', 'captain', 'ironman', 'wolf', 'wanda', 'jarvis']

// // isArray()
// // check the given parameter is array or not
// console.log(Array.isArray(newArr)); //true

// // from()
// // seprate the parameter of from into in array
// console.log(Array.from("faizan"));

// //of()
// // convert elements in array
// let scoe1 = 100.;
// let score3 = 200;
// let score4 = 300;
// console.log(Array.of(scoe1,score3,score4)); // [100, 200, 300]


