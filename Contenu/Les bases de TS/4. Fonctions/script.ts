// parametre facultatif avec ? (action dans l'exemple)
function multiply(num1 : number, num2 : number, action?: string) {
    if(action) console.log(action)
    return num1 * num2;
}
console.log(multiply(2, 3, "create"))

let foo : Function;
foo = () => {console.log("foo")}

// Function signatures
let baz: (a: number, b: number) => number;
baz = (a,b) => a + b;

//Callback
function greetings(fn:(a:string) => void) {
    fn("Hello");
}

function printToConsole(msg:string) {
    console.log(msg);
}

greetings(printToConsole);