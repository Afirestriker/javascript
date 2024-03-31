/**Counter to keep total count of 'p' element */
let count = 0;
const maxLimit = 20;
/**Variable to store an html element with id='numberSeries' */
const numberSeries = document.getElementById("numberSeries");

/**Call to appendPara() once document fully loaded */
document.addEventListener("DOMContentLoaded", appendPara());

/**Function to create and append 'p' element */
function appendPara() {
    for(let i=0; i<maxLimit; i++) {
        const div = document.createElement("div");
        div.className = "posts";
        div.innerHTML = `Post #${++count} <button class="hide">Hide</button>`;

        numberSeries.appendChild(div);
    }
}

/**
 * Hide post element on hide button click.
 * This function is executed for all click event, irrespective of where you click on the entire document.
 * But the if statements will only execute if the click is trigger on button with class 'hide'.
 */
document.addEventListener('click', eve => {
    const btnElement = eve.target;
    if(btnElement.className === 'hide') {
        btnElement.parentElement.style.animationPlayState = 'running';
        btnElement.parentElement.addEventListener('animationend', () => {
            btnElement.parentElement.remove();
        });
    }
})

/**
 * window vertical scroll event handler
 * Append 10 more 'p' elements, if vertical scroll reaches the end of document
 */
window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        appendPara();
    }
};
