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
console.log(header); //its return html collection
// its simialr to array but not an array

//getElementByTagName()
para = document.getElementsByTagName('li')
console.log(para); //HTMLCollection(3) [li, li, li]

// ----------------------------------------------- easy way of accessing elements --------------------------------
// ++++++++++++++++++++++ querySelector ++++++++++++++++++++++

const items = document.querySelector(".items")
console.log(items); // return whole ul 
