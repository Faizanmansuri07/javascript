// events
// event means when you click something then somthing happen
// there are many types pf event

// onclick()
// implement in html and also js

function sayHello() {
    alert("hello user !")
}
document.querySelector("#clickMe").onclick = (name) => sayhii('faizan')
// // you can also add this in js directly
function sayhii(user) {
    alert(`hello ${user} js developer`)
}
// document.querySelector("#clickMe").onclick = () => sayhii()

// document.querySelector("#clickMe").onclick = function() {
//     alert("hello")
// }

// document.querySelector("#clickMe").onclick = function hii() {
//     alert("hello user")
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// addEventListner()

// document.querySelector(".items").addEventListener('click', function(e){
//   //  console.log(e); // return pointer event
//     console.log(`clicked inside ul`);
    
// }, false)

// document.querySelector("#tree").addEventListener('click', (e) => {
//     console.log(`clicked on tree`);
//     e.stopPropagation() // stop the event which is on parent Element
// },false)

// in true case
// output : - clicked inside ul
//  clicked on tree

// in false its opposite

// preventDefault()
document.querySelector("#google").addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`anchor clicked`);
    
})

// javascript execute code from bottom in addEventListner
//+++++++++++++++++++++++++ removing target el ++++++++++++++

document.querySelector(".items").addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target.tagName === "IMG") {
        const removeIt = e.target.parentNode
        // there are two ways  to remove element
        // removeIt.remove()
        removeIt.parentNode.removeChild(removeIt)
    }
   
})

document.querySelector(".outer-div").addEventListener('click',(e) => {
    console.log('clickon outer div');
    
},false)

document.querySelector(".inner-div").addEventListener('click',(e) => {
    console.log('clickon inner div');
    e.stopPropagation()
},false)

document.querySelector("#innerBtn").addEventListener('click',(e) => {
    console.log('clickon inner button div');
   
    
},false)