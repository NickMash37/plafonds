const arrowDown = document.querySelectorAll('.arrow-block')
const btn = document.querySelector('.fa-angle-down')
const text = document.querySelectorAll('.text')
const headText = document.querySelectorAll('.head-text')

arrowDown.forEach((el, idx) => {
    el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('visible')
    })
})