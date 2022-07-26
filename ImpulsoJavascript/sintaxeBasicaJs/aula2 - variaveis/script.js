// Tipos primitivos

// Boleanos

var vOuF = false;
console.log(typeof(vOuF));

// number
var numero = 1;
console.log(typeof(numero));

// string

var nome = "josef";
console.log(typeof(nome));

// undefined

var semValor;
console.log(semValor);

//  como declarar

var nome1 = "diana"; // escop local e global
console.log(nome1);

let nome2 = "Jose" // escopo local
console.log(nome2);

const pi = 3.14159 ;//escopo local constante não pode ser alterada
// pi = 2;
console.log(pi);


// Global e local

var global = "global";
console.log(global);

function local(){
    let localInt = "local"
    console.log(localInt);
}

local();

// comparação

console.log('"0" == 0 = ',"0" == 0)

// comparação identica
console.log('"0" === 0 = ',"0" === 0)

//  operadores

console.log('soma 1+1 =',1 + 1);
console.log('subtração 2-1 =',2 - 1);
console.log('multiplicação 2*3 =',2 * 3);
console.log('divisão 6/3 =',6 / 2);
console.log('módulo 5%2 =', 5 % 2);
console.log('exponenciação 2^10 =', 2**10);

// operadores relacionais

console.log('maior 5 > 2 =', 5 > 2);
console.log('menor 5 < 2 =', 5 < 2);

// opreradores logicos
console.log('and, true && false =', true && false);
console.log('or, true || false =', true || false);
console.log('not, !true =', !true);
