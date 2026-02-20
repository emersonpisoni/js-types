const users = [
  { name: "Carlos", age: 30 },
  { name: "Ana", age: 25 },
  { name: "João", age: 17 }
];

const adults = users.filter(user => user.age >= 18);

const names = users.map(user => user.name);

const totalAge = users.reduce((sum, user) => sum + user.age, 0);

console.log(adults);
console.log(names);
console.log(totalAge);