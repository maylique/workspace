// 1_1

for (i=1; i < 11; i++){
    console.log('Hello World '+ i);
}

// 1_2

let numArray = []
for (i=0; i < 11; i++){
    numArray.push(i)
}
console.log(numArray);

// 1_3

let counter = 0
while (counter < 10){
    counter++
    console.log('Hello World ' + counter);
}

// 1_4

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]
for (i=0; i < names.length; i++){
    console.log(names[i]);
}

// 1_6

let letArray = []
    for (i=1; i < 101; i++){
        letArray.push(`image/_${i}.jpg`)
}
console.log(letArray);
