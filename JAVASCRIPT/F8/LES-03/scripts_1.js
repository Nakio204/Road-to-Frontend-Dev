// Toan tu so sanh

/**
 * === : So sánh giá trị và kiểu dữ liệu bằng nhau 
 * !== : So sánh giá trị và kiểu dữ liệu khác nhau 
 */

var a = 1;
var b = 2;

var result = 'A' || undefined || 'C';

console.log('result', result);

if (result) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}