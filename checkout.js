const cart = document.querySelector('.cart>div');
const products = JSON.parse(localStorage.getItem('cart'));

if (products.length > 0) {
  let htmls = products
    .map((product) => {
      return `<div class="cart-item">
            <img src="${product.url}" alt="product image" />
            <div>
                <h2>${product.name}</h2>
                <p>${product.price} $</p>
            </div>
        </div>`;
    })
    .join('\n');
  cart.innerHTML = htmls;
  document.querySelector('.total').innerText = `${products.reduce(
    (sum, product) => sum + Number(product.price),
    0
  )} $`;
} else {
  window.open('/main-market.html');
}
