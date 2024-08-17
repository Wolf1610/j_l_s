// IIFE : Immediately Invoke Function Expression

(function callDB_1_(){ // This method is called name IIFE
    console.log(`DB_1_ is called`);
})();

( (username) => {
    console.log(`username is : ${username}`);
})("Kedar");