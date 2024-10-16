function makeid(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    let counter = 0;

    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    return result;
}

const originalArray = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'AB'
    },
    {
        id: 4,
        name: 'c'
    },
];

for (let i = 5; i < 200000; i++) {
    originalArray.push({
        id: i,
        name: makeid(5)
    });
}

console.log("Total originalArray length", originalArray.length)

console.time('Using Array methods');
console.log(
    originalArray
      .filter(data => data.name.match(/([a])+/gi))
      .map(data => { return {details: `${data.id}-${data.name}`} })
)
console.timeEnd('Using Array methods');

console.time('Using For Loop')
const result = [];
for (const [index, data] of Object.entries(originalArray)) {
    if (!data.name.match(/([a])+/gi)) continue;

    result.push({
        details: `${data.id}-${data.name}`
    });
}
console.log("Result[] total length", result.length)
console.timeEnd('Using For Loop')

console.log(`
Lesson: Though the array method has two separate looping one with .filter and one with .map
And in for-loop the same thing has been done using one iteration.

The array method approach out-performed the for loop.
Because due to the way javaScript engine handle array methods and for-loop.

The array method are pre-optimized and are written in native code, and staright forward for a javaScript engines.
While the manually written for-loop is not.
`);
