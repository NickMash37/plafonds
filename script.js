const arrowDown = document.querySelectorAll('.arrow-block')
const btn = document.querySelectorAll('.fa-angle-down')
const text = document.querySelectorAll('.text')
const headText = document.querySelectorAll('.head-text')
const hidden = document.querySelector('.arrow-block__hidden')
const showMoreBtn = document.querySelector('.show-more')
const mobileNavBar = document.querySelector('.mobile-nav__navbar')
const burger = document.querySelector('.fa-bars')
const burgerClose = document.querySelector('.fa-xmark')
const mobileLinks = document.querySelectorAll('.mobile-link')
const header = document.querySelector('.header')

arrowDown.forEach((el, idx) => {
    el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('visible')
        btn[idx].classList.toggle('transform')
    })
})

showMoreBtn.addEventListener('click', () => {
    if (showMoreBtn.innerHTML === 'Показать больше') {
        hidden.classList.toggle('visible')
        showMoreBtn.innerHTML = 'Показать меньше'
    } else {
        hidden.classList.toggle('visible')
        showMoreBtn.innerHTML = 'Показать больше'
    }
})

burger.addEventListener('click', () => {
    mobileNavBar.classList.add('enabled')
    burgerClose.classList.toggle('enabled')
    header.classList.add('fixed')
    document.documentElement.classList.add('no-scroll')
})

burgerClose.addEventListener('click', () => {
    mobileNavBar.classList.remove('enabled')
    burgerClose.classList.toggle('enabled')
    header.classList.remove('fixed')
    document.documentElement.classList.remove('no-scroll')
})

mobileLinks.forEach(el => {
    el.addEventListener('click', () => {
        mobileNavBar.classList.remove('enabled')
        burgerClose.classList.toggle('enabled')
        header.classList.remove('fixed')
        document.documentElement.classList.remove('no-scroll')
    })
})