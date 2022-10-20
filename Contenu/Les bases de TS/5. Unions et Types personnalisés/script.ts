// Unions
let code : string | number | boolean | object | Function
code = 6
code = "6"

let arr : (boolean |number ) []
arr = [true, false, 99]

const foo = (param: number | string) => {
    console.log(param)
}
foo('test')

// Types personnalisés
type mixedNumStr = number | string
type booleanOrObject = boolean | object

const baz = (param: mixedNumStr | booleanOrObject) => {
    console.log(param)
}
baz(6)

type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean;
}

const button: element = {
    x: 6,
    y: 8,
    id: "button",
    visible: true
}