const arr = ["Vanessa", "Ana V.", "Katerin", "Camilo", "Johan", "Laura", "Mike", "Laura", "Mike", "Laura", "Mike"];
const arr2 = arr.filter((value, index, array) => {
    console.log(value, index, array.indexOf(value));
    return array.indexOf(value) === index;
});
console.log(arr2);
//
const myArr = [1, 4, 5, 6];
const myArr1 = myArr.map(function(ele) {
    return ele * 2;
});
console.log(myArr1);

const myArr2 = myArr.map((ele) => ele * 2);
console.log(myArr2);
//
const val = "thIs will be capiTalized for each word";

function wordsCaps(str) {
    str = str.toLowerCase();
    const tempArr = [];
    let words = str.split(" ");
    words.forEach(word => {
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        tempArr.push(temp);
    });
    return tempArr.join(" ");
}
console.log(wordsCaps(val));
/* Ejercio 3
let val = "I love JavaScript";
val = val.toLowerCase();
let vowels = ["a","e","i","o","u"];
vowels.forEach((letter,index) =>{
    console.log(letter);
    val = val.replaceAll(letter,index);
});
console.log(val);*/
///
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 11)); // 0-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10;
console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 100; x++) {
    console.log(ranNum(1, 100));
}
//
let future = new Date(2025, 5, 15);
console.log(future);
const months = ["Enero", "Febrero", "Marzo", "Abril", "May", "Junio", "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month-1]} ${day} ${year}`;
console.log(myDate);