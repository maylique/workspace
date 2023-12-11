let output = document.querySelector('#output')

function ageChecker(event){
    event.preventDefault()
    let input = document.querySelector('#input').value

    if(input >= 18){
        output.innerHTML = 'Du darfst Shisha rauchen'
    }else
    {
        output.innerHTML = 'Darf er dass?'
    }
}