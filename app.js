let countEl = document.getElementById("countEl")
let saveEl = document.getElementById("saveEl")
let value = 0

function count(){
    value += 1
    countEl.textContent = value
}

function save(){
    saveEl.textContent += value+", "
    value = 0
    countEl.textContent = 0

}

function reset(){
    value=0
    countEl.textContent = 0
}