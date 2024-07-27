const arr1 = ["mac", "windows", "linux"]
const arr2 = ["java", "Python", "C++"]

// arr1.push(arr2);

console.log(arr1);
// Output: [ 'mac', 'windows', 'linux', [ 'java', 'Python', 'C++' ] ]

// console.log(arr1[3][2]);
// Output: C++

// Concate create a new arr to store all ele
const newArr = arr1.concat(arr2)
console.log(newArr);

// It doesn't require a new arr, it stores all values in existing arr: below method
const all_new_arr = [...arr1, ...arr2]
console.log(all_new_arr);

const arr3 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const newArr3 = arr3.flat(Infinity)
console.log(newArr3);

console.log(Array.isArray("Hello"));
// Output : false
console.log(Array.from("Hello"));
// Output: [ 'H', 'e', 'l', 'l', 'o' ]

// imp. interview Array.from
console.log(Array.from({name: "Wolf"}));
// Output: []

let score1 = 10;
let score2 = 24;
let score3 = 62, score4 = 75;           

// Concatination of all variable into array
console.log(Array.of(score1, score2, score3, score4));
// Output: [ 10, 24, 62, 75 ]