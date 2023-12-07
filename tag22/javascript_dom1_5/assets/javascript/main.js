

function showURL(){
    document.getElementById('ausgabe').innerHTML = window.location.href
}

document.getElementById('showMe').onclick = function (){showURL()}
