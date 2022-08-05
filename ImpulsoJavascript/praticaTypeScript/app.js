"use strict";
function somarValoresNum(input1, input2) {
    return input1 + input2;
}
function somarValoresNumericos2(numero1, numero2, callback) {
    let resultado = (numero1 + numero2);
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresNumericos2(1, 3, aoQuadrado));
