'use strict'
let playerName = document.getElementById('playerName')
let start = document.getElementById('start')
let click = document.getElementById('click')
let name = document.querySelector('#name span')
let count = 0;
let clickNum = document.querySelector('#clickNum span')
let game = document.querySelector('.game')
let modal = document.querySelector('.modal')
let endGame = document.querySelector('.endGame')
let clear = document.querySelector('#clear')
let arr = [];

let getTimer = document.getElementById('timer')
let sec = document.getElementById('sec')
let msec = document.getElementById('msec')

playerName.addEventListener('input', Check)
start.addEventListener('click', Start)
click.addEventListener('click', Click)

function Check(){
    start.disabled = playerName.value === '';
}
function Start(){
    name.textContent = playerName.value;
    playerName.value = '';
    let date = new Date(0,0,0,0,0,0,0)
    getTimer = setInterval(function () {
        date.setMilliseconds(date.getMilliseconds()+10)
        sec.textContent = zero(date.getSeconds())
        msec.textContent = zeroms(date.getMilliseconds())
    },10)
    click.disabled = false;
}
function Click(){
    count++;
    clickNum.textContent = count;
    if (count ===10){
        let endTime=new Date(0,0,0,0,0,0,0)
        let diff = date-endTime;
        arr.push(new Object({'name':name.textContent, 'diff':diff, 'time':`${sec.textContent}:${msec.textContent}`}))
        JSON.stringify(arr)
        console.log(arr)
        click.disabled = true
        start.disabled = true
        clearInterval(getTimer)
        game.style.display = 'none'
        modal.style.display = 'flex'
        modal.textContent = `Имя: ${name.textContent} Время игры: ${sec.textContent}:${msec.textContent}`
    }
}
function zero(n){
    return (n<10) ? ('0'+n):n
}
function zeroms(n){
    return (n<100) ? ('0'+n):n
}