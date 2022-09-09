/*
 * Author: Ashish Agrawal
 * Date:   09-Sept-2022
 * Topic:  JS file for ToDo_List Application
 */

const ul = document.querySelector('#tasksList');
const task = document.querySelector('#task');
const btnSubmit = document.querySelector('#formBtnSubmit')

/* By default 'Submit' button is disabled */
document.addEventListener('DOMContentLoaded', () => {
    btnSubmit.disabled = true;
});

/* toggle 'Submit' button, on keyword keyup */
task.onkeyup = function() {
    (this.value).length > 0 ? btnSubmit.disabled=false : btnSubmit.disabled=true;
}

/* on form submit, create & append a new <li> to <ul> */
document.querySelector('#form_task').onsubmit = () => {
    const li = document.createElement('li');
    li.innerHTML = task.value;
    ul.appendChild(li);
    task.value = "";

    /* Stop html <form> from submitting, 
       since everything is client side and not on backend server.
    */
    return false;
}