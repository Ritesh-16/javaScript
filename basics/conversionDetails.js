/*
There are 2 types of datatype
1. Primitive datatype:-
    1.String
    2. Number
    3. Boolean (true / false)
    4. null (iska matlab hai empty or zero nahi hai)
    5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
    7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

2. Preference datatype (Non Primitive datatype)
    1. Array ( [ ] )  type is object
    2. Object ( { } )  type is object 
    3. Function ( function( ){ } ) type is object function but comes object

    */
// const nigInt = 1285091n;
// const nullValue = null;
// console.log(typeof nigInt)
// console.log(typeof nullValue)

const eknumber = "3";
let dusraNumber = +eknumber

let teesraNumber = 3;
let chauthaNumber = +teesraNumber
console.log(typeof chauthaNumber);

/*
String to Number:
const a = "42";
const b = +"42"; // 42 (number)


Boolean to Number:

const c = true;
const d = +true; // 1 (number)


Non-numeric String to Number:

string to number
const e = "hello";
const f = +e; // NaN (Not a Number)


Null to Number:

const g = null;
const h = +null; // 0 (number)


Undefined to Number:

const i = undefined;
const j = +undefined; // NaN (Not a Number)
*/

