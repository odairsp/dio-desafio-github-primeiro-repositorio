function somarValoresNum(input1: number, input2: number): number {
        return input1 + input2;
}

function somarValoresNumericos2(numero1: number, numero2: number, 
    callback: (numero: number) => number): number{
    let resultado = (numero1 + numero2);
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

console.log(somarValoresNumericos2(1,3,aoQuadrado));