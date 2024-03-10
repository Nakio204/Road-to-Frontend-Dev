// IF - ELSE
var fullName = "Anh Quan"

if (fullName) {
    console.log('Dung');
} else {
    console.log('Sai');
}

// DATA TYPE
// Primitive Data Type
// 1. Number
var a = 1;
var b = 2;
var c = 3.5;

// 2. String
var fullName = "Anh \'Quan\'";

// 3. Boolean
var isSuccess = true;

// 4. Undefined
var age;

// 5. Null
var isNull = null;

// 6. Symbol
var id = Symbol('id');

// 7. BigInt
var bigInt = 10n;

// Reference Data Type
// 1. Object
var person = {
    fullName: "Anh Quan",
    age: 19,
    address: "Ha Noi",
    myFunction: function() {
        console.log('Anh Quan dep trai qua di mat thoi :))');
    }
};
console.log(person.address);

// 2. Array
var languages = ['JS', 'PHP', 'Python'];
console.log(languages[0]);

// 3. Function
var myFunction = function() {
    console.log('Anh Quan dep trai qua di mat thoi ma :))');
}
myFunction();
