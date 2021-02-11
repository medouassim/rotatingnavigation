var open = document.getElementById('open');
var close = document.getElementById('close');
var container = document.querySelector('.container');
open.addEventListener('click', rotate);
var circle = document.getElementById('crcl');
var li = document.querySelectorAll('nav ul li');
function rotate() {
    container.classList.add('show-nav')
    open.style.transform = 'rotate(-90deg)'
    close.style.transform = 'rotate(0)'
    li.forEach(l => {
        l.style.transform = 'translate(0)'        
    });
}
close.addEventListener('click', rotateBack);
function rotateBack() {
    container.classList.remove('show-nav')
    close.style.transform = 'rotate(90deg)'
    open.style.transform = 'rotate(0)'
    li.forEach(l => {
        l.style.transform = 'translate(-100%)'        
    });
}
