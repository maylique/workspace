
// catWalk()
// pause()
// turn()
// catSpeed()

// setInterval(), clearInterval(), window.innerWidth und Boolean true/false

document.querySelector('#cat')

let leftPos = 0
let catInterval;
let catAni;
let faktor = 10

const catWalk = () => {
    cat.style.transform = 'initial'
    catAni = () => {
        leftPos += faktor
        cat.style.transform = 'scaleY(1)'
        cat.style.left = `${leftPos}px`
        console.log(leftPos);
        if (leftPos > window.innerWidth) {
        pause()
        }
    }
    catInterval = setInterval(catAni, 100)
}

const pause = () => {
    clearInterval(catInterval)
}


const turn = () => {
    cat.style.transform = 'scaleX(-1)'
    catAni = () => {
        leftPos -= faktor
        console.log(leftPos);
        cat.style.left = `${leftPos}px`
        if (leftPos == 0)
            {pause()
            }
    }
    catInterval = setInterval(catAni, 100)
}

const catSpeed = () => {
    if (cat.style.transform === 'scaleX(-1)') {
        faktor = 20
    } else {
        faktor = 20
    }
}