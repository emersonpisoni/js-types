const userMap = new Map();

userMap.set("id", 1);
userMap.set("name", "Carlos");

console.log(userMap.get("name"));
console.log(userMap.has("id"));

userMap.delete("id");

console.log(userMap.size);