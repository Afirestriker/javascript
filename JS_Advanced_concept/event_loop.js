setTimeout(() => console.log("Execute setTimeout"), 0);

const promise = new Promise((resolve, reject) => {
    resolve('Fulfilled');
}).then(result => console.log('Promise', result));

console.log('Execution End');
