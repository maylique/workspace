// 1_1 

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(languages);
languages.sort()
console.log(languages);

// 1_2

languages.reverse()
console.log(languages);

// 2_1

const newLang = (word) => {
    let rev = word.map(rever => rever.reverse())
    console.log(rev);
}

newLang(languages)