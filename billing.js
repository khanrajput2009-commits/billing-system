 let products = [];
let totalbill = 0;

while (true) {
    let productname = prompt("Enter your product name here (type done to stop):");

    if (productname.toUpperCase() === "DONE") {
        break;
    }

    let productprice = parseInt(prompt("Enter product price here:"));
    let productquantity = parseInt(prompt("Enter product quantity here:"));

    let producttotal = productprice * productquantity;

    products.push({
        productname: productname,
        productprice: productprice,
        productquantity: productquantity,
        producttotal: producttotal
    });

    totalbill += producttotal;
}

let discount = totalbill * 0.10;
let finalbill = totalbill - discount;

console.log("BILL");

for (let i = 0; i < products.length; i++) {
    console.log("Product name:", products[i].productname);
    console.log("Product price:", products[i].productprice);
    console.log("Product quantity:", products[i].productquantity);
    console.log("Product total:", products[i].producttotal);
    console.log("--------------------------------------------");
}

console.log("Total bill:", totalbill);
console.log("10% discount:", discount);
console.log("Final bill:", finalbill);