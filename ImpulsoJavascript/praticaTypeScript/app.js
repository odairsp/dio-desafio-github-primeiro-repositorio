"use strict";
console.log("Estou vinculado ao index.HTML");
let botao = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somar(num1, num2) {
    return num1 + num2;
}
if (botao) {
    botao.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somar(Number(input1.value), Number(input2.value)));
        }
    });
}
