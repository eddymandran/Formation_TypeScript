// ---- Tableau -----------------------------------
const fruits = ['fraise', 'pomme']
fruits.push("cerises")
console.log(fruits) 

const mixedArray = [1, 'txt', [1, 2, 3]]
mixedArray.push([2,3,4]) 

let nums : number [];
//nums.push(1) // erreur
nums = [1, 2, 3, 4, 5]

let nums2 : number [] = []
nums2.push(1) // ok

let random : any [];

random = [true, false]

// ---- Objets -----------------------------------
const car = {
    name : 'Audi',
    model: 'A3',
    km: 70000
}

// car.name = 4 // erreur

let profile : {
    name : string,
    age : number,
    hobbies : string[]
}

profile = {
    name: 'John',
    age: 30,
    hobbies: ['sport', 'music']
}


// peu utilisé
let user : {
    name : string,
    age : number,
    favFood : string[],
    data : any
} = {
    name: 'John',
    age: 30,
    favFood: ['pizza', 'burger'],
    data: 50
}

let obj : object;
obj = {name: 'John', age: 30}