//PROJECTS
let chestShow = document.querySelector('.chest-show')
let chestShow2 = document.querySelector('.chest-show2')
let chestUpper = document.querySelector('.chest-upper')
let chestUpper2 = document.querySelector('.chest-upper2')

chestUpper.addEventListener('mouseenter', () => {
    chestShow.classList.remove('d-none')
})

chestUpper2.addEventListener('mouseenter', () => {
    chestShow2.classList.remove('d-none')
})


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

//ABOUT ME
let shelfBio = document.querySelector('#bio-pic')
let shelfHobby = document.querySelector('#hobby-pic')
let shelfNotes = document.querySelector('#notes-pic')
let shelfPhoto = document.querySelector('#photo-pic')
let shelfEmpty = document.querySelector('#empty-shelf')

let linkBio = document.querySelector('#bio')
let linkHobby = document.querySelector('#hobby')
let linkNotes = document.querySelector('#notes')
let linkPhoto = document.querySelector('#photo')

linkBio.addEventListener('click', () => {
    shelfBio.classList.remove('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')
})

linkHobby.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.remove('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')
})

linkNotes.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.remove('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')
})

linkPhoto.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.remove('d-none')
    shelfEmpty.classList.add('d-none')
})

//COPYRIGHT YEAR
document.getElementById("year").innerHTML = '&copy; copyright ' + new Date().getFullYear();