// // declarations :-

// const str = "Faizan Mansuri"
// const str1 = 'Faizan Mansuri'
// const str2 = new String('Faizan Mansuri')

// console.log(str); //Faizan Mansuri
// console.log(str1); //Faizan Mansuri
// console.log(str2); // return string with object

// //-------------------------------- string Methods ----------------
// // -------------- note-----------
// // every method return new value its not effect the real string
// // beacuse it's  primitive datatypes

// // length();
// // returns the length of string
// console.log(str1.length);

// // charAt()
// // return the char at perticular position
// // in argument pass the number as value
// // if the number is out of the string length then its 
// // return empty string
// console.log(str1.charAt(1));

// // charCodeAt()
// // The method returns a UTF-16 code (an integer between 0 and 65535).

// console.log(str.charCodeAt(0));

// // at();
// //return a chaar at perticular  position
// // --- defrence between at() && charAt() ,
// // at() method take the nagetive values also but 
// // charAt() not
// // when you give minus value then its not include 0 
// // and start from end of the string 
// // -1 means last character
// // if char not found then its return undefined
// const ats = str.at(-1);
// console.log(ats);

// console.log(str[20]); //undefined

// // --------------- other usefull methods-----------------

// // 1 . slice(start, end)

// // slice() method return perticular part of string from start to end index
// // end index no.not include

// const newStr = "my-name-is-Faizan"
// let sliceStr = newStr.slice(3,7) // output => my-
// console.log(sliceStr);

// // second Use
// sliceStr = newStr.slice(3) // output => name-is-Faizan
// console.log(sliceStr);
    
// // you can also use negative numbers
// console.log(newStr.slice(12,-3));


// // 2. substring(start, end);

// // this method also not include last index
// // it's similar to the slice method 
// // but it's not accept nagetive values 
// // treat nagetive values as 0
// console.log(newStr.substring(-2,4)); // consider -2 => as 0


// // 3 . substr(start, length)
// // this method return string which is not
// // including from the start and length of the string 
// //this method also not include last index
// //it's similar to the slice method 

// let fruit = "Apple, Banana, Kiwi";
// console.log(fruit.substr(7, 6));

// // you can also give nagetive values
// console.log(fruit.substr(-4));

// // toUpperCase();
// console.log(fruit.toUpperCase());

// // trim() method
// const also = "         Faizan                 "
// console.log(also.trim());


// // split();
// // split string depending uppon the parameter of split method
// const names = "faizan, fardin, hasnain";
// const newNames = names.split(',')
// console.log(newNames);

// let txt = "I can eat bananas all day";
// let x = txt.slice(10,17)
// console.log(x);
