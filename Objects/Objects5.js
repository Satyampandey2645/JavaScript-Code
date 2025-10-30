const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);  // { a: 1, b: 4, c: 5 }
console.log(returnedTarget);  // { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);  //true

/* if we don't use empty object {}, then the first argument will be taken as target and every 
   combined properties will be reflected in first argumented object */
   
// ---------------------------------------------------------------------------------------------------------------------
   
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
   
const obj3 = {obj1, obj2};  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3);
   
const obj4 =  Object.assign({}, obj1, obj2)  
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
   
// Object.assign(target, source1, source2, ...)
// {} → a new empty object (this becomes the target)
// obj1 and obj2 → source objects (their properties are copied into {})
// So the empty {} means: “Start with a new blank object, and copy everything into it
   
const obj5 = {...obj1, ...obj2};  // mostly used method
console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

