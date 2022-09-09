
let count = 0;

function incrementCount() {
    document.querySelector('#txtCount').innerHTML = ++count; 

    if(count % 10 === 0)
        alert(`Counter ${count} is a multiple of 10`);
}

/* NOTE:
  - since in 001_domCounter.html file, we have loaded script inside head tag, which comes before <body>
    we are using 'DOMcontentLoaded' event listener, so that the portion of this JS code, execute
    after the whole html <body> is loaded. SO that the button with id "incrementCount" will be found.

    Else, if we could have loaded <script src=""></scritp> after the html <body> tag. 
    we won't required addEventListener in that scenario.

    Recommended way: load <script> after the body. This is done just for practice and being aware of the 
    functionality/concept.
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#incrementCount').onclick = incrementCount;
    /* incrementCount is a function, and omitting the () parenthesis means, 
        the incrementCount() function is only going to be call when we click on 
        button with id 'incrementCount'.
    
        If we had put (), then it will run the function as soon as the statement (line:23)
        has got executed.
    */
});
