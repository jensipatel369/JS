let button = document.getElementById('mode');
let box = document.getElementById('box');
let speedText = document.getElementById('speed');
let currentMode = document.getElementById('current');

let Easy = true;

function Mode(){
    if(Easy){
        box.style.borderColor = '#c33';
        box.style.color = "#a00";
        box.style.backgroundColor = "#ffe0e";
        speedText.textContent = 'Game speed : Fast (Hard Mode)';
        currentMode.textContent = 'Current Mode : Hard';
        button.textContent = 'Switch to Easy Mode';
    }else{
        box.style.borderColor = '#3c3';
        box.style.color = "#333";
        box.style.borderColor = '#3c3';
        box.style.backgroundColor = "#e0ffe0";
        speedText.textContent = 'Game speed : Slow (Easy Mode)';
        currentMode.textContent = 'Current Mode : Easy';
        button.textContent = 'Switch to Hard Mode';
    }
    Easy = !Easy;
}