// MENU CONTACT
let menuText = document.querySelector('.menu-text')
let menuBox1 = document.querySelector('.menu-box1')
let menuBox2 = document.querySelector('.menu-box2')
let menuBox3 = document.querySelector('.menu-box3')
let menuBox4 = document.querySelector('.menu-box4')

menuBox1.addEventListener('mouseenter', () => {
    menuText.innerText = 'Send me an email!'
})
menuBox1.addEventListener('mouseleave', () => {
    menuText.innerText = 'Contact me'
})

menuBox2.addEventListener('mouseenter', () => {
    menuText.innerText = 'Check my CV!'
})
menuBox2.addEventListener('mouseleave', () => {
    menuText.innerText = 'Contact me'
})

menuBox3.addEventListener('mouseenter', () => {
    menuText.innerText = 'Visit my LinkedIn!'
})
menuBox3.addEventListener('mouseleave', () => {
    menuText.innerText = 'Contact me'
})

menuBox4.addEventListener('mouseenter', () => {
    menuText.innerText = 'Visit my Github!'
})
menuBox4.addEventListener('mouseleave', () => {
    menuText.innerText = 'Contact me'
})

//COPYRIGHT YEAR
document.getElementById("year").innerHTML = '&copy; copyright ' + new Date().getFullYear();