class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

const admin = new Admin("Ana", 28, "SuperAdmin");
console.log(admin.greet());
console.log(admin.getRole());