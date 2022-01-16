// // sort,filter

// // let arr = [3, 5, 19, 1, 7, 23, 14, 9];
// // console.log(arr.sort(abc))
// // console.log(arr.filter(filterfunc))

// // function abc(item1, item2){
// //     console.log(item1, item2);
// //     if(item1, item2) {
// //         return -1;
// //     }if(item1, item2){
// //         return 1;
// //     }
// //         return 0
// // }
// // function filterfunc(item, i, array1) {
// //     console.log(item, i, array1)
// //     return item > 5;
// // }

// // return
// // let arr = [3, 5, 19, 1, 7, 23, 14, 9];
// // debugger;
// // let sumArray = arr.reduce(reducefunc());

// // function reducefunc(acc, val) {
// // return acc + val
// // }
// // console.log(sumArray);

// // function
// // function funcName () {

// // }

// // let arrowfunc = () => {
// //     console.log("arrow func")
// // }

// // funcName();
// // arrowfunc();

// // Date
// let currentDate = new Date();
// let currentDate1 = new Date();
// console.log(currentDate.getTime(),currentDate1.getTime())
// console.log(currentDate.toISOString())
// console.log(currentDate.toUTCString())
// console.log(currentDate.toLocaleTimeString())

// Task1

function addSquares(a, b, c, d) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b) + square(c) + square(d);
}


// Task2

var arg2 = [6, 8]
var result = arg2.reduce(function(sum, current) {
  return (sum + current) / 2
});
alert( result );

// Task3

let arr1 = [1, 6, 3, '6'];
delete arr1[3];
console.log(arr1);
let arr2 = [10, 15, 13, '10'];
delete arr2[3];
console.log(arr2);
let arr3 = arr1.concat(arr2);
console.log(arr3);
let filteredArr = arr3.filter(function(number) {
  return number > 0;
});
alert(filteredArr);
let findArr = arr3.find(function(number) {
  return number % 2 == 0;
});
alert(findArr);
let sum = arr3.reduce(function(acc, value){
  return acc + value;
});
alert(sum);

// Task4
const objMutation = (key, value, object) => {
  object[key] = value;
}
const person = {
  name: 'Sergey'
};
const result = objMutation('age', 28, person);
console.log({
  person,
  result
});

// Task5

if (confirm("продолжаем?")) {
	alert("заканчиваем");
	}
else {
	alert("продолжаем");
	}


