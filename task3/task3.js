
// const frutes = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']


// console.log(frutes.map( fru => {
//     return 'fru: ' + fru;
// }));//map define the hoe object is added to the arry
// console.log(frutes);
// //early arry is as it is
// // but the map arry is edit with map method 

const fruits = ["apple", "oranges", " ", "mango", " ", "lemon"];

console.log(fruits.map((fruit) => "Fruit :  " + fruit));
fruits[2] = "empty string";
fruits[4] = "empty string";
console.log(fruits);