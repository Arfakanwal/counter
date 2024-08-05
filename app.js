var count=0;

function countOff(){
    count--
    document.getElementById('Counter').innerHTML = count
}

function resetCounter(){
    count=0
    document.getElementById('Counter').innerHTML = count
}

function countOn(){
count++
document.getElementById('Counter').innerHTML = count
}

