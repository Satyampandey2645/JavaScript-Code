console.log("2">1);  // true
console.log("02">1);  // true

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// An equality check == and comparisons >, <, >=, <= work differently.
// The loose equality operator == has its own special coercion rules, and null is only loosely equal to undefined. So, == has special rules: null is only equal to undefined.
// Comparisons convert null to a number, treating it as 0 that's why null >= 0 is true and null > 0 is false.



console.log(undefined > 0);  // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false

// undefined → converted to NaN, and any comparison with NaN is false