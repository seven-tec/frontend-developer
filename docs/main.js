const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const arrowAsideClose = document.querySelector('.arrow-close');
const cardsContainer = document.querySelector('.cards-container');
const darken = document.querySelector('.darken');
const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

//abrir y cerrar contenedores

const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.remove('show');
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    shoppingCartContainer.classList.remove('show');
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};

const toggleCarritoAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
    shoppingCartContainer.classList.toggle('show');
};

const openProductDetailAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.remove('show');
    productDetailContainer.classList.toggle('show');
    darken.classList.toggle('show');
};

const closeProductDetailAside = () => {
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
arrowAsideClose.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
darken.addEventListener('click', closeProductDetailAside);

//lista de productos
const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Bicicleta de pista'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: './img/monitor.jpg',
    description: 'Monitor apple'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: './img/computador.jpg',
    description: 'Computador de escritorio'
});
productList.push({
    name: 'Celular',
    price: 700,
    image: './img/telefono.jpg',
    description: 'Telefono inteligente'
});
productList.push({
    name: 'Microfono',
    price: 50,
    image: './img/microfono.jpg',
    description: 'Microfono para podcast'
});
productList.push({
    name: 'Anteojos',
    price: 70,
    image: './img/anteojos.jpg',
    description: 'Anteojos livianos'
});
productList.push({
    name: 'Libros',
    price: 10,
    image: './img/libros.jpg',
    description: 'Miles de libros'
});
productList.push({
    name: 'Audifonos',
    price: 150,
    image: './img/audifonos.jpg',
    description: 'Audifonos inalambricos'
});
productList.push({
    name: 'Linterna',
    price: 200,
    image: './img/linterna.jpg',
    description: 'Linterna clasica'
});
productList.push({
    name: 'Reloj de bolsillo',
    price: 80,
    image: './img/bolsillo.jpg',
    description: 'Reloj de bolsillo clasico'
});
productList.push({
    name: 'Reloj de arena',
    price: 120,
    image: './img/arena.jpg',
    description: 'Reloj de arena de decoracion'
});
productList.push({
    name: 'Reloj despertador',
    price: 130,
    image: './img/reloj.jpg',
    description: 'Reloj despertador'
});
productList.push({
    name: 'Camara',
    price: 250,
    image: './img/camara.jpg',
    description: 'Camara fotografica'
});
productList.push({
    name: 'Dron',
    price: 800,
    image: './img/drone.jpg',
    description: 'Dron'
});


const shoppingContainer = document.querySelector('.shopping-container');
const totalProduct = document.querySelector('.product-count');
const totalPrice = document.querySelector('.price-count');
const shoppingPriceProducts = [];

const addPriceProducts = arr => {
    let total = 0;
    arr.forEach(product => (total += product));
    return total;
};

const addShopping = product => {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const shoppingFigure = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', product.name);
    shoppingFigure.appendChild(productImg);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;

    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '../icons/icon_close.png');
    removeIcon.setAttribute('alt', 'close');
    removeIcon.classList.add('cur-p');
    removeIcon.addEventListener('click', removeShopping);

    shoppingCart.append(shoppingFigure, productName, productPrice, removeIcon);

    shoppingContainer.appendChild(shoppingCart);

    totalProduct.innerText = shoppingContainer.childElementCount;
    totalPrice.innerText =
        parseInt(totalPrice.textContent.substring(1)) + product.price;
    shoppingPriceProducts.push(product.price);

    totalPrice.innerText = `$${addPriceProducts(shoppingPriceProducts)}`;


    // Función para eliminar producto de 'Shopping Cart'
    function removeShopping() {
        shoppingCart.remove();
        totalProduct.innerText = shoppingContainer.childElementCount;

        const totalValue = document.querySelector('.price-count');
        const totalCurrentValue =
            parseInt(totalValue.textContent.substring(1)) - product.price;

        totalValue.innerText = `$${totalCurrentValue}`;
        shoppingPriceProducts.push(product.price - product.price * 2);
    }
};


const detailsProduct = product => {
    openProductDetailAside();

    const detailImage = document.querySelector('#productDetail>img');
    const detailPrice = document.querySelector('.product-info p:nth-child(1)');
    const detailName = document.querySelector('.product-info p:nth-child(2)');
    const detailDescription = document.querySelector(
        '.product-info p:nth-child(3)'
    );

    detailImage.setAttribute('src', product.image);
    detailPrice.innerText = `$${product.price}`;
    detailName.innerText = product.name;
    detailDescription.innerText = product.description;
};

const renderProducts = arr => {
    for (let product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        productImg.classList.add('cur-p');
        productImg.addEventListener('click', function () {
            detailsProduct(product);
        });

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', '../icons/bt_add_to_cart.svg');
        productImgCard.classList.add('cur-p');
        productInfoFigure.addEventListener('click', function () {
            addShopping(product);
        });

        productInfoFigure.appendChild(productImgCard);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
