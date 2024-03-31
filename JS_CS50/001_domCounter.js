/* NOTE:
  - since in 001_domCounter.html file, we have loaded script inside head tag, which comes before <body>
    we are using 'DOMcontentLoaded' event listener, so that the portion of this JS code, execute
    after the whole html <body> is loaded. 
    *This process is implemened only to avoid element not found bug.

    Else, if we could have loaded <script src=""></scritp> after the html <body> tag. 
    we won't required addEventListener for DOMContentLoaded in that scenario.

    *Recommended way: load <script> after the body. 
    This is done just for practice and being aware of the functionality/concept.
 */
document.addEventListener('DOMContentLoaded', () => {

    let counter = 0;
    const txtCount = document.querySelector('#txtCount');
    
    if(!localStorage.getItem("counter")){
        counter = localStorage.setItem("counter", 0);
    }else{   
        counter = localStorage.getItem("counter")
        txtCount.innerHTML = counter;
    }

    function incrementCount() {
        txtCount.innerHTML = ++counter;
        if(counter % 10 === 0) {
            alert(`Counter ${counter} is a multiple of 10`); 
        }
        localStorage.setItem("counter", counter)
    }

    /* incrementCount is a function, parenthesis are not used, so that
       every time the incrementCount button is called, the function should execute.
     */
    document.querySelector('#incrementCount').onclick = incrementCount;
    
    /* Auto increment counter value after every 1 sec*/
    let interval_ID = 0;
    document.querySelector('#startAutoIncrement').onclick = function() {
        txtCount.style.color = "green";
        interval_ID = setInterval(incrementCount, 1000)  /*1000 is 1000ms i.e 1 Seconds*/
    }

    /* Stop counter auto incrementation */
    document.querySelector('#stopAutoIncrement').onclick = function() {
        txtCount.style.color = "red";
        clearInterval(interval_ID);
    }

    /* reset counter */
    document.querySelector('#resetCounter').onclick = () => {
        localStorage.setItem('counter', 0);
        counter = localStorage.getItem("counter");
        txtCount.innerHTML = localStorage.getItem("counter");
        txtCount.style.color = "black";
    }
});
