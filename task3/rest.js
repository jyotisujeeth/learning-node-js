// understanding spred and rest operators
 //the main concept is this here we are not adding to the earlear arry insted it coppy and up dated new arrry 
 // 
 const person  ={
    name:'jyoti',
    age: 36,
    greet(){
console.log("hi my name is " + this.name);
    }
};
//const copyedPerson=[...person];//person is not iterable at Object.
const copyedPerson={...person};// for obj we use {}
//console.log(copyedPerson); // the o.p is { name: 'jyoti', age: 36, greet: [Function: greet] }
const hobbies =['sports', 'cooking', 'driwing'];
//const copiedArry= [hobbies];// nested array with older [ [ 'sports', 'cooking', 'driwing' ] ] // the first elemt is old array
   // const copiedArry = hobbies.slice();// it simple coppy the array [ 'sports', 'cooking', 'driwing' ] but main probleam with is this if we add any changes to new array it will effect to both array
//with no argymnet
   const copiedArry= [...hobbies];// spred oprater op is [ 'sports', 'cooking', 'driwing' ]
//console.log(copiedArry); //[ 'sports', 'cooking', 'driwing' ]


// const toArry =(arg1, arg2, arg3) => { // this arry is not flexible it here we canoy add a forth argument becouse it only ment for 3 argument
// return [arg1, arg2, arg3];
// }

// console.log(toArry); // [Function: toArry]
console.log(toArry(1, 2,3,4));//[ 1, 2, 3 ] it wont take a new argument this [problme is elmented with the help of rest]

// rest operator it is same as ... operator but is define is diffrenft place were is using define 
const toArry =(...args) => {//rest operators
    return args;
}
console.log(toArry(1, 2,3,4));//[ 1, 2, 3, 4 ]

