// // date and time in js



//   const newDate = new Date()
//   console.log(newDate.toString());
//   console.log(newDate.toDateString());
//   console.log(newDate.toString());
//   console.log(newDate.toISOString());
//   console.log(newDate.toJSON());
//   console.log(newDate.toLocaleDateString());
//   console.log(newDate.toLocaleString());
//   console.log(newDate.toTimeString());
//   console.log(newDate.toUTCString());
 
// const age = (day, month, year) => {
//     const today = new Date()
//     const currDay = today.getDate();
//     const currMonth = today.getMonth() + 1;
//     const currYear = today.getFullYear()

//     year = currYear - year;
//     console.log(year);

//     month = currMonth - month;
//     if(month < 0) {
//       year--;
//       month += 12;
//     }
//     day = currDay - day
//     if(day < 0) {
//         month--;
//         const previousMonth = new Date(currYear, currMonth - 1, 0);
//         day += previousMonth.getDate(); 
//     }
//     console.log(`${day}, ${month}, ${year}`);
    
// }