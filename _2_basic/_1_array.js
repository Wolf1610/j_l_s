const arr = [1,2,53,15]
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

// Add ele into arr
arr.push(100)
arr.push(24)
console.log(arr);

// Remove ele from arr
arr.pop()
console.log(arr);

arr.unshift(98)
// Output: 98 1 2 53 15 100 24 , value will display in first position

// arr.shift()
console.log(arr);


console.log(arr.includes(98));
// include gives boolean vlaue , Output: true

console.log(arr);

const newArr = arr.join()
console.log(newArr);
// Output is in string form by using join()
console.log(typeof newArr);
// Output : string


// v.imp. for interview
// slice and splice

console.log("Original : ", arr);
const user1Arr = arr.slice(1,3)
console.log(user1Arr);
// Output: [1, 2] using slice
console.log("After slice Original arr: ", arr);

const user2Arr = arr.splice(1,3)
console.log(user2Arr);
// Output: [1, 2, 53] using splice
console.log("After splice Original arr: ", arr);


/*
Difference between slice and splice:
    slice print (start idx) to (ending idx - 1) ele in range
    splice print (start idx) to (ending idx) ele in range    

    slice don't manipulate original arr but "splice" manipulates original array

*/

