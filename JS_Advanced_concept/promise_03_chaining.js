const cart = ["shoes", "pants", "kurtas"];

createOrder(cart)
    .then(orderId => {
        console.log(`Order Placed for Order No. ${orderId}`);
        return orderId;
    })
    .then(orderId => {
        return proceedToPayment(orderId);
    })
    .then(paymentInfo => {
        console.log(paymentInfo);
        return paymentInfo;
    })
    .catch(err => {
        console.log(err.message); // catched all then erros above this catch function
    })
    .then((paymentInfo) => {
        // console.log("No Matter What Happens, I will definitely be called and execute", response);
        return createOrderSummary(paymentInfo);
    })
    .then(orderSummary => {
        console.log(orderSummary);
        return orderSummary;
    })
    .then(differentiateAmount => {
        return updateWallet(differentiateAmount);
    })
    .then(walletReponse => {
        console.log(walletReponse);
    })
    .catch(err => {
        console.log(err.message); // generic catch statement
    });

///
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject(new Error("Cart is not valid"));
        }

        const orderId = "123456";

        if (orderId) resolve(orderId);
        else reject(new Error("Something went wrong. Please try again!"));
    });
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (!orderId) reject(new Error('Invalid Order No.'));
        resolve(`Payment Successfull for Order No. ${orderId}`);
    });
}

function createOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        if (!paymentInfo) reject(new Error('Payment info invalid'));

        resolve('Order Summary Created');
    });
}

function updateWallet(amountToReduce) {
    return new Promise((resolve, reject) => {
        if (!amountToReduce) reject("Can't update wallet");
        else resolve("Wallet Updated");
    });
}
