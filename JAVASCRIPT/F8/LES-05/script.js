// Làm việc với chuỗi

var myString = 'Toi la mot FE developer dep trai';

// 1. Length
// 2. Find index
// 3. Cut string
// 4. Replace
// 5. Convert to upper case
// 6. Convert to lower case
// 7. Trim
// 8. Split
// 9. Get a character by index
// 10. Reverse string
// 11. Check if a string contains a substring
// 12. Get a substring
// 13. Concatenate
// 14. Template string

// 1. Length
// console.log(myString.length);

// 2. Find index
// console.log(myString.indexOf('FE'));
// console.log(myString.lastIndexOf('FE'));
// console.log(myString.search('FE'));

// 3. Cut string
// res = myString.slice(4, 6);
// res = myString.substring(4, 6);
// res = myString.substr(4, 6);
// console.log(myString.slice(11, 13));

// 4. Replace
// console.log(myString.replace(/FE/g, 'Front-end')); // replace all
// console.log(myString.replace('FE', 'Front-end'));

// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase());

// 7. Trim: loai bo khoang trang o dau va cuoi chuoi
// console.log(myString.trim());

// 8. Split: chuyen chuoi thanh mang
// var languages = 'Javascript, PHP, Ruby, Python';
// console.log(languages.split(', '));

// 9. Get a character by index: lay ky tu theo index
const myString2 = 'Anh Quan';
console.log(myString2[0]);