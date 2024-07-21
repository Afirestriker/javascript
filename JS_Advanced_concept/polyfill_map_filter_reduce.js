/**
 * Polyfill in javaScript
 * A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
 */
const arr = [1, 2, 3, 4];

// Polyfill Array Map Higher Order Function
if (!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        const returnArray = [];

        if (typeof callback !== 'function')
            throw new(`${callback} is not a function`);

        for (let item = 0; item < this.length; item++) {
            returnArray.push(callback(this[item], item));
        }

        return returnArray;
    };
}

// Polyfill Array Filter Higher Order Function
if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback) {
        if (typeof callback !== 'function')
            throw new(`${callback} is not a function`);

        const filteredArray = [];

        for (let item = 0; item < this.length; item++) {
            callback(this[item], item) && filteredArray.push(this[item]);
        }

        return filteredArray;
    };
}

// Polyfill Array Reduce Higher Order Function
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback, initialValue = null) {
        if (typeof callback !== 'function')
            throw new(`${callback} is not a function`);

        let accumulatedValue = initialValue || 0;

        for (let item = 0; item < this.length; item++) {
            accumulatedValue = callback(accumulatedValue, this[item]);
        }

        return accumulatedValue;
    };
}

console.log(arr.map(item => item * 2));

console.log(arr.filter(item => item >= 2));

console.log(arr.reduce((accumulator, current) => accumulator + current, 5));
