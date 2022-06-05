var btn1 = document.getElementById('btn-div1');
var container1 = document.querySelector('.text-container1');

var btn2 = document.getElementById('btn-div2');
var container2 = document.querySelector('.text-container2');

var btn3 = document.getElementById('btn-div3');
var container3 = document.querySelector('.text-container3');

var btn4 = document.getElementById('btn-div4');
var container4 = document.querySelector('.text-container4');

var btn5 = document.getElementById('btn-div5');
var container5 = document.querySelector('.text-container5');


btn1.addEventListener('click', function () {

    if (container1.style.display === 'none') {
        container1.style.display = 'block';
        btn1.value = 'Mostrar menos...'
    } else {
        container1.style.display = 'none';
        btn1.value = 'Continuar lendo...'
    }
})

btn2.addEventListener('click', function () {

    if (container2.style.display === 'none') {
        container2.style.display = 'block';
        btn2.value = 'Mostrar menos...'
    } else {
        container2.style.display = 'none';
        btn2.value = 'Continuar lendo...'
    }
})

btn3.addEventListener('click', function () {

    if (container3.style.display === 'none') {
        container3.style.display = 'block';
        btn3.value = 'Mostrar menos...'
    } else {
        container3.style.display = 'none';
        btn3.value = 'Continuar lendo...'
    }
})

btn4.addEventListener('click', function () {

    if (container4.style.display === 'none') {
        container4.style.display = 'block';
        btn4.value = 'Mostrar menos...'
    } else {
        container4.style.display = 'none';
        btn4.value = 'Continuar lendo...'
    }
})

btn5.addEventListener('click', function () {

    if (container5.style.display === 'none') {
        container5.style.display = 'block';
        btn5.value = 'Mostrar menos...'
    } else {
        container5.style.display = 'none';
        btn5.value = 'Continuar lendo...'
    }
})