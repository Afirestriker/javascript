
const txtCount = document.querySelector('#count');
let count = 0;

function incrementCount() {
    txtCount.innerHTML = ++count; 

    if(count % 10 === 0)
        alert(`Counter ${count} is a multiple of 10`);
}

document.querySelector('#incrementCount').onclick = incrementCount;
/* incrementCount is a function, and omitting the () parenthesis means, 
    the incrementCount() function is only going to be call when we click on 
    button with id 'incrementCount'.

    If we had put (), then it will run the function as soon as the statement (line:23)
    has got executed.
    */
