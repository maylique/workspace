const cards = Array.from(document.getElementsByClassName('card'))

cards.forEach(card => {
    card.style.width = '50px'
    card.style.height = '50px'
    card.style.backgroundColor = 'orange'
    card.style.margin = '1rem'

    // card.addEventListener('click', ()=>{
    //     card.style.backgroundColor = 'black'
    // })
})

const changeColor = () => {
        cards.forEach(card => {
            card.addEventListener('click', ()=>{
                card.style.backgroundColor = 'black'
            })
        })
}