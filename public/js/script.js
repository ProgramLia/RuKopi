let nav = document.querySelector('nav');
let head = document.querySelector('header')
let img = document.querySelector('.slot-2 img')
let link = document.querySelectorAll('nav a')
let brand = document.querySelector('.brand');
let plus = document.querySelector('.plus');

function show() {
   if (window.innerWidth <= 768) {
      nav.style.display = 'flex'
      head.style.bottom = '0'
      brand.style.display = 'none'
      plus.style.display = 'none'
   } else {
      nav.style.display = 'none'
   }
}

function hide() {
   if (window.innerWidth <= 768) {
      nav.style.display = 'none'
      head.style.bottom = ''
      brand.style.display = ''
      plus.style.display = ''
   } else {
      nav.style.display = 'flex'
   }
}

window.addEventListener('resize', function () {
   if (window.innerWidth > 768) {
      nav.style.display = 'flex'
   } else {
      nav.style.display = 'none'
   }
})

window.addEventListener('scroll', function () {
   let target = img.getBoundingClientRect();
   let scroll = window.scrollY;
   if (scroll > target.top) {
      head.classList.add('active'); // Menambahkan class active
   } else {
      head.classList.remove('active')
   }
})

link.forEach(item => {
   item.addEventListener('click', function (e) {
      link.forEach(item => item.style.color = 'var(--wh)');
      e.target.style.color = 'var(--cof)';
      e.stopPropagation();
   })
})