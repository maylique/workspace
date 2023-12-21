

document.getElementById('info').innerHTML = 
    '<h1>Hello World</h1><h2>How are you?</h2>'

document.write('<div id=container>')

document.getElementById('container').innerHTML = '<p>start of the element'

document.write('end of the element <br>')


document.getElementById('container').innerHTML += Date()

function inputWrap(){
    let Ausgabe = document.getElementById('input').value
    document.getElementById("test").innerHTML = "<h1>Hello h1<h1>"
    document.getElementById('test').innerHTML += Ausgabe + '<br>'
    document.getElementById('test').innerHTML += Date()
}

document.getElementById('button').onclick = function() {inputWrap()}