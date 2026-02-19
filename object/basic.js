const product = {
  name: "Notebook",
  price: 4500,
  inStock: true,
  calculateDiscount(discount) {
    return this.price * (1 - discount);
  }
};

console.log(product.name);
console.log(product.calculateDiscount(0.1));