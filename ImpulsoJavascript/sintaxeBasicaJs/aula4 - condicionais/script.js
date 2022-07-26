var jogador1 = -1;
var jogador2 = 0;
var placar;

if (jogador1 != -1 && jogador2 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!');

    } else {
        console.log('Ninguém marcou ponto!')
    }
}

//  if ternário


jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') :
    console.log('Jogadores Inválidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador1 < jogador2
} else {
    console.log('Ninguém marcou ponto!')
}

switch (placar) {
    case placar = jogador1 > jogador2:

        console.log('Jogador 1 Ganhou!');
        break;
    case placar = jogador1 < jogador2:
        console.log('Jogador 2 Ganhou!');
        break;
    default:
        console.log('Empate!');
        break;
}

// repetição

var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let objeto = { propriedade1: 'valorP1', propriedade2: 'valorP2', propriedade3: 'valorP3' }

// for

for (let i = 0; i < array.length; i++) {
    console.log('indice = ', i, '- valor = ', array[i])

}


// for in 
for (let i in array) {
    console.log('indice = ', i, '- valor = ', array[i])
}

for (i in objeto) {
    console.log('indice = ', i, '- valor = ', objeto[i])
}


//  for of não funciona com objetos
for (let i of array) {
    console.log('valor = ', i)
}

