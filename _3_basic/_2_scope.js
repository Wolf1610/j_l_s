
if(true){
    let a = 24
    const n = 43
    var c = 56 // don't use var datatype for initialization
}

// console.log(a); // error
// console.log(n); // error


// var doesn't follow scope rule
console.log(c);
// Output: 56

function one(){
    const username = "Rishab"

    function two(){
        const wesite = "Hello world"
        console.log(username);
    }
    two()
}

// imp. -> In nesting function if inner function is not called, then outer function will not be executated

one()


console.log(addOne(4)); // here we can call the function before function initialazation method 1
// 1. Method function
function addOne(num){
    return num + 1
}

// console.log(addTwo(5)); // error -> We can't call function before initialization by using below method 2
// 2. Method function
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));


