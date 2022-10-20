"use strict";
// parametre facultatif avec ? (action dans l'exemple)
function multiply(num1, num2, action) {
    if (action)
        console.log(action);
    return num1 * num2;
}
console.log(multiply(2, 3, "create"));
let foo;
foo = () => { console.log("foo"); };
// Function signatures
let baz;
baz = (a, b) => a + b;
//Callback
function greetings(fn) {
    fn("Hello");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
