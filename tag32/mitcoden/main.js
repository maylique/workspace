

const user = {
    name: 'Jim', 
    alter: 60,
    beruf: 'verkäufer',
    hobbies: ['zocken', 'lesen', 'sport machen'],
    adresse: {
        stadt: 'hamburg',
        straße: 'Mustermann',
        plz: '2000'
    },
    auto: false
}

console.log(user.alter);
console.log(user.beruf);
console.log(user.adresse.stadt);

console.log(user.hobbies[1]);

console.log(user['alter']);

user.hobbies.forEach(hobby => console.log(hobby))

delete user.auto

user.auto = 'Tesla'

user.verheiratet = true

user.clubhouse = 'golf club'

const admin = {}

admin.name = 'bwalya'
admin.job = 'microsoft developer'
admin.age = 30
admin.rights = true

console.log(admin);

// #Methoden in Objekten

const calculator = {
    add: (a,b) => a+ b,
    sub: (a,b) => a-b
}

console.log(calculator.add(2,5));
console.log(calculator.sub(2,5));

const spieler = {
    name: 'ironman',
    class: 'hero',
    level: 100,
    spell: ['heilen', 'fliegen', 'laser'],
    login: () => {
        console.log(spieler.name + 'ist eigeloggt');
    },
    castSpell: function () {
        console.log('castingspiell' + this.spell[0]);
    },
    logout(){
        console.log(this.name + 'ist ausgeloggt');
    }
}

console.log(spieler);
spieler.login()
spieler.castSpell()
spieler.logout()

// Objekt Methoden => Object.keys()

const keysVomSpielerObject = Object.keys(spieler)

console.log(keysVomSpielerObject);

// Object.values()

const valuesVomSpielerObject = Object.values(spieler)
console.log(valuesVomSpielerObject);

keysVomSpielerObject.forEach(key => {
    console.log('key', key);
    const myValue = spieler[key]
    console.log(myValue);
})


// Object.entries()

const entriesObjectDieKeysUndValuesAlsArray = Object.entries(spieler)
console.log(entriesObjectDieKeysUndValuesAlsArray);

// For-In Loop

for(let akey in spieler){
    console.log(akey);
}

const grades = {
    math: 4,
    sport: 1,
    informatik: 2,
    chemie: 1
}

let summe = 0

for(let fach in grades){
    summe += grades[fach]
}

console.log(summe);

console.log(grades.length);

const gradeLength = Object.values(grades).length

console.log(gradeLength);

const durchschnitt = summe / gradeLength
console.log(durchschnitt);


// Spread Operator

const user2 = {
    name: 'hannah',
    age: 30,
}

console.log(user2);

const updatedUser = {...user2, age: 33, email: 'hannah@gmali.com'}

console.log(updatedUser);