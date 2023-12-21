// Console Log
console.log('Hello World!');
// mit console können wir runs teste bzw strings ausgeben lassen


// Variablen

// - const - wird für werte verwendet die nicht verändert werden
// - let - werte können noch mal verändert werden
// # var - Seit ECMSCRIPT 6 wird var nicht mehr verwendet 

// ? CONST
const trainerName = 'Peter';
console.log(trainerName);

// ? LET
let score = 8;
console.log(score);

let num1 = 5;
console.log('das ist num1:', num1);

let num2 =55;
console.log('das ist num2', num2);

let num3 = 44;
console.log({num3})

const num4 = 300;
console.log({num4});


// kein let, da wir die variable schon in zeile 20 genutzt haben
num1 = 105;
console.log({num1});


//lässt sich nicht überschreiben, da num4 eine constante ist
// num4 = 400
// console.log({num4});

const addScore = (num1 + num2);
console.log({addScore});

console.log('TEST', num1 + num2);

// DatenTypen

// ? Number - String - Boolean

// ? String
// String sind Textwerte
// Um einen String auszugeben brauchen wir '' oder "" schreiben

console.log('Das ist ein String');
console.log("Das ist auch ein String");
// wird in der Konsole als weißer Text ausgegeben

// ? Number 
// Number sind numerische Werte und werden lila ausgegeben
console.log('NUMBERS');
console.log(10);
console.log(10+4); // gibt 14 aus

console.log('10' + '4'); // führt eine Zeichenketten-konkatenation durch
console.log('Vier' * 4); // kommt NaN raus - NotaNumber
console.log('4' * 4); // kommt 16 raus
console.log('4' * '4');
console.log('10' - '4');

// ? Boolean
// werden ebensfalls lila ausgegeben und sie haben nur zwei mögcliche werte: true oder false
console.log(true);
console.log(false);

// Konvertionen

// ! selbsterklärende Namen verwerden
// * nicht zu kurz
// let meine funktion = 'funktion'

// nicht zu lang
let lassUnsGemeinsamJavascriptLernenDennJavascriptIstCool = 'Nein; Nicht so!'

// dürfen nicht mit zahlen anfangen
// let 2Pac = 'Nein'
// stattdessen let twoPac = 'so ist besser'

// * camelCase

// - BestPractise

// * camelCase
let meineErsteVariable;
// Englisch ist besser
let myFirstVariable

// Underscore
let my_first_variable;

//PascalCase
let MyFirstVariable;

// Was nicht geht:
// # let nein-nein-so-nicht
// # let $bitteSoAuchNicht
// # let kannichsonichtlesen

// ! Case Sensitive

// das sind zwei unterschiedliche Werte
let a = 10;
let A = 100;
console.log({a});
console.log({A});

//  String Concatination
console.log('String Concatination');

const firstName = 'Wade';
const secondName = 'Winston';
const lastName = 'Wilson';

let state = 'New York';
// let leerzeichen = ' '

console.log('Ich bin ' + firstName + ' ' + secondName + ' ' + lastName + ' und ich lebe in' + state);
console.log(`Ich bin ${firstName} ${secondName} ${lastName} und ich lebe in ${state}`);


// ! Arithmetische Operatoren

console.log('arithmetische Operatoren');

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);

// subtrahieren
console.log(x - y);

//dividieren
console.log(x / y);

//multiplizeiren
console.log(y * z);

// Modulo % = Restwert

console.log(15 % 5);  // 0
console.log(5 % 2); // 1
console.log(15 % 4); // 3

// - Increment
// mit ++ wird ein + gerechnet

let zahl1 = 2
console.log({zahl1});
zahl1++; // wird um 1 erhöht
zahl1++; // hier nochmal
console.log({zahl1}); 

// - Decrement
// mit -- wird ein von vorherigen Wert abgezogen

let zahl2  = 5;
console.log({zahl2});
zahl2--;
zahl2--;
console.log({zahl2});

// ! Output
console.log('Output');

// - document.write()
// mit der write() methode können wir Elemente in unseren HTML ausgeben

// so wird ein text ausgegeben
document.write('Hallo Leute')

// so wird ein HTML TAG 
document.write("<h2 class='test'>Ich bin eine Headline</h2>")

// - windows.alert()
// window.alert('WARNUNG')

// ! Input

// window.prompt()
// Es öffnet sich ein Popup, iden der User etwas eingeben oder klicken kann

let sayYourName = window.prompt('Wie heißt du?')
console.log(object);


let confirm = window.confirm('Stimmen sie den Cookies zu?')
console.log(confirm);