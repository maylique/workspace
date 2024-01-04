const message = document.querySelector('.message')
const countHtml = document.querySelector('#count')
let count = parseFloat(document.querySelector('#count').textContent)


const wegDamit = setInterval(() => {
    count--
    countHtml.textContent = count
    if (count == 0) {
        message.style.display = 'none'
    }
}, 1000)