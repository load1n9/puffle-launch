window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    autoplay: "on",
}

let player = prompt("puffle color: ")
function getData() {
    if (!localStorage.getItem('pufflelaunchlevels')) {
        localStorage.setItem('pufflelaunchlevels', "1")
    } 
    return parseInt(localStorage.getItem('pufflelaunchlevels'))
}

function levelComplete() {
    let data = parseInt(localStorage.getItem('pufflelaunchlevels'))
    data++
    localStorage.setItem('pufflelaunchlevels', data.toString())
}

function getPlayer() {
    return player
}