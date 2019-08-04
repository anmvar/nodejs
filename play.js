const name = 'guru';
let age = '22';
const hobbies = 'pianito';


const testing = (userName, userAge, userHobby) => {
    return (
    'Name is ' + 
    userName + 
    ', and their age is ' +
    userAge + 
    '. Also, they enjoy '
     + userHobby
     );
};

const add = (a, b) => a + b;

console.log(add(1 ,2));


console.log(testing(name,age,hobbies));

