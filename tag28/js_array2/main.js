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

let zweiEins = ['Sergio', 'Hannah', 'Regallager', 'Reliefpfeiler' , 'Rentner']

const reverseWords = (word) => {
    let reversed = word.map((w) => w.split('').reverse().join(''))
    console.log(reversed);
}

reverseWords(zweiEins)

let satz1 = ["Ella mag alle Bohnen"]
console.log(satz1);
let satz2 = ["han nesaH has ennaH"]
console.log(satz2);


reverseWords(satz1)
reverseWords(satz2)


// 2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortMe = (num) => {
    let sort = num.sort()
    sort.sort(function(a,b){
        return a - b})
        console.log(sort);
}

sortMe(numArray2)