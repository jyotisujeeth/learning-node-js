// to Learnig of arrow function  insted of name function we are using here => 
//  this key word is asessable with the =>
var name = 'jyotisujeeth';
//console.log(name);

var age =32;
var hobbies = true;

const sumrizUser( userName, userAge, userHobbies ) =>{
    return (
        'Name is ' +
        userName + ', age is ' + userAge + ' and the  userHobbies is ' + userHobbies );   
    }

    console.log(sumrizUser(name, age,hobbies ));