// oobjects
// object is int the form of key and value pairs

// declaration
let obj ={
    name : "faizan",
    classes : 10,
    isPass : true
}

console.log(obj);

console.log(obj.class);
console.log(obj["class"]);

console.log(Object.keys(obj)); // accesing keys
console.log(Object.values(obj)); // return array

console.log(Object.entries(obj));

// destructuring ob objects
const {name, classes} =   obj
console.log(`User : ${name}, class : ${classes}`);

obj = {
    name : "faizan",
    age : 18,
    // symbol
    // [sym1] : "my key 1",
    myCars : [{
        car1 : "ford",
        car2 : "suzuki",
        car3 : "BMW"
}],
    isMyCar : true
}

console.log(obj);
console.log(obj.myCars[0].car1);

const {age, myCars} = obj
console.log(age, myCars[0].car2);


// +++++++++++++++++++ practise++++++++++++++++++++++++++++

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((num,idx,numbers) => {
    console.log(`index ${idx} , square : ${num*num}`);
    numbers[idx] = num * num;

})
console.log(numbers);

const fruits = ['apple', 'banana', 'cherry']

const newArr = []

for (const fruit of fruits) {
    const eachLength =  `${fruit}${fruit.length}`;
    newArr.push(eachLength)
}
console.log(newArr);

const student = {
    name : "Faizan",
    age : 22,
    course : "javascript"
}

for (const val in student) {
    console.log(`key : ${val}, value : ${student[val]}`);
    console.log(Object.keys(student).length);
    
}
const temprature = [0, 10, 20, 30]

const tempInFarenhit = temprature.map((temp)=> temp*(9/5) + 32)
console.log(tempInFarenhit);

numbers = [1, 2, 3, 4, 5]

const sumOfArr = numbers.reduce((prev,curr) => {
    return Math.max(prev, curr)
}) 
console.log(sumOfArr);

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 13 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 15 }
];

const adults = people.filter((e) => e.age > 18)
console.log(adults);

const totalNnumber = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]

const evenNumOperation = totalNnumber
.filter((number) => number % 2 === 1)
.map((even) => even * even)

console.log(evenNumOperation); // [1, 9, 25, 49, 81]

const person = {
    name : "faizan",
    age : 22,
    city : 'delhi',
    proffession : "developer"
}

const objKeys = []
for (const key in person) {
   console.log(`keys : ${key}, Value : ${person[key]}`);   
}
console.log(Object.keys(person));

for (const key in person) objKeys.push(key)
console.log(objKeys);


const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(arrayOfArrays);

for (const eachArray of arrayOfArrays) {
    console.log(eachArray);
    
}
const flateArr = arrayOfArrays.flat()

const falteArrSum = flateArr.reduce((prev, curr) => prev + curr)
console.log(falteArrSum);

const csv = "apple,banana,cherry,dates"
const csvIntoArr = csv.split();

const capitaliz  = csvIntoArr.map((fruit) =>{
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
    
})


console.log(capitaliz);


const newVal = capitaliz.filter((val) => {
  return val.startsWith('B')
})


console.log(newVal);


const users = [
    {
        name: 'Faizan',
        orders: [
            { id: 1, amount: 200 },
            { id: 2, amount: 300 }
        ]
    },
    {
        name: 'Sara',
        orders: [
            { id: 3, amount: 150 },
            { id: 4, amount: 450 }
        ]
    }
];

const nameOfUser = users.map((user) => user.name)
console.log(nameOfUser);

users.forEach((user) => {
    console.log(user);
 const totalSpent = user.orders.reduce((prev, curr) => {
    const totalSum = prev + curr.amount;
    return totalSum
 })
    console.log(totalSpent);
    
})









