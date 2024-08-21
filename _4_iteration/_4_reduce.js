const myNum = [1,2,3];

const ans = myNum.reduce( (acc, currVal) => acc + currVal, 0);
console.log(ans);


const shopping = [
    {
        itemName: "Monitor",
        price: 32000
    },
    {
        itemName: "Webcam",
        price: 9000
    },
    {
        itemName: "Mouse",
        price: 5000
    },
    {
        itemName: "Keyboard",
        price: 20000
    },
    {
        itemName: "Mic",
        price: 32000
    }
]

const priceToPay = shopping.reduce( (acc, item) => acc + item.price , 0);
console.log(priceToPay);

