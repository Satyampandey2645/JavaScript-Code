// Passing object in a function

const user = {
    type: "Jean",
    price: 990 
}
function handleObject1(anyobject){
    console.log(`Wearable type is ${anyobject.type} and its price is ${anyobject.price}`);
}

handleObject1(user);  // Wearable type is Jean and its price is 990

// ----------------------------------------------------------------------------------------------------------------------

function handleObject2(anyobject){
    console.log(`Wearable type is ${anyobject.type} and its price is ${anyobject.price}`);
}

handleObject2({  // directly passing objects during function call
    type: "Shirt",
    price: 399 
})  // Wearable type is Shirt and its price is 399


