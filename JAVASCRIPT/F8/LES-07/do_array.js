// Javascript array methods
// 1. ToString
// 2. Join
// 3. Pop
// 4. Push
// 5. Shift
// 6. Unshift
// 7. Splice
// 8. Concat
// 9. Slice

// 1. ToString: chuyen array thanh string
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// console.log(languages.toString());

// 2. Join: chuyen array thanh string, co the them ky tu noi giua cac phan tu
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// console.log(languages.join(', '));

// 3. Pop: xoa phan tu cuoi cung cua array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// console.log(languages.pop());

// 4. Push: them phan tu vao cuoi array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// languages.push('Dart', 'Python')
// console.log(languages);

// 5. Shift: xoa phan tu dau tien cua array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// console.log(languages.shift());

// 6. Unshift: them phan tu vao dau array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// console.log(languages.unshift('oke'));
// console.log(languages);


// 7. Splice: xoa, them phan tu trong array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// languages.splice(0, 0, 'oke');
// console.log(languages);

// 8. Concat: noi 2 array
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// 9. Slice: cat array
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];
console.log(languages.slice(-2, -1));