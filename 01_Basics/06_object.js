
// declaration
const newObj = {
    rollNo : 77,
    firstName : "Faizan",
    city : "chhapi",
    isLogin : true,
    greet : () => {
        console.log(`hello ${this.firstName}`)
    }
}
console.log(newObj);

console.log(newObj.greet() )// hello faizan
console.log(newObj.isLogin)

const  duplicate = newObj // copy object
console.log(duplicate);

// two way to access the objects values
console.log(newObj.firstName); //faizan
console.log(newObj["firstName"]); // faizan

// nested objects
let myObj = {
    name : "faizan",
    age : 18,
    myCars : {
        car1 : "ford",
        car2 : "suzuki",
        car3 : "BMW"
    },
    isMyCar : true
}
console.log(myObj);

// accessing values of objets

console.log("nested objects");

// first  way
console.log(myObj.myCars["car1"]);

//  second way
console.log(myObj.myCars.car1);

const sym1 = Symbol("my key1")

myObj = {
    name : "faizan",
    age : 18,
    // symbol
    [sym1] : "my key 1",
    myCars : [{
        car1 : "ford",
        car2 : "suzuki",
        car3 : "BMW"
}],
    isMyCar : true
}
console.log(myObj);
console.log(myObj.myCars[0]["car1"]);
console.log(myObj.myCars[0].car1);

 //++++ using symbol in objects
 // line no 47,53

 console.log(myObj);
 console.log(typeof sym1); // symbol
 // note : the type of symbol which is in object is string
 
 // key and values of objects
 //return array
console.log(Object.keys(myObj));
console.log(Object.values(myObj));

//spread operator 

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a",  4 : "b"}

// first way
//const obj3 = {...obj1, ...obj2};
//console.log(obj3); // {1: 'a', 2: 'b', 3: 'a', 4: 'b'}

// second way
// using assign() method
console.log(Object.assign({ }, obj1, obj2)); // {1: 'a', 2: 'b', 3: 'a', 4: 'b'}


// +++++++++++ object& array destructuring ++++++++++++++

// destruuring mean get those values that you want
const marksheet = {
    id : 1,
    name : "faizan",
    course : "BCA",
    grade : "A",
    isPassed : true
}
console.log(marksheet);

// only fetch value which need
const {id, name, grade} = marksheet;
console.log(`${id}, ${name}, ${grade}`) // 1, faizan, A

// you can set alias for keys
const {name : first} = marksheet
console.log(first);

// access object which is neasted
myObj = {
    name : "faizan",
    age : 18,
    // symbol
    [sym1] : "my key 1",
    myCars : [{
        car1 : "ford",
        car2 : "suzuki",
        car3 : "BMW"
}],
    isMyCar : true
}
console.log(myObj);

const {age, myCars} = myObj
console.log(`${age}, ${myCars}`);
console.log(myCars[0]);

const [{car1}] = myCars
console.log(car1)

//++++++++++  array destructure++++++++++
const myArr = [
    {
        ids : 1,
        names: "farhan"
    },
    {
        ids : 2,
        names : "faizan"
    },
        [
            {
                ids :4,
                names : "fadin"
            }
        ]
]


console.log(myArr);
const [,,[{names}]] = myArr
console.log(names);

// how i learn about objects
// declare 
// how to access values
// objects may be in the form of array
// accessing value of nested object
// object method like assign, spreadOperator
//destructuring of object and array

//+++++++++ small project +++++++
// conected to index.html
let data = []

document.querySelector("#submit").addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const birthDate = document.getElementById("birthDate").value

    // clear input 
  

    const dataObj = {
        name : name,
        age : age,
        date : birthDate
    }

     data.push(dataObj)  
    console.log(data);
   
    document.querySelector("#show").addEventListener('click', (e) => {
        e.preventDefault();
        data.forEach((items,index) => {
            const outputDiv = document.querySelector("#outputDiv")
            outputDiv.innerHTML += `<p>User : ${index+1} :  ${items.name}, ${items.age}, ${items.date} </p>`
        })
    })
})