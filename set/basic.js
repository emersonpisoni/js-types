const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); // duplicado ignorado

console.log(numbers);
console.log(numbers.has(1));
console.log(numbers.size);