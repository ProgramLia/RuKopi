let rupiah = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: 'IDR',
    maximumFractionDigits: 0,
})

let foods = [
    {
        id: 1,
        name: 'Nasi Goreng Ayam',
        price: 27000,
        photo: '01.jpg',
    },
    {
        id: 2,
        name: 'Nasi Goreng Kampung',
        price: 29000,
        photo: '02.jpg'
    },
    {
        id: 3,
        name: 'Sate Ayam',
        price: 30000,
        photo: '03.jpg'
    },
    {
        id: 4,
        name: 'Rawon',
        price: 30000,
        photo: '04.jpg'
    },
    {
        id: 5,
        name: 'Nasi Uduk',
        price: 27000,
        photo: '05.jpg'
    },
    {
        id: 6,
        name: 'Nasi Goreng merah',
        price: 27000,
        photo: '06.jpg'
    },
    {
        id: 7,
        name: 'Tempe Mendoan',
        price: 10000,
        photo: '07.jpg'
    },
    {
        id: 8,
        name: 'Perkedel',
        price: 12000,
        photo: '08.jpg'
    },
    {
        id: 9,
        name: 'Pempek',
        price: 30000,
        photo: '09.jpg'
    },
    {
        id: 10,
        name: 'Indomie',
        price: 18000,
        photo: '10.jpg'
    },
    {
        id: 11,
        name: 'Mie Sedap',
        price: 18000,
        photo: '11.jpg'
    },
    {
        id: 12,
        name: 'Kentang Goreng',
        price: 15000,
        photo: '12.jpg'
    },
]

let drink = [
    {
        id: 1,
        name: 'Aren Coffe',
        price: 25000,
        photo: '01.jpg'
    },
    {
        id: 2,
        name: 'Americano',
        price: 18000,
        photo: '02.jpg'
    },
    {
        id: 3,
        name: 'Espresso',
        price: 18000,
        photo: '03.jpg'
    },
    {
        id: 4,
        name: 'Mochacinno',
        price: 25000,
        photo: '04.jpg'
    },
    {
        id: 5,
        name: 'Hazelnut Coffe',
        price: 25000,
        photo: '05.jpg'
    },
    {
        id: 6,
        name: 'Caffe Latte',
        price: 25000,
        photo: '06.jpg'
    },
    {
        id: 7,
        name: 'Caramel Latte',
        price: 25000,
        photo: '07.jpg'
    },
    {
        id: 8,
        name: 'Chocolate',
        price: 22000,
        photo: '08.jpg'
    },
    {
        id: 9,
        name: 'Red Velvet',
        price: 22000,
        photo: '09.jpg'
    },
    {
        id: 10,
        name: 'Taro',
        price: 22000,
        photo: '10.jpg'
    },
    {
        id: 11,
        name: 'Thai Tea',
        price: 22000,
        photo: '11.jpg'
    },
    {
        id: 12,
        name: 'Green Tea',
        price: 22000,
        photo: '12.jpg'
    },
]
let coffe = [
    {
        id: 1,
        name: 'Arabika',
        price: '100000',
        photo: '1.jpg',
    },
    {
        id: 2,
        name: 'Robusta',
        price: '120000',
        photo: '2.jpg',
    },
    {
        id: 3,
        name: 'Excelsa',
        price: '220000',
        photo: '3.jpg',
    },
    {
        id: 4,
        name: 'Gayo',
        price: '220000',
        photo: '4.jpg',
    },
    {
        id: 5,
        name: 'Green Tea',
        price: '84000',
        photo: '5.jpg',
    },
    {
        id: 6,
        name: 'Thai Tea',
        price: '84000',
        photo: '6.jpg',
    },
    {
        id: 7,
        name: 'Taro Powder',
        price: '54000',
        photo: '7.jpg',
    },
    {
        id: 8,
        name: 'Redvelvet Powder',
        price: '54000',
        photo: '8.jpg',
    },
];

let menuFood = document.querySelector('.food ul');
let menuDrink = document.querySelector('.drink ul');
let photo1 = document.querySelector('.photo-1')
let photo2 = document.querySelector('.photo-2')

foods.forEach(item => {
    let newItem = document.createElement('li');
    newItem.dataset.aos = `zoom-in`
    newItem.dataset.aos.duration = `600`
    newItem.textContent = `${item.name}...${rupiah.format(item.price)})`;
    menuFood.appendChild(newItem);
})

drink.forEach(item => {
    let newItem = document.createElement('li')
    newItem.textContent = `${item.name}...${rupiah.format(item.price)}`;
    newItem.dataset.aos = `zoom-in`
    newItem.dataset.aos.duration = `600`
    menuDrink.appendChild(newItem);
})

let place = document.querySelector('.place-product');

coffe.forEach(item => {
    let card = `
    <div data-aos="zoom-in" data-aos-duration="600" class="card">
        <div class="img">
            <img src="../../assets/produk/${item.photo}">
        </div>
        <div class="text">
            <h1>${item.name}</h1>
            <p>${rupiah.format(item.price)}</p>
        </div>
        <div class="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, cum!</p>
        </div>
        <div class="buttons">
            <button class="detail"><i class="bi bi-eye"></i><span>Detail</span></button>
            <button data-id="${item.id}" class="beli"><i class="bi bi-bag"></i><span>Beli</span></button>
        </div> 
    </div>`
    place.innerHTML += card;
})

let beli = document.querySelectorAll('.buttons .beli');
let modal = document.querySelector('.modal-box');
let modalContainer = document.querySelector('.modal-box .container');

let form = document.querySelector('.modal-box .container form');
let productw = document.querySelector('.modal-box .container form input[name="name"]');
let price = document.querySelector('.modal-box .container form input[name="price"]');

beli.forEach(item => {
    item.addEventListener('click', function () {
        let data = coffe[item.dataset.id - 1];
        modal.classList.add('active-modal')
        productw.value = data.name;
        price.value = data.price;
    })
})

form.addEventListener('submit', function (e) {
    let dataForm = new FormData(e.target)
    let name = dataForm.get('name');
    let price = dataForm.get('price');
    let user = dataForm.get('nama');
    let jum = dataForm.get('jumlah');
    let nomor = dataForm.get('nomor');
    let pesan = dataForm.get('pesan');

    let waMessage = `Hallo kak,
    Nama saya : ${user} , Nomor : ${nomor} , Saya ingin membeli , Produk : ${name} , Harga satuan : ${rupiah.format(price)} , Jumlah : ${jum} , Total yang akan dibayarkan : ${rupiah.format(price * jum)} , Note : ${pesan}`

    const phoneNumber = '6281330382738';

    const waUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    window.open(waUrl, '_blank')
    window.refresh()
})

modal.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.classList.remove('active-modal')
        e.stopPropagation();
    }
})

