let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
// Output : object

let myCreatedDate = new Date(2023, 6, 23, 12, 12);
console.log(myCreatedDate.toLocaleString());

let userDate = new Date("07-27-2024");
console.log(userDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp); // in second

console.log(myCreatedDate.getTime()); 
// Output : in second time

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate.toLocaleString());