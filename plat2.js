const person = {
    name: 'Max',
    age: 29,
    greet() {
       console.log('Holi ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//onsole.log(hobbies);
// objs and arrays are reference types. WHen you
// store an array, you can edit it despite it being 
// on a const using a .push() method --- hobbies.push('Perinoling');

/// Spread operators pull out the elements of an array/object 
const copiedArray = [...hobbies];
console.log(copiedArray);

/// Rest operators do the opposite, they add elements within reference types
const toArray = (...args) => {
    return args;
};





