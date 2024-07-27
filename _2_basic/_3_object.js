
// Obj Literals

const mySym = Symbol("Key1")

const user = {
    name: "Rishab",
    "Role": "Software Engineer",
    [mySym]: "xr0091", // Syntax of symbol declaration
    age: 20,
    location: "Hyderabad",
    email: "rishab@google.com",
    isLoggedIn: false,
    logInDays: ["Monday", "Wednesday"]
}

// One method to access obj
console.log(user["Role"]);
console.log(user.email);

console.log(user[mySym]);
// [Symbol(Key1)]: 'xr0091' <- type

user.email = "rishab@microsoft.com"
// Object.freeze(user)
user.email = "rishab@yc.com"
console.log(user);

user.greeting = function(){
    console.log(`Hello, I am ${this.name}`);
}

console.log(user.greeting());
