
// * EVENT & EVENTLISTENER

// Aufbau
// 1. Welches Element soll beobachtet werden
const myBtn = document.querySelector('#say-hi-btn')

// 2. EventListener hinzufügen
// myBtn.addEventListener()

// 3. Event definieren
// myBtn.addEventListener('click')

const textOutput = document.querySelector('#hello_output')

myBtn.addEventListener('click', ()=>{
    helloOutput.innerHTML = 'Hallo vom EventListener'
})

// * MouseOver

const textInput = document.querySelector('#text-input')
textInput.addEventListener('mouseover', ()=>{
    console.log('Die Maus wurde über mich bewegt');
    textInput.style.border = '3px solid red'
})


// * MouseOut

textInput.addEventListener('mouseout', ()=>{
    console.log('Die Maus hat mich verlassen');
    textInput.style.border = '3px solid blue'
})


// * Change

const selectInput = document.querySelector('#select-input')
const selectOutput = document.querySelector('#select-output')

selectInput.addEventListener('change', ()=>{
    console.log('Ich wurde geändert');
    selectOutput.innerHTML = selectInput.value
    selectOutput.style.color = 'red'
})


// * Keypress 

const username = document.querySelector('#username').addEventListener('keypress', ()=>{
    const user = document.querySelector('#user')
    user.style.backgroundColor = 'red'
    user.style.color = 'blue'
})



// * Keyup

const hacker = document.querySelector('#hacker')
const log = document.querySelector('#log')

hacker.addEventListener('keyup', logKey)


function logKey(event){
    console.log(event.code);
}


// ! Externer EventListener
// wir können die Function erstmal auslagern, damit das ganze genereller halten können


const liste = document.querySelector('#myList')
console.log(liste);

const firstChildVonMeinerListe = liste.firstElementChild.innerHTML

console.log(firstChildVonMeinerListe);

const geschwisterElementVomAnfang = liste.firstElementChild.nextElementSibling.innerHTML

console.log(geschwisterElementVomAnfang);

// * HTML Collection

const liElementeToHTMLCollection = liste.children

console.log('LiElement', liElementeToHTMLCollection);


// wir haben wir ein fast array datenTyp zu einem array
const liElementeToArrayUmwandeln = Array.from(liElementeToHTMLCollection)

console.log('li zu richtigen array', liElementeToArrayUmwandeln);

liElementeToArrayUmwandeln.forEach((singleElement)=>{
    singleElement.style.color = 'purple'
})

liElementeToArrayUmwandeln[0].innerHTML = 'salat'

const zugriffAufDasParentElement = liste.parentElement
console.log('zugriff auf parent', zugriffAufDasParentElement);

zugriffAufDasParentElement.style.border = '1px solid black'

// childElementCount oder length
console.log(liste.childElementCount);
console.log(liste.children.length);


const firstAuto = document.createElement('li')

console.log(firstAuto);
firstAuto.textContent = 'Benz'
const fliesband = document.querySelector('#fliesband')

const secondAuto = document.createElement('li')
secondAuto.textContent = 'Tesla'

const thirdAuto = document.createElement('li')
thirdAuto.textContent = 'BMW'

// so wie push() oder unshift()
fliesband.appendChild(firstAuto)
fliesband.appendChild(secondAuto)

// prepend ist wie unshift()
fliesband.prepend(thirdAuto)

let imageVomDom = document.createElement('img')

imageVomDom.setAttribute('src', 'https://unsplash.it/200')

document.body.appendChild(imageVomDom)

if(liElementeToArrayUmwandeln[0].style.color === 'red'){
    liElementeToArrayUmwandeln[0].textContent = 'Zwiebeln'
}


