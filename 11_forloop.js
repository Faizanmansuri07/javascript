// for loop

// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// print 1 to 10 numbers
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
// this i variable cannot accesible outside the for loop

let arr = []
for (let index = 0; index < 20; index++) {
    arr.push(index)
}
console.log(arr);

// printing multiplication table

// for(let i = 1; i <= 10; i++) {
//     console.log(`value of ${i}`)
//     for(let j = 1; j <= 10;  j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }

// +++++++++++ break && Continue ++++++++++++++++

for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        console.log("Detected 5");
        break; // when 5 detected the loop gonna termiante
    }
    console.log(i);
    
}

// continue
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        console.log(`Detected 5`);
        continue // when 5 detect its not print it and continue the process
    }
    console.log(i);
    
}