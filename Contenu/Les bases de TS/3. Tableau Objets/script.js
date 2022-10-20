"use strict";
// ---- Tableau -----------------------------------
const fruits = ['fraise', 'pomme'];
fruits.push("cerises");
console.log(fruits);
const mixedArray = [1, 'txt', [1, 2, 3]];
mixedArray.push([2, 3, 4]);
let nums;
//nums.push(1) // erreur
nums = [1, 2, 3, 4, 5];
let nums2 = [];
nums2.push(1); // ok
let random;
random = [true, false];
// ---- Objets -----------------------------------
const car = {
    name: 'Audi',
    model: 'A3',
    km: 70000
};
// car.name = 4 // erreur
let profile;
profile = {
    name: 'John',
    age: 30,
    hobbies: ['sport', 'music']
};
// peu utilisé
let user = {
    name: 'John',
    age: 30,
    favFood: ['pizza', 'burger'],
    data: 50
};
let obj;
obj = { name: 'John', age: 30 };
