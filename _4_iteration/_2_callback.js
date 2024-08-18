const code = ["cpp", "java", "Rust", "Golang", "Python"];

code.forEach(function(value){
    // console.log(value);
})
// Output: 
// cpp
// java
// Rust
// Golang
// Python

code.forEach((item) => {
    // console.log(item);
})
// Output: 
// cpp
// java
// Rust
// Golang
// Python

function print(item){
    // console.log(item);
}
code.forEach(print);

code.forEach(function(item, idx, arr){
    // console.log(item, idx, arr);
})
// Output: 
// cpp 0 [ 'cpp', 'java', 'Rust', 'Golang', 'Python' ]
// java 1 [ 'cpp', 'java', 'Rust', 'Golang', 'Python' ]
// Rust 2 [ 'cpp', 'java', 'Rust', 'Golang', 'Python' ]
// Golang 3 [ 'cpp', 'java', 'Rust', 'Golang', 'Python' ]
// Python 4 [ 'cpp', 'java', 'Rust', 'Golang', 'Python' ]


const arrayDB = [
    {
        userName: "Akash",
        ID: 34
    },
    {
        userName: "Manoj",
        ID: 87
    },
    {
        userName: "Farah",
        ID: 45
    }
]

arrayDB.forEach((item) => {
    console.log(item.userName);
})
// Output:
// Akash
// Manoj
// Farah