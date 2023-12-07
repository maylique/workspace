

//-     Comparison - Vergleich

//-    == vergleicht die werte
//-    === verglieicht werte und datentype

console.log(3 == '3');
console.log(3 === '3');

console.log(1 == 1);
console.log(1 == 2);
console.log(6 == '7');

//-     != nicht gleicher wert
//-     !== nicht gleicher wert und datentype

console.log(3 != 3);
console.log(3 !== 3);
console.log('3' !== 3);

//-    > größer als
//-    < kleiner als
//-    >= größer gleich
//-    <= kleiner gleich

console.log(3 > 2);
console.log(4 < 6);

console.log('A' > 'B');
console.log('B' > 'a');

// #     Elemente selektieren

//- getElementById

const mainHeadline = document.getElementById('main-headline')
console.log(mainHeadline);
console.log(mainHeadline.innerHTML);

//-    querySelector()

//    mit ID
const secondaryHeadline = document.querySelector('#secondary-headline')
console.log(secondaryHeadline);

//    mit Class
const secondaryHeadline2 = document.querySelector('.myHeadline')
console.log(secondaryHeadline2);


// direkt mit Element
const secondaryHeadline3 = document.querySelector('h2')
console.log(secondaryHeadline3);
console.log(secondaryHeadline3.innerHTML);

// -    innerHTML

mainHeadline.innerHTML = 'Ich bin der neue. haha'

secondaryHeadline3.innerHTML = 'moin'
secondaryHeadline3.innerHTML += ' Leute'

mainHeadline.style.color = 'red'
mainHeadline.style.border = '1px solid green'
mainHeadline.style.backgroundColor = 'yellow'

// *    Unterschied zwischen document.write() und .innerHTML
let divContainer = document.querySelector('#div-container')

divContainer.innerHTML = '<p>Ich bin ein p tag</p>'
divContainer.innerHTML += '<p>Ich bin nochmal ein p tag</p>'

document.write('<p> ich bin ein p tag von document.write() </p>')

// #    Funktion

function sayHello(){
    console.log('HELLO LEUTE');
}


sayHello()

function log1(firstName, lastName){
    console.log('Hello du bist ein eingeloggt' + firstName + lastName);
}
function log2(firstName, lastName){
    console.log(`du bist eineloggt ${firstName} ${lastName}`);
}

log1('Magda', 'Cale')
log2('Peter', 'Zwegert')

function addMe(num1, num2){
    console.log(num1 * num2);
}

addMe(3, 5)


let num5 = 5
let num6 = 10

function plusMe(number1, number2){
    divContainer.innerHTML += '<p>' + number1 + number2 + '</p>'
}

plusMe(num5, num6)
