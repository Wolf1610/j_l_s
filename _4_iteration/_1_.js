
const myArray = "Hello World";
for(const e of myArray){
    console.log(`Char is : ${e}`);
}

const map = new Map();
map.set('AWS', "Amazon");
map.set('GCP', "Google");
map.set('Azure', "Microsoft");

for(const [key, value] of map){
    console.log(key, ":-", value);
    
}

const myObj = {
    cpp: "c++",
    py: "Python",
    js: "Javascript",
    rs: "Rust"
}

for(const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);
    
}