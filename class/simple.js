class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Olá, meu nome é ${this.name}`;
  }

  static description() {
    return "Classe responsável por representar um usuário";
  }
}

const user1 = new User("Carlos", 30);

console.log(user1.greet());
console.log(User.description());