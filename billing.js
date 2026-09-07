let products = [];


// GET HTML ELEMENTS
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const printBtn = document.getElementById("printBtn");

const productTable = document.getElementById("productTable");

const totalBill = document.getElementById("totalBill");
const discount = document.getElementById("discount");
const finalBill = document.getElementById("finalBill");


// ADD PRODUCT
addBtn.addEventListener("click", function () {

    let name = productName.value.trim();
    let price = Number(productPrice.value);
    let quantity = Number(productQuantity.value);


    // VALIDATION
    if (name === "") {
        alert("Please enter product name!");
        return;
    }

    if (price <= 0 || isNaN(price)) {
        alert("Please enter a valid price!");
        return;
    }

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity!");
        return;
    }


    // PRODUCT TOTAL
    let productTotal = price * quantity;


    // ADD PRODUCT TO ARRAY
    products.push({
        name: name,
        price: price,
        quantity: quantity,
        total: productTotal
    });


    // CLEAR INPUTS
    productName.value = "";
    productPrice.value = "";
    productQuantity.value = "";


    // SHOW PRODUCTS
    displayProducts();

});


// DISPLAY PRODUCTS
function displayProducts() {

    productTable.innerHTML = "";

    let total = 0;


    for (let i = 0; i < products.length; i++) {

        total += products[i].total;


        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price.toFixed(2)}</td>
            <td>${products[i].quantity}</td>
            <td>${products[i].total.toFixed(2)}</td>
            <td>
                <button class="delete-btn" onclick="deleteProduct(${i})">
                    Delete
                </button>
            </td>
        `;


        productTable.appendChild(row);
    }


    // 10% DISCOUNT
    let discountAmount = total * 0.10;


    // FINAL BILL
    let finalAmount = total - discountAmount;


    // DISPLAY
    totalBill.textContent = total.toFixed(2);

    discount.textContent = discountAmount.toFixed(2);

    finalBill.textContent = finalAmount.toFixed(2);
}


// DELETE PRODUCT
function deleteProduct(index) {

    products.splice(index, 1);

    displayProducts();
}


// CLEAR BILL
clearBtn.addEventListener("click", function () {

    if (products.length === 0) {
        alert("Bill is already empty!");
        return;
    }


    let confirmDelete = confirm(
        "Are you sure you want to clear the complete bill?"
    );


    if (confirmDelete) {

        products = [];

        displayProducts();
    }

});


// PRINT BILL
printBtn.addEventListener("click", function () {

    if (products.length === 0) {
        alert("Please add a product first!");
        return;
    }

    window.print();

});