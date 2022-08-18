const products = [
    {
        name: ' Bonsai 1',
        price: 10,
        url: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'
    },
    {
        name: 'Bonsai 2',
        price: 20,
        url: 'https://i.pinimg.com/originals/12/9e/ba/129eba52d364e926b24ca4dcc0500a3c.jpg'
    },
    {
        name: 'Bonsai 3',
        price: 30,
        url: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'
    },
    {
        name: 'Bonsai 4',
        price: 40,
        url: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'
    },
    {
        name: 'Bonsai 5',
        price: 50,
        url: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg'
    },
    
];

const renderData = (data) => {
    const htmls = data.map((product) => {
        return `<div class="carousel-cell"><img src= "./img/grey.jpg" alt="">
                    <div class="absolute-div">
                        <div class="carousel-caption">
                            <p>${product.name} - ${product.price}$</p>
                            <button class="cd-add-to-cart js-cd-add-to-cart" data-name="${product.name}" data-price="${product.price}" data-url ="${product.url}">Buy now!</button>
                        </div>
                    </div>
                </div>`
    }).join('');
    return htmls;
};

document.querySelector('.products-carousel').innerHTML = renderData(products);


