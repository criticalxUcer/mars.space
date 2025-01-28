const products = [
    { 
        name: "Mars ruq",
        price: 100,
        tock: "24 dona mavjud", 
        image: "image 10.png" 
    },
    { 
        name: "Keyboard sticker", 
        price: 199, 
        stock: "10 dona mavjud", 
        image: "image 22.png" 
    },
    { 
        name: "Smart watch", 
        price: 589, 
        stock: "8 dona mavjud", 
        image: "image 23.png" 
    },
    { 
        name: "Wireless keyboard", 
        price: 299, 
        stock: "6 dona mavjud", 
        image: "image 24.png" 
    },
    { 
        name: "Mouse", 
        price: 399, 
        stock: "3 dona mavjud", 
        image: "image 25.png" 
    },
    { 
        name: "AirPods", 
        price: 449, 
        stock: "11 dona mavjud", 
        image: "image 26.png" 
    },
    { 
        name: "Powerbank", 
        price: 569, 
        stock: "9 dona mavjud", 
        image: "image 27.png" 
    },
    { 
        name: "USB flash drive", 
        price: 229, 
        stock: "21 dona mavjud", 
        image: "image 28.png" 
    },
    { 
        name: "Smartphone", 
        price: 3699, 
        stock: "3 dona mavjud", 
        image: "image 29.png" 
    },
    { 
        name: "Playstation 5", 
        price: 7499, 
        stock: "Limited Edition", 
        image: "image 30.png" 
    },
    { 
        name: "Yandex Station", 
        price: 1999, 
        stock: "Available", 
        image: "image 31.png" 
    },
    { 
        name: "Planshet Samsung", 
        price: 4999, 
        stock: "23 dona mavjud", 
        image: "image 32.png" 
    }
];

const productContainer = document.getElementById("productContainer");

function displayProducts() {
    productContainer.innerHTML = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price} Coins</div>
            <div class="product-stock">${product.stock}</div>
        </div>
    `).join('');
}

displayProducts();
