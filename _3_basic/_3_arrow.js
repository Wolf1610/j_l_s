
const user = {
    username: "Rishab",
    entryFee: 2999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
                
    }
}

user.welcomeMessage()
user.username = "Ramya"
user.welcomeMessage()
console.log(this);


function webDev(){
    let username = "Rishab" // If we print this.username, we will get undefined ouput, console.log(this.username);
    console.log(this);
    
}

webDev()
