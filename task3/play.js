// arrays and array method with map for objectes
const person  ={
    name:'jyoti',
    age: 36,
    greet(){
console.log("hi my name is " + this.name);
    }
};

const hobbies =['sports', 'cooking', 'driwing'];

// for(let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map( hobby => {
    return 'Hobby: ' + hobby;
}));//map define the hoe object is added to the arry
console.log(hobbies);
//early arry is as it is
// but the map arry is edit with map method 