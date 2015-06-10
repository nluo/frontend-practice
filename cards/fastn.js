/*
    A convenience singleton that sets up fastn so it can be required from other files.
*/

// Require and initialise fastn
var fastn = require('fastn/')({
    // component constructors.. Add what you need to use

    text: require('fastn/textComponent'), // Renders text
    _generic: require('fastn/genericComponent'), // Renders DOM nodes
    list: require('fastn/listComponent')
}, true);

module.exports = fastn;
