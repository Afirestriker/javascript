/**
 * Good side of callback:
 * - Ability to perform asyn operation
 *
 * Bad Side of Callback:
 * - Callback Hell
 * - Inversion of control
 */
const orders = ['shoes', 'jacket', 'pants'];

api.createOrder(function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet(function () {

            })

        })

    })

})
