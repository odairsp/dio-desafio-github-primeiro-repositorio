// spread  

function sum(){
    if(!arguments || !arguments.length) return "Sem Argumentos";
    let soma = 0;
    for(let i in arguments){
        soma += arguments[i];
    }
    return arguments;
}

let numeros = [2,3,4,5,6]

console.log(sum(numeros));

// rest

function sum(...args){
    if(!args || !args.length) return "Sem Argumentos";
    return arguments
}