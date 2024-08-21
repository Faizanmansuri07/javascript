// // for each loop is used to put loop

// const arr = ["faizan", "farhan", "fardin", "ahil"]

// // arr.forEach( (e) => {
// //     console.log(e);
    
// // } )
// // in function callback
// // it has 3 values
// // first the values of arr
// // second the index of elements
// // third the whole array

// arr.forEach( (item, index, arr) => {
//     console.log(`the index ${index}, values : ${item} and array ${arr} `);
    
// } )
// let num = [10, 20, 30,  40, 50]

// num.forEach((e) => {
//     e++;
//     console.log(e);
    
// })

// num.forEach(multiply)

// function multiply(value, index, arr) {
//     arr[index] = value * 10;
   
    
// }
// console.log(num);

// const city = ["chhapi", "basu", "kanodar", "majadar"]

// city.forEach( (e) => {
//     console.log(e + " City");  
// })

// const student = [
//     {
//         name : "faizan",
//         score : 30
//     },
//     {
//         name : "farhan",
//         score : 60
//     },
//     {
//         name : "ahil",
//         score : 90
//     },
// ]

// student.forEach( (e) => {
//     console.log(`name : ${e.name} and score : ${e.score}`);
    
// })
// //+++++++++++++++++++++++++++
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "Blue"
//   };
// console.log("+++++++++++++++++ for in practise ++++++++++++");

//   for (const key in car) {
//     console.log(`property : ${key} values : ${car[key]}`);
    
//   }

// //++++++++++++++++++++++++++++++++++++++++++++
// const books = {
//     title : "man will be man",
//    auther : "faizan mansuri",
//    year : 2020

// }

// for (const key in books) {
//     console.log(`key : ${key}, value : ${books[key]}`);
    
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25
//   };

//   for (const key in person) {
//     if(typeof person[key] === "number") {
//         console.log(`${key}   ${person[key].length = person[key]}`)
//     }
//     else{
//         console.log(`${person[key]}, length : ${person[key].length} `)
//     }
    
//   }


//   const movies = [
//     {
//       title: "Inception",
//       genre: "Sci-Fi",
//       rating: 8.8
//     },
//     {
//       title: "The Dark Knight",
//       genre: "Action",
//       rating: 9.0
//     },
//     {
//       title: "Interstellar",
//       genre: "Adventure",
//       rating: 8.6
//     },
//     {
//       title: "Parasite",
//       genre: "Thriller",
//       rating: 8.6
//     },
//     {
//       title: "The Shawshank Redemption",
//       genre: "Drama",
//       rating: 9.3
//     }
//   ];

//   for (const movie of movies) {
//     console.log(`Title : ${movie.title}`);
    
//   }
// console.log("+++++++++++++++++ important ++++++++++++++");

//   movies.forEach( (e) => {
//     for (const key in e) {
//         console.log(e[key],key);
        
//     }
//   } )

  //+++++++++++++++++++ practice ++++++++++++++++

  const library = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genres: ["Classic", "Fiction"]
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genres: ["Classic", "Historical Fiction"]
    },
    {
      title: "1984",
      author: "George Orwell",
      genres: ["Dystopian", "Science Fiction"]
    }
  ];

  
//   library.forEach( (e) => {
//     console.log(`generes Of :${e.title}`);
    
//      for (const key of  e.genres) {
//         console.log(`${key}`);
        
//      }    
//   })

// ++++++++++++++++++++++++ practise 2 +++++++++++++++++

const users = [
    {
      name: "Alice",
      age: 30,
      friends: ["Bob", "Charlie", "David"]
    },
    {
      name: "Eve",
      age: 25,
      friends: ["Frank", "Grace"]
    },
    {
      name: "Hannah",
      age: 35,
      friends: ["Isaac", "Jack", "Kira"]
    }
  ];
  
//   users.forEach((e) => {
//     console.log(e);
    
//     console.log("Friends Of : - ",e.name);
//     for (const friend of e.friends) {
//         console.log(friend);
        
//     }
//   })


//++++++++++++++++++++++++++++++++++++++++++


const orders = [
    {
      orderId: 101,
      customerName: "John Doe",
      items: [
        { name: "Laptop", price: 1200 },
        { name: "Mouse", price: 25 }
      ]
    },
    {
      orderId: 102,
      customerName: "Jane Smith",
      items: [
        { name: "Phone", price: 800 },
        { name: "Headphones", price: 50 }
      ]
    },
    {
      orderId: 103,
      customerName: "Michael Johnson",
      items: [
        { name: "Tablet", price: 500 },
        { name: "Charger", price: 20 }
      ]
    }
  ];
  
  // print all names and price using forEach and forOf

  orders.forEach((e) => {
    console.log(`items Of order :- ${e.orderId}`);
    
    for (const item of e.items) {
        console.log(`items Name : ${item.name} and price :- ${item.price}`);
        
    }
    console.log("  ");
    
  })

  // printing all key value pairs

orders.forEach( (e)  =>{
  console.log("order id : ",e.orderId);
  for (const key in e) {
    if(key === "items") {
      console.log(key);
      e.items.forEach((e) =>{
        console.log(`${e.name} , ${e.price}`);
      })
   

    }  else {
      console.log(`key : ${key} value : ${e[key]}`);
      
    }
  }
  console.log("    ");
  
})

//++++++++++++++++++++ questions++++++++++++++

const categories = [
  {
    categoryName: "Electronics",
    products: [
      { name: "TV", price: 400 },
      { name: "Laptop", price: 1000 }
    ]
  },
  {
    categoryName: "Clothing",
    products: [
      { name: "T-shirt", price: 20 },
      { name: "Jeans", price: 50 }
    ]
  },
  {
    categoryName: "Furniture",
    products: [
      { name: "Sofa", price: 600 },
      { name: "Table", price: 150 }
    ]
  }
];

// Print all category names using for...of.
for (const category of categories) {
  console.log(`${category.categoryName}`);
  
}

// Use forEach to iterate over the categories and, inside that, use for...of to print all product names and prices for each category.

categories.forEach((e) => {
  console.log(`category names : ${e.categoryName}`);
  for (const product of e.products) {
    console.log(`items name : ${product.name}, price : ${product.price}`);
    
  }
})

// Use for...in to print all key-value pairs for each order.

categories.forEach((category) => {
  console.log(`each category name : ${category.categoryName}`);
  for (const key in category) {
    if(key === "products") {
        category.products.forEach((product) => {
          console.log(`product name : ${product.name}, price : ${product.price}`);
   
        })
    }   else {
      console.log(`key : ${key} values : ${category[key]}`);
      
    }
  }
  console.log(" \n\n");
  
})


//++++++++++++++++++++++++++++++++++
const university = {
  science: {
    courses: ["Physics", "Chemistry", "Biology"]
  },
  engineering: {
    courses: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"]
  },
  humanities: {
    courses: ["History", "Philosophy", "Literature"]
  }
};

// print name of dept
for (const key in university) {
  console.log(key);
  
}
//print all courses of univescity
console.log("+++++++++++++++++++++");

for (const dept in university) {
  console.log(`Dept  : ${dept}`);
  university[dept].courses.forEach((e) => {
    console.log(`${e}`);
    
  })
  console.log( " ");
  
}

// // printing key value pair
// for (const dept in university) {
//   console.log(dept);
//   for (const key in university[dept]) {
//     console.log(key, university[dept][key]);
    
//   }
//   console.log(" ");
  
// }

for (const department in university) {
  console.log(`Details of ${department} department:`);
  for (const key in university[department]) {
    console.log(`${key}: ${university[department][key]}`);
  }
  console.log("");  // Blank line for readability
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const company = {
  finance: {
    manager: "Alice Johnson",
    employees: ["John Doe", "Jane Smith", "Robert Brown"]
  },
  marketing: {
    manager: "Bob White",
    employees: ["Emily Davis", "Michael Green", "Sarah Lee"]
  },
  development: {
    manager: "Carol Taylor",
    employees: ["James Wilson", "Jessica Moore", "David Clark"]
  }
};
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++\n++++++++++++++++");
console.log(" ");

//+++++++++++++++++++++
for (const dept in company) {
  console.log(`${dept}, and manager : ${company[dept].manager}`);
  company[dept].employees.forEach((e) =>{
    console.log(e);
    
  })
  console.log(" ");
  
}

//printing key value pairs
for (const dept in company) {
  console.log(`${dept}, and manager : ${company[dept].manager}`);
  for (const key in company[dept]) {
    console.log(`${key} , ${company[dept][key]}`);
    
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++
const school = {
  grade1: {
    subjects: {
      math: {
        teacher: "Mr. Smith",
        students: ["Alice", "Bob", "Charlie"]
      },
      english: {
        teacher: "Ms. Johnson",
        students: ["David", "Eva", "Frank"]
      }
    }
  },
  grade2: {
    subjects: {
      science: {
        teacher: "Mr. Brown",
        students: ["George", "Hannah", "Ivy"]
      },
      history: {
        teacher: "Ms. Davis",
        students: ["Jack", "Kira", "Leo"]
      }
    }
  },
  grade3: {
    subjects: {
      art: {
        teacher: "Ms. Wilson",
        students: ["Mia", "Noah", "Olivia"]
      },
      music: {
        teacher: "Mr. Green",
        students: ["Paul", "Quinn", "Ruby"]
      }
    }
  }
};
console.log(school);

for (const grade in school) {
  console.log(`Subjects in ${grade}:`);
  
  const subjects = school[grade].subjects;
  for (const subject in subjects) {
    console.log(`Subject: ${subject}`);
    console.log(`Teacher: ${subjects[subject].teacher}`);
    console.log("Students:");
    
    subjects[subject].students.forEach((student) => {
      console.log(`- ${student}`);
    });
    console.log("");  // Blank line for readability
  }
}

//___________________________


