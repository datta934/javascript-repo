// 1. Bind, Call, Apply

// Bind: Creates a new function that, when called, has its this keyword set to the provided value

// Call: Calls a function with a given this value and arguments provided individually.

// Apply: call() and apply() serve purpose 
// The only difference between how they work is that call() expects all parameters to be passed in individually, 
// whereas apply() expects an array of all of our parameters


var user = {
    firstname: 'Jane',
    lastname: 'Doe ',
    getUserName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

//Bind
var userDetails = function (loves, likes) {
    console.log(this.getUserName() + 'is my name!');
    console.log(this.getUserName() + 'loves ' + loves + ' and likes to ' + likes);
};
var logUserDetails = userDetails.bind(user); // creates new object and binds user. 'this' of user === user now
logUserDetails('books', 'dance'); // Jane Doe  loves books and dance


// Call
userDetails.call(user, 'books', 'dance'); // Jane Doe  loves books and dance

//Apply
userDetails.apply(user, ['books', 'dance']); // Jane Doe  loves books and dance

// -------------------------------------------------------------------------------------------------------

//2. Closures - Combination of function bundled together.

function getName() {
    let name = "Hermoine";
    function getDisplayName() {
        alert(name);
    }
    return getDisplayName();
}

getName();


function add(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = add(5);
var add10 = add(10);

console.log(add5(2)); // 7
console.log(add10(10)); //20


// -------------------------------------------------------------------------------------------------------
//  foreach, for - in, for - of
// The forEach() method calls a function for each element in an array
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(fruit) {
    console.log(fruit);
}

// for in statement loops through the properties of an Object
const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

//The JavaScript for of statement loops through the values of an iterable object
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
let language = "JavaScript";

let text = "";
for (let x of language) {
    text += x;
}

const cars = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of cars) {
    text += x;
}