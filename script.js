const arrowDown = document.querySelectorAll('.arrow-block')
const btn = document.querySelectorAll('.fa-angle-down')
const text = document.querySelectorAll('.text')
const headText = document.querySelectorAll('.head-text')
const hidden = document.querySelector('.arrow-block__hidden')
const showMoreBtn = document.querySelector('.show-more')

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