const uname = "Anshika";
const age = 22;
const user = {
    name: uname,
    age,
    location: 'Philadelphia'
}
console.log("user", user);

//Object destructuring
const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2,
}
console.log("product", product)
const { label: productLabel, stock, salePrice, rating = 5 } = product;
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product);