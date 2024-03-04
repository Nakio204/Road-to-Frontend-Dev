// Khai bao bien
var fullName = 'Tran Anh Quan';
var age = 18;



/*
    Built-in function
    1. alert
    2. console
    3. confirm
    4. prompt
    5. set timeout
    6. set interval
*/

alert(fullName);

console.log('Day la dong log');

confirm('Xac nhan ban du tuoi');

prompt('Xac nhan ban du tuoi (prompt)');

setTimeout(function() {
    alert('Toi ten quan');
}, 1000)

setInterval(function() {
    console.log('Day la interval')
}, 1000)