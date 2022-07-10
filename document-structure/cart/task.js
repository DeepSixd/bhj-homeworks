let cart = document.querySelector('.cart__products');

let addToCart = function (dataId, prodImage, prodCount) {
    const cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
    const cartIndex  = cartProduct.findIndex(el => dataId == el.getAttribute('data-id'));

    if (cartIndex == -1) {
        cart.innerHTML += `
        <div class="cart__product" data-id = ${dataId}>
        <img class="cart__product-image" src = "${prodImage}">
        <div class="cart__product-count">${prodCount}</div>
        </div>
      `;
    } else {
        cartProduct[cartIndex].querySelector('.cart__product-count').innerText = Number(cartProduct[cartIndex].querySelector('.cart__product-count').innerText) + prodCount;
    };
};

const product = document.querySelectorAll('.product');
product.forEach((elem) => {
    
    const prodAdd = elem.querySelector('.product__quantity-control_inc');
    const prodDec = elem.querySelector('.product__quantity-control_dec');
    const prodQnt = elem.querySelector('.product__quantity-value');
    const addBtn = elem.querySelector('.product__add');
    let quantity = Number(prodQnt.innerText);
    const prodId = elem.getAttribute('data-id');
    const prodImg = elem.querySelector('.product__image').getAttribute('src');

    prodAdd.onclick = function () {
        quantity += 1;
        prodQnt.innerText = quantity;
    };
    
    prodDec.onclick = function () {
        if (quantity == 1) {
            console.log('Ошибка: число покупок не может быть меньше 1')
        } else {
            quantity -= 1;
        };
        prodQnt.innerText = quantity;
    };

    addBtn.onclick = function() {
        addToCart(prodId, prodImg, quantity);
    };
});
