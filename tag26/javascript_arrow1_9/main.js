
const show = (vorname, nachname, geburtsort, alter, wohnort) => {
    let ergebnis = `Mein name ist ${nachname} ${vorname} ${nachname} Ich bin auf ${geburtsort} geboren. Ich bewache die Welt vor finsteren Mächten. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}`
    console.log(ergebnis);
    return ergebnis
}

show('James', 'Bond', 'Hamburg', '99', 'Buxtehude')