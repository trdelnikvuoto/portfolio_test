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

let aboutText = document.querySelector('#about-text')

linkBio.addEventListener('click', () => {
    shelfBio.classList.remove('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')

    aboutText.innerHTML = `Gabriele Greco, 27 years old. I studied in art high school and worked in London for three years in a casino, where I learned that luck doesn't help the bold <small>and it doesn't help me either</small>. So I have decided that <small>between one crises and another</small> I will work hard to improve my web development skills every day!`
})

linkHobby.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.remove('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')

    aboutText.innerHTML = `As a young man I have always liked cinema, reading, drawing, playing the sax, doing whatever enriched my general knowledge of things. I listened to all kinds of music according to my mood, from bossa nova to black metal, from smooth jazz to punk pop, <small>from porn groove to nintendo-core</small>. Now that I'm an adult <small>who's been through a lot, lol</small> my real hobby is CALM. TOTALIZING CALM. And chat with friends while sipping a good glass of expensive rosé.`
})

linkNotes.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.remove('d-none')
    shelfPhoto.classList.add('d-none')
    shelfEmpty.classList.add('d-none')

    aboutText.innerHTML = `When I train in front-end web development I use HTML5, CSS3, JavaScript ES6 and Bootstrap 5 and Sass to make my work easier. I know the basics of jQuery and Tailwind and I am following a course on Vue. Thanks to a coding bootcamp that I attended I learned a lot of things also on the back-end side: PHP, Laravel, MySQL. I use Github and GitLab for my individual and group projects.`
})

linkPhoto.addEventListener('click', () => {
    shelfBio.classList.add('d-none')
    shelfHobby.classList.add('d-none')
    shelfNotes.classList.add('d-none')
    shelfPhoto.classList.remove('d-none')
    shelfEmpty.classList.add('d-none')

    aboutText.innerHTML = `404 no picture of me at the moment! Let me lose some weight first :)`
})

//COPYRIGHT YEAR
document.getElementById("year").innerHTML = '&copy; copyright ' + new Date().getFullYear();