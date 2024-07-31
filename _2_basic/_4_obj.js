// Imp. interview
// Singleton obj
const YTuser = new Object()
console.log(YTuser);
// Output: {}

// Non-singleton Obj
const Guser = {}
console.log(Guser);
// Output: {}

const tinderUser = {}
tinderUser.name = "Rishab"
tinderUser.id = "567sdf"
tinderUser.isLoggedIn = false

console.log(tinderUser);
// { name: 'Rishab', id: '567sdf', isLoggedIn: false }

const User1 = {
    email: "rishab@gmail.com",
    fullname: {
        user1fullname: {
            firstname: "Rishab",
            lastname: "Sen"
        }
    }
}

console.log(User1.email);
console.log(User1.fullname);
// { user1fullname: { firstname: 'Rishab', lastname: 'Sen' } }
console.log(User1.fullname.user1fullname);
// { firstname: 'Rishab', lastname: 'Sen' }
console.log(User1.fullname.user1fullname.firstname);
//  Rishab 
  
// Optional chaning is used when API request comes

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "j"}
const obj3 = {5: "x", 6: "m"}

// 1. Method to concatinate all obj ele 
const obj4 = {obj1, obj2, obj3}
console.log(obj4);
/* Output:  {
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'c', '4': 'j' },
  obj3: { '5': 'x', '6': 'm' }
}
*/

// 2. Another Method to concatinate all obj ele by using Obj.assign
const obj5 = Object.assign({}, obj1, obj2, obj3) // assign(target, source) , target is represented as {}
console.log(obj5);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'j', '5': 'x', '6': 'm' }

// 3. Another Method to concatinate all obj ele by using spread operation (USE this method
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'j', '5': 'x', '6': 'm' }


const user = [
    {
        id: "125ert",
        name: "Agent1"
    },
    {
        id: "257dvv",
        name: "Agent2"
    },
    {
        id: "6997frg",
        name: "Agent3"
    },
    {
        id: "369def",
        name: "Agent4"
    }
]
console.log(user.id);
// imp. -> method
console.log(Object.keys(tinderUser)); // It creates an array, which contains all key of tindeUrser' obj 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
