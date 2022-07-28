// Tratamento de Erros
// Projeto referente ao curso "Tratamento de Erros" que ministrei pela 
// Digital Innovation One.

// Atividade: validação de erros por tipo
// O objetivo é que a função receba um array e retorne ele caso o seu 
// tamanho corresponda ao número enviado como parâmetro na função. 
// Caso contrário, um erro será lançado.


// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, 
// lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(array, numero) {
    try { // define os erros e retorna uma message
        if (!array && !numero) throw new ReferenceError("Envie os parametros.");
        if (typeof (array) !== 'object') throw new TypeError("Array tem de ser do tipo 'object'.");
        if (typeof (numero) !== 'number') throw new TypeError("Numero precisa ser do tipo 'number'.");
        if (array.length !== numero) throw new RangeError("Tamanho do array diferente do numero indicado.");
        return array;
    } catch (error) { // filtra os erros
        if (error instanceof ReferenceError) {
            console.log("Erro de ReferenceError.");
            console.log(error.message);
            console.log(error.name);
            //console.log(error.stack);
        } else if (error instanceof TypeError) {
            console.log("Erro de TypeError.");
            console.log(error.message);
            console.log(error.name);
            //console.log(error.stack);
        } else if (error instanceof RangeError) {
            console.log("Erro de RangeError.");
            console.log(error.message);
            console.log(error.name);
            //console.log(error.stack);
        } else {
            console.log("Erro desconhecido");
            console.log(error.message);
            console.log(error.name);
            //console.log(error.stack);
        }
    }
}

console.log(validaArray([1, 2, 3], "w"));