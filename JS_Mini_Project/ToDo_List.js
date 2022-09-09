/*
 * Author: Ashish Agrawal
 * Date:   09-Sept-2022
 * Topic:  JS file for ToDo_List Application
 */

const ul = document.querySelector('#tasksList');
const task = document.querySelector('#task');
const btnSubmit = document.querySelector('#formBtnSubmit')

/* make button 'Submit' disabled on page load */
document.addEventListener('DOMContentLoaded', () => {
    btnSubmit.disabled = true;
});

/* toggle button 'Submit', based on input value lenght */
task.onkeyup = function() {
    (this.value).length > 0 ? btnSubmit.disabled=false : btnSubmit.disabled=true;
}

/* on form submit, create a new <li> and append to <ul> */
document.querySelector('#form_task').onsubmit = () => {
    const li = document.createElement('li');
    li.innerHTML = task.value;
    ul.appendChild(li);
    task.value = "";

    /* Stop html <form> from submitting, 
       since we are not using any backend server here. 
    */
    return false;
}