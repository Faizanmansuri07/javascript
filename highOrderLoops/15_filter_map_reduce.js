// filter method
// used to filter the array
// return a perticular items
//  forEach its not return any type of values

const marks = [
    {
        name : "thomas",
        marks : 89,
        grade : "A"
    },
    {
        name : "lilli",
        marks : 69,
        grade : "B"
    },
    {
        name : "fatema",
        marks : 99,
        grade : "C"
    },
]

// const topStudent =  marks.filter((e) => e.marks > 80)
// console.log(topStudent);

//+++++++++++++++++++++++++++++++++++++++++++
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenEl = number.filter((e) => e  % 2 === 0)
console.log(evenEl);

const fruits = ['apple', 'banana', 'pear', 'grape', 'orange']

///+++++++++++++++++++++++++++++++
const lessThanFive = fruits.filter((e) => (
    e.length <= 5
))

console.log(lessThanFive);

//++++++++++++++++++++++++++++++++++++++++
let users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
  ];
  
  const activeUser = users.filter((e) =>{
    if(e.active === true) {
        return e.name;
    }
  })

  console.log(activeUser);
  

  //++++++++++++++++++++++++++++++++++++++++

// map methods 


const sqrt = number.map((e) => e * e)
console.log(sqrt);


////++++++++++++++++++++++++++++++++++++++++

const words = ['hello', 'world', 'javascript']

const upperCase = words.map((upper) => upper.toLocaleUpperCase())
console.log(upperCase);

//+++++++++++++++++++++++++++++++++++++++++++++

  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
const useName = users.map((user) => {
    return user.name
})

console.log(useName);

// +++++++++++++++++++++ reduce Method ++++++++++++++++

const sumOfNumbers = number.reduce((prev, curr) => prev + curr,0)
console.log(sumOfNumbers);

//++++++++++++++++++++++++++++++++++++++++++++
// find the max value

const maxValue = number.reduce((prev, curr) => (prev > curr ? prev : curr),0)
console.log(maxValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++
// calculate the total age of user

const sumOfAge = users.reduce((prev,curr) =>{
    return prev + curr.age
},0)
console.log(sumOfAge);

//+++++++++++++++++++++++++++++++++++++
const products = [
    { name: 'Laptop', price: 1000, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 750, available: true }
  ];

  const totalPrice = products
  .filter((available) => available.available === true)
  .map((filterPrice) => filterPrice.price)
  .reduce((prev, curr) => prev + curr)



   console.log(totalPrice);
  

//++++++++++++++++++++++++++++++
const arrOfstr = ['tree', 'mountain', 'river', 'cloud', 'sun']

const moreThanFour = arrOfstr
.filter((e) => e.length > 4)
.reduce((count) => count+1,0)
console.log(moreThanFour);
























