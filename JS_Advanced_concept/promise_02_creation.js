// 👇 Creating a Promise, Promise Error Handling, and Promise Cahining

const cart = ["shoes", "pants", "kurtas"];

const promise2 = createOrder(cart); // orderId

/// consumer
promise2
    .then(function (orderId) {
        console.log(orderId);
        // proceedToPayment(orderId);
    })
    .catch(function (err) {
        // gracefully handling promise errors
        console.log(err.message);
    });

/// producder
function createOrder(card = []) {
    // step 1: validate the card
    // Step 2: createOrder
    // step 3: orderId

    const pr = new Promise(function (resolve, reject) {
        if (!validateCard(card)) {
            const err = new Error("Card is not valid");
            reject(err);
        }

        const orderId = "12345"; // DBcon.createOrder()

        if (orderId) resolve(orderId);
        else reject(new Error("Error in creating order"));
    });

    return pr;
}

function validateCard(card) {
    return false;
}
