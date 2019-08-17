//Nested promises
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};


//Callbacks 
setTimeout(() => {
    console.log('Timer is done!');
    fetchData( text => {
        console.log(text);
    });
}, 2000 );

console.log('Hello');
console.log('Hi there');
