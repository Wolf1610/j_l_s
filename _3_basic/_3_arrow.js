
const user = {
    username: "Rishab",
    entryFee: 2999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // we can use this in current context
                
    }
}

user.welcomeMessage()
user.username = "Ramya"
user.welcomeMessage()
console.log(this); // output: {} empty obj

function webDev(){
    let username = "Rishab" // If we print this.username, we will get undefined ouput, console.log(this.username);
    // console.log(this);
}
webDev()

const a = function(){
    let from = "USA";
    console.log(this.from); // output: undefined
}
a();

const b = () => {
    let userName = "lupe"
    console.log(this.userName); // output: undefined
    console.log(this); // output: {} empty obj
}
b();

const add2 = (num1, num2) => {
    return num1 + num2; // if we are using {}, it must have a return
}
console.log(add2(4,6)); 

const sum = (num1, num2) => ( num1 + num2) // when we use (), it doesn't require any retrun
console.log(sum(2,4));

const myObj = () => ({username: "Rihana"})
console.log(myObj());
