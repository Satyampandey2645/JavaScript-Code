const myNums = [1, 2, 3];

const myTotal = myNums.reduce( function(accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);  // Here 0 is for accumulator's initial value

console.log(myTotal);  // 6

// ----------------------------------------------------------------------------------------------------------------------

const numArr = [1, 2, 3, 4, 5];

const sumArr = numArr.reduce( function(accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
    return accumulator + currentValue;
}, 3);  // Here 3 is for accumulator's initial value

console.log(sumArr);  //  18

// ----------------------------------------------------------------------------------------------------------------------

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
    
console.log(sumWithInitial);  // 10

// ----------------------------------------------------------------------------------------------------------------------

const myArr = [1, 2, 3, 4];

const total = myArr.reduce( (acc, currVal) => acc + currVal, 0 );

console.log(total);  // 10

// ----------------------------------------------------------------------------------------------------------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );

console.log(priceToPay);  // 22996