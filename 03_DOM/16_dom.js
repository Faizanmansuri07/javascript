// html dom is used to change upate insert an deletion operation

{/* <div class="container">
<h1 id="para">Hello javasript</h1>
<ul class="items">
    <li>javasript</li>
    <li>Python</li>
    <li>Node js</li>
</ul>
</div> */}

// geting element using dom methods
// getElementById()
// get the El by id

let para = document.getElementById("para");
console.log(para); // <h1 id="para">Hello javasript</h1>

// getElementByClassName()
// get el using class

const header = document.getElementsByClassName("header")
// ypu can also change the styles of elements
para.style.color = "red"
console.log(header); //its return html collection
// its simialr to array but not an array

//getElementByTagName()
para = document.getElementsByTagName('li')
console.log(para); //HTMLCollection(3) [li, li, li]

// puting array on html collection

const newArr = Array.from(para)
newArr.map((e) => {
    e.style.color = "pink"
})





// ----------------------------------------------- easy way of accessing elements --------------------------------
// ++++++++++++++++++++++ querySelector ++++++++++++++++++++++

// let items = document.querySelector(".items")
//console.log(items); // return whole ul 

//+++++++++ querySelectorAll +++++++++++
// in querySelectorAll you cannot change directly any elements
// beacuse its in form of array like structure

const items = document.querySelectorAll("li")
console.log(items); // return node list

items.forEach((e) => {
    e.style.color = "green"
})
para = document.getElementById("para");
// other dom property
let content = para.innerHTML
console.log(content); //Hello javasript<span> Thank you</span>

console.log(para.innerText); //Hello javasript Thank you
console.log(para.textContent); 
// in textContent id the element is not visible then it shows it

