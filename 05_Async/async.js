// basically javascript wok on synhronous programming
// js has only one thread to execute the program

// sync..ous means when the first statement start executing no other statement will execute
// when that statement executed than other statement execute

// in async..us the program keep executing current statement and other next statement also executed
// there are two functions

//++++++++++++++++ settimeout() ++++++++++++++++++++++
// settimeout used to take a perticular time to execute the statement or type of function

// let timeOut = 0;
// document.querySelector("#start").addEventListener("click",() => {
//     timeOut = setTimeout(() => {
//         document.querySelector("#header").innerHTML = `Welcome In chai aur javascript`
//     },3000)
// })

// document.querySelector("#close").addEventListener("click",() => {
//     console.log('timeOut clear');
    
//   clearTimeout(timeOut)
// })


// you can also pass whole function into setTimeout parameter

// function changMe() {
//     document.querySelector("#header").innerHTML = `Welcome In chai aur javascript`
// }

// document.querySelector("#start").onclick = () => setTimeout(changMe, 2000)

//+++++++++++++++++++++ setInterval() ++++++++++++++++
// used to reapet a thing for in perticular seconds

// coundown timer using setinterval------------------------------------------------------------------------------------------

function startCoundown() {
    let maxCount = 10
    let interval = setInterval(() => {

        document.querySelector("#coundown").innerHTML = maxCount
        console.log(maxCount);
        
        if(maxCount < 1) {
            document.querySelector("#coundown").innerHTML = "time Up "
            clearInterval(interval)
        }
        maxCount--;
    },1000)
}
// ++++++++++++++++++++++++++++++++++++++

// let isStartInterval;
document.querySelector("#start").addEventListener("click", () => {
    isStartInterval = setInterval(() => {
        console.log("hello Js", Date.now());
        
    },1000)
})

document.querySelector("#close").addEventListener("click", ()=> {
    clearInterval(isStartInterval)
    console.log("+++++++++++ printing Stoped ++++++++++++");
    
    
})