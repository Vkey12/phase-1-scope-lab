// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'someone';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else';
}
