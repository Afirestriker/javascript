document.addEventListener('DOMContentLoaded', () => {

    const currencyForm          = document.querySelector('#currencyForm');
    const txtBaseCurrencyCode   = document.querySelector('#txtBaseCurrencyCode');
    const txtTargetCurrencyCode = document.querySelector('#txtTargetCurrencyCode');
    const btnConvert            = document.querySelector('#btnSubmit');
    const divResult             = document.querySelector('#result');
    btnConvert.disabled         = true;
    
    const apikeyValue = new Headers();
    apikeyValue.append("apikey", "8nK1GxiCjFk3OhDvqJvvpjxCEZc108ZT");
    const requestDefaultOptions = {
        method : 'GET',
        headers : apikeyValue
    };

    const resetTxtInput = () => {
        txtBaseCurrencyCode.value="";
        txtTargetCurrencyCode.value="";
    }

    const currencyExchangeApiCall = (baseCurrencyCode, targetCurrencyCode) => {
        let URL = `https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrencyCode}&symbols=${targetCurrencyCode}`;
        fetch(URL, requestDefaultOptions)
            .then(response => response.json())
            .then(result => currencyExchangeApiResponse(result, 1))
            .catch(error => currencyExchangeApiResponse(error, 0));
    }

    const currencyExchangeApiResponse = (result, status) => {
        if(status)
        {
            divResult.style.color = "green";
            divResult.innerHTML = `1 ${result.base} is equals to ${result.rates[txtTargetCurrencyCode.value]} ${txtTargetCurrencyCode.value}`;
            resetTxtInput();
        } else {
            divResult.style.color = "red";
            divResult.innerHTML = "Something not right! Please Try Again.";
            resetTxtInput();
        }
    }

    /**Make use of querySelectorAll() method */
    document.querySelectorAll('.currencyCodeValue').forEach(txtInput => {
        txtInput.onkeyup = () => {
            const baseCurrencyLength   = txtBaseCurrencyCode.value.length   === 3;
            const targetCurrencyLength = txtTargetCurrencyCode.value.length === 3;            
            baseCurrencyLength && targetCurrencyLength ? btnConvert.disabled=false : btnConvert.disabled=true;
        }
    });
    
    currencyForm.onsubmit = () => {
        currencyExchangeApiCall(txtBaseCurrencyCode.value.trim().toUpperCase(), txtTargetCurrencyCode.value.trim().toUpperCase());
        /**Stop form from submitting to server */
        return false;
    }

});
