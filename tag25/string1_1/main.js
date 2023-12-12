
// 1_1

let firstName = 'Peter'
let lastName = 'Zwegert'
let fullName = firstName + lastName


console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// 1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf('h'));
console.log(txt.indexOf('Earth'));
console.log(txt.indexOf('Moon'));

// 1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(';'));
console.log(txt2.search('green'));
console.log(txt2.search('blue'));

// 1_4

const A = 'Susi is going to codingschool'

let myVar = A.slice(0, 4)
let myVar2 = A.slice(4, 8)
let myVar3 = A.slice(5, 99)
let myVar4 = A.slice(23, 99)
let myVar5 = A.slice(0, 8)
let myVar6 = A.slice(-6)
let myVar7 = myVar5 + myVar6

document.write(myVar + '<br>' + myVar2 + '<br>' + myVar3 + '<br>' + myVar4 + '<br>' + myVar7 )

// 1_5

let mVar = A.substring(0, 4)
let mVar2 = A.substring(4, 8)
let mVar3 = A.substring(5, 99)
let mVar4 = A.substring(23, 99)
let mVar5 = A.substring(0, 8)
let mVar6 = A.substring(23, 99)
let mVar7 = mVar5 + mVar6

document.write( '<br>' + '<br>' + mVar + '<br>' + mVar2 + '<br>' + mVar3 + '<br>' + mVar4 + '<br>' + mVar7 )

// 1_7

const text = "Sam is good at codingschool"

let samBad = text.replace('good', 'bad')
let samBadFinal = samBad.replace('codingschool', 'school')


document.write( '<br>' + '<br>' + samBadFinal)
document.write( '<br>' + '<br>' + samBadFinal.replace('Sam', 'Susi'))
document.write( '<br>' + '<br>' + samBadFinal.replace('school', 'tennis'))

// 1_8

let samGo = samBad.replace('bad at', 'going to')
let samGoFinal = samGo.replace('codingschool', 'school')

document.write( '<br>' + '<br>' + samGoFinal.substring(0, 4).toUpperCase() + samGoFinal.substring(4, 16) + samGoFinal.substring(16, 99).toUpperCase())
document.write( '<br>' + '<br>' + samGoFinal.substring(0, 4).toLowerCase() + samGoFinal.substring(4, 16).toUpperCase() + samGoFinal.substring(16, 99).toLowerCase())
document.write( '<br>' + '<br>' + samGoFinal.charAt(0).toUpperCase())

// 1_9

const text1 = "Sam is going to codingschool"
const text2 = "Susi"
const text3 = "and"

document.write( '<br> <br>' + text1.replace('coding', '').concat(' ' + text3) + ' to the movie theater')