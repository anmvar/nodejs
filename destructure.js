const person = {
    name: 'Max',
    age: 29,
    greet() {
       console.log('Holi ' + this.name);
    }
};

// Object destructuring - extracts and stores name in a variable 
const printName = ({ name }) => {
    console.log (name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);