

const greenVioletCon = document.getElementById('greenViolet')
const greyYellowCon = document.getElementById('greyYellow')
const orangeBlackCon = document.getElementById('orangeBlack')
const cyanBlueCon = document.getElementById('cyanBlue')
const bodyStyleCon = document.querySelector('body')
const headLineCon = document.getElementById('headLine')

function greenVioletFunc(){
    bodyStyleCon.style.backgroundColor = 'violet';
    headLineCon.style.color = 'green';
}
function greyYellowFunc(){
    bodyStyleCon.style.backgroundColor = 'yellow';
    headLineCon.style.color = 'grey';
}
function orangeBlackFunc(){
    bodyStyleCon.style.backgroundColor = 'black';
    headLineCon.style.color = 'orange';
}
function cyanBlueFunc(){
    bodyStyleCon.style.backgroundColor = 'blue';
    headLineCon.style.color = 'cyan';
}


greenVioletCon.onclick = function() {greenVioletFunc()}

document.getElementById('greyYellow').onclick = function() {greyYellowFunc()}

orangeBlackCon.onclick = function () {orangeBlackFunc()}


