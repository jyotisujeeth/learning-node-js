const person  ={
    name:'jyotisujeeth patil',
    age: 32,
    greet(){
console.log("hi my name is " + this.name);
    }
};

// const printName =() => {
//     console.log(personData.name);
// }

// const printName =({ name }) => { // this will take only the the properits are dropped
//     console.log(name);//jyotisujeeth patil
// }
// const printName =({ name, age }) => { // this will take only the the properits are dropped
//     console.log(name, age);
// }
// printName(person);//jyotisujeeth patil 32// here name is consider as local storgae 

// destructring function syntax

// const {name, age} = person;
// console.log(name, age);

const hobbies = ['sports', 'cooking', 'driwing'];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3);// here it is not a arry just value

// this is mailny help for ascess with specfic by obj or on arry what we requres