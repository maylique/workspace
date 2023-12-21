
function getCalc(){
    let gebJahr = document.querySelector('#age').value 
    let outputAge = document.querySelector('#output')

    outputAge.innerHTML = new Date().getFullYear() - gebJahr


    console.log(new Date().getFullYear() - gebJahr);
}

