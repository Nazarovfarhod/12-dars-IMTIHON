// 1-masala

// let str = "To be or not to be";

// let str = "To be or not to be";
// let value = "not";

// function removeFirstOccurrences(str, value) {
//   let indexNot = str.indexOf(value);
//   if (indexNot == -1) {
//     return str;
//   } else {
//     return (
//       str.slice(0, indexNot) + str.slice(indexNot + value.length)
//     );
//   }
// }
// console.log(removeFirstOccurrences(str, value));

// 2-masala

// example
/*
 *   '<div>' => 'div'
 */

// let str = "<div>";
// function unbracketTag(str) {
//   return str.slice(1, -1);
// }
// console.log(unbracketTag(str));

// 3-masala

// let n = 3;

// function isPrime(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       sum += 1;
//     }
//   }
//   if (sum == 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isPrime(n);

// 4-masala
// let data = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];

// function group(array, keySelector, valueSelector) {
//   let result = {};
//   array.forEach(function (item) {
//     let key = keySelector(item);
//     let value = valueSelector(item);
//     if (result[key]) {
//       result[key].push(value);
//     } else {
//       result[key] = [value];
//     }
//   });
//   return result;
// }

// let result = group(
//   data,
//   function (item) {
//     return item.country;
//   },
//   function (item) {
//     return item.city;
//   }
// );

// console.log(result);

// 5-masala
// let n1 = -1;
// let n2 = 3;

// function getSumBetweenNumbers(n1, n2) {
//   let sum = 0;
//   for (let i = n1; i <= n2; i++) sum += i;
//   return sum;
// }
// console.log(getSumBetweenNumbers(n1, n2));

// 6-masala
// let arr = [1, 5, 6, 1, 5, 7, 2];

// function getElementsOneTime(arr) {
//   return arr.filter(function(element) {
//       return arr.indexOf(element) === arr.lastIndexOf(element);
//   });
// }

// console.log(getElementsOneTime(arr));

// 7-masala

// let deletedSameNumber = [];
// let arr = [1,2,3,3,4,5,5,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     deletedSameNumber.push(arr[i]);
//   }
// }
// console.log(deletedSameNumber);

// 8-masala
// let k = 2;
// let m = 6;
// let arr = [1, 5, 6, 1, 5, 7, 2,3,3,3].splice(k, m-1)

// console.log(arr);

// 9-masala

// const books = [
// {
//   title: "Halqa",
//   author: "Akrom Malik",
//   alreadyRead: false,
// },
// {
//   title: "Dunyo ishlari",
//   author: "O'tkir Hoshimov",
//   alreadyRead: true,
// },
// {
//   title: "Vaqtning qadri",
//   author: "Abdulfattoh Abu G'udda",
//   alreadyRead: false,
// },
// ];
// function displayReadStatus(books) {
//   books.forEach(function(book) {
//       if (book.alreadyRead == true) {
//         let read = "o'qilgan"
//         console.log(book.author + "ning " + book.title + " kitobi " +read )
//       }else {
//         let notRead = "o'qilmagan"
//         console.log(book.author + "ning " + book.title + " kitobi " + notRead )

//       }
//   });
// }


// displayReadStatus(books);


// 10-masala

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ].reduce((acc, curVal) => {
//   let allPrice = (acc += curVal.price - curVal.discount);
//   return acc;
// }, 0);
// console.log(products);
