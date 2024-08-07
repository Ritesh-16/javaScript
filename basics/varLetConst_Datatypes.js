/*

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed because const can't be redeclared

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

Prefer not to use var because it is a functional scope 
which means if declared inside a function its scope is in that function only but outside makes it a global

use let and const because they are block scope 
Variables declared with let and const are only accessible within the block {} 
in which they are defined, including control flow blocks like if, for, etc.
They are not accessible outside of these blocks.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
*/

//Datatypes

/*
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint => in last it has n like bigint=12345n
// string => ""
// boolean => true/false

// null => standalone value, if we console typeof null it gives that null is a object, which it is not, 
 due to a historical bug in the language's initial implementation. 

// undefined => undefined means it not defined at that time
// symbol => unique

Number: Represents both integer and floating-point numbers.
BigInt: Represents integers with arbitrary precision.
String: Represents sequences of characters.
Boolean: Represents true or false.
undefined: Represents a variable that has been declared but not assigned a value.
Symbol: Represents a unique and immutable value, often used as object property keys.
null: Represents the intentional absence of any object value.
These types are immutable, meaning their values cannot be changed once created.

non primitive data types
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
*/