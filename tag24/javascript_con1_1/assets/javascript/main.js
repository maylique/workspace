const inputButton = document.querySelector('#inputButton')
let output = document.querySelector('#outputAge')

function ageChecker(){
    let input = document.querySelector('#inputAge').value

    if(input >= 18){
        output.innerHTML = 'over 18'
    }else
    {
        output.innerHTML = 'under 18'
    }
}