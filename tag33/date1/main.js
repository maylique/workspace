// 1_1

const date1 = new Date()
document.body.innerHTML += date1

document.body.innerHTML += '<br>'

document.body.innerHTML += new Date("September 2, 2019 09:00:00")

document.body.innerHTML += '<br>'

document.body.innerHTML += new Date(0) 

document.body.innerHTML += '<br>'

document.body.innerHTML += new Date(31556908800)  

document.body.innerHTML += '<br>'

document.body.innerHTML += new Date(86400000)

// 1_4

const tageImMonat = (monat, jahr) => {
    date = new Date(jahr, monat, null).getDate()
    return date
}

console.log(tageImMonat(1, 2016));
console.log(tageImMonat(2, 2016));
console.log(tageImMonat(2, 2017));
console.log(tageImMonat(12, 2017));

// 1_5

console.clear()

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (month) => {
    monthNum = new Date(month).getMonth()
    return list[monthNum].toString()
}


console.log(monatsName("2001-3-4")); //März
console.log(monatsName("2019-12-24")); //Dezember
console.log(monatsName("1410-07-15")); //Juli

// 1_7

const weekend = (date) => {
    dateNum = new Date(date).getDay()
    if (dateNum == 0 || 6) {
        return 'Weekend'
    } else {
        return 'Schuften'
    }
}
test = new Date('12.15.2019').getDay()
console.log(test);

console.log(weekend('12.15.2019'));