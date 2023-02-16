/**Counter to keep total count of 'p' element */
let count = 0;
let maxLimit = 20;
/**Variable to store an html element with id='numberSeries' */
const numberSeries = document.getElementById("numberSeries");

/**Call to appendPara() once document fully loaded */
document.addEventListener("DOMContentLoaded", appendPara());

/**Function to create and append 'p' element */
function appendPara() {
    for(let i=0; i<maxLimit; i++) {
        const div = document.createElement("div");
        div.className = "posts";
        div.innerHTML = `Post #${++count}`;
        numberSeries.appendChild(div);
    }
}

/**window vertical scroll event handler
 * Add 10 more 'p' elements, if vertical scroll, reaches the end of document
 */
window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        appendPara();
    }
};
