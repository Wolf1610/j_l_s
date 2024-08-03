// Function
function sayHello(){
    console.log("Hello");
}

// sayHello <- This is reference
// sayHello() <- func. call

sayHello()

function add2Num(num1, num2){
    console.log(num1 + num2);
}

add2Num(2,5)

function add(num1, num2){
    return num1+num2
}
console.log("Ans : ", add(5,3));

function loginUser(userName = "Raj"){
    if(!userName){
        console.log("Enter userName");
        return
    }
    return `${userName} just logged in`
}

console.log(loginUser("Riya"));

function calculateCartPrice(var1, var2, ...var3){
    return var3
}
console.log(calculateCartPrice(25, 3, 685, 54 , 55, 130));

const user = {
    user_name: "Mustang",
    model: "GT45"
}

function handleObj(anyObj){
    console.log(`Username is  ${anyObj.user_name} and model no is ${anyObj.model}`);
}

// 1. method
handleObj(user)
// Output: Username is  Mustang and model no is GT45

// 2. Method
handleObj({
    user_name: "Mercedece Maybach",
    model: "GLS900"
})
// Output: Username is  Mercedece Maybach and model no is GLS900

// Array:
const array = [56, 69, 20, 25, 73, 67]
function returnVal(getArray){
    return getArray[1]
}
// 1. Method
console.log(returnVal(array));
// Output: 69

// 2. Method
console.log(returnVal([58, 71, 25, 10]));
// Output: 71








 