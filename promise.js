const fetchData = () => {
    //promise 
    const promise = new Promise((resolve,reject) =>{;
    setTimeout(() => {
        resolve('Done!');
    }, 1500);
    });
    return promise;
};


//Solving callback hell with nested promises 
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
        console.log(text);
        return fetchData();
    })
        .then(text2 => {
        console.log(text2);
        return fetchData();
    });
}, 2000 );

console.log('Hello');
console.log('Hi there');
