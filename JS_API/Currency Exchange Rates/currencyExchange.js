document.addEventListener('DOMContentLoaded', () => {

    const currencyForm          = document.querySelector('#currencyForm');
    const txtBaseCurrencyCode   = document.querySelector('#txtBaseCurrencyCode');
    const txtTargetCurrencyCode = document.querySelector('#txtTargetCurrencyCode');
    const btnConvert            = document.querySelector('#btnSubmit');
    const divResult             = document.querySelector('#result');
    btnConvert.disabled         = true;
    
    /**
     *Resets the html <form>
     */
    const resetTxtInput = () => {
        txtBaseCurrencyCode.value="";
        txtTargetCurrencyCode.value="";
        txtBaseCurrencyCode.focus();
    }

    /**
     * Append API Access code to Headers object
     */
    const apikeyValue = new Headers();
    apikeyValue.append("apikey", "8nK1GxiCjFk3OhDvqJvvpjxCEZc108ZT");
    const requestDefaultOptions = {
        method : 'GET',
        headers : apikeyValue
    };

    /**
     * JS Promise on API call
     * @param {num} baseCurrencyCode denotes the base currency to convert from
     * @param {num} targetCurrencyCode  denotes the target currency to convert to
     
     * NOTE: since we are using JS arrow functions and based on convention, an arrow function
             must have an return statement. And if there's only one parameter and only
             one statement i.e reurn statement. 
             We can easily write the arrow function
             from this: (abc) => { return xyz}
             to this  :  abc  =>  xyz
             This is what have been done below
     */
    const currencyExchangeApiCall = (baseCurrencyCode) => {
        let URL = `https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrencyCode}`;
        fetch(URL, requestDefaultOptions)       //making an api call and fetching the respone.
            .then(response => response.json())  //then, takes the reponse and convert to JSON format
            .then(data => currencyExchangeApiResponse(data, 1))  //then, once data is issue, do something...
            .catch(error => currencyExchangeApiResponse(error, 0));  //catch, if any error while API call & do something...
    }

    /**
     * Action: after receiving response from API/Promise
     * @param {JSON} result the API response in JSON format 
     * @param {boolean} status  denotes API response as 'success' or 'failed'
     */
    const currencyExchangeApiResponse = (result, status) => {
        if(status)
        {
            //console.log(result);
            divResult.style.color = "green";
            let rates = txtTargetCurrencyCode.value.toUpperCase();
            divResult.innerHTML = `1 ${result.base} is equals to ${result.rates[rates].toFixed(3)} ${rates}`;
            resetTxtInput();
        } else {
            console.log("Error", result);
            divResult.style.color = "red";
            divResult.innerHTML = "Something not right! Please Try Again.";
            resetTxtInput();
        }
    }

    /**
     * Make use of querySelectorAll() method
     */
    document.querySelectorAll('.currencyCodeValue').forEach(txtInput => {
        txtInput.onkeyup = () => {
            const baseCurrencyLength   = txtBaseCurrencyCode.value.length   === 3;
            const targetCurrencyLength = txtTargetCurrencyCode.value.length === 3;            
            baseCurrencyLength && targetCurrencyLength ? btnConvert.disabled=false : btnConvert.disabled=true;
        }
    });

    /**
     * Event: on form submit
     * @returns boolean false, to stop the form from submitting
     */
    currencyForm.onsubmit = () => {
        divResult.style.color = "black";
        divResult.innerHTML = "Loading...";
        currencyExchangeApiCall(txtBaseCurrencyCode.value.toUpperCase());
        return false;
    }

});
