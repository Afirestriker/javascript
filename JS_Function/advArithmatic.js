
let number = 0;
let temp = 0;
const warning = document.getElementById("warning");
const result = document.getElementById("result");


function getAndVerifyNumber(){

    number = parseInt(prompt("Enter a number"));
    
    if(isNaN(number)){
        result.style.color = "red";
        result.innerHTML = "Enter a valid number!!";
        return false;
    } else {
        result.innerHTML = "";
        temp = number;
        return true;
    }
}
// close verifynumber()

function palindrome() {
  if (getAndVerifyNumber()) {
    let digit,
      rev = 0;

    while (temp > 0) {
      digit = parseInt(temp % 10);
      rev = rev * 10 + digit;
      temp = parseInt(temp / 10);
    }

    if (rev === number) {
      result.style.color = "green";
      result.innerHTML = number + " is a plindrome number.";
    } else {
      result.style.color = "red";
      result.innerHTML = number + " is not a plindrome number.";
    }
  }
}
// cloe palindrome()

function fibonacci(){
    if (getAndVerifyNumber()) {
      let a = 0;
      let b = 1;
      let c = 0;

      result.style.color = "green";
      result.innerHTML = a + ", " + b;

      for (let i = number; i > 2; i--) {
        c = a + b;
        result.innerHTML = result.innerHTML + ", " + c;
        a = b;
        b = c;
      }
    }
}

function prime(){
    if(getAndVerifyNumber()){
        let i =2;
        for(i=2; i<=parseInt((number/2)); i++){
            if(number%i === 0){
                result.style.color = "red";
                result.innerHTML = number + " is not a prime number";
                break;
            }    
        }
        if(i > parseInt((number/2))){
            result.style.color = "green";
            result.innerHTML = number + " is a prime number";
        }

    }
}

function factors(){
    if(getAndVerifyNumber()){
        let limit = parseInt(number/2);
        for (i=1; i<=limit; i++) {
          if (number % i === 0) {
            result.style.color = "green";
            result.innerHTML = result.innerHTML + i + ", ";
          }
        }
    }
}


function perfectNumber() {
  if (getAndVerifyNumber()) {
    let limit = parseInt(number / 2);
    let sum=0;
    for (i = 1; i <= limit; i++) {
      if (number % i === 0) {
        sum = sum + i;
      }
      if(sum === number){
        result.style.color = "green";
        result.innerHTML = number + " is a perfect number";
      } else{
        result.style.color = "red";
        result.innerHTML = number + " is not a perfect number";
      }
    }
  }
}