// 1_1

let person1 = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};

console.log(person1.fullName());

// 1_2

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return this.vorname + ' ' + this.nachname + '<br> Alter: ' + this.alter + '<br> Größe: ' + this.groesse + '<br> Familienstand: ' + this.familienstand
}
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = person.profil();