const pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'Desenvolvedora',
}

pessoa.idade = 30;


const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Programador'

}
enum Profissao {
    'Professora',
    'Atriz',
    'Desenvolvedora',
    'JogadoraDeFutebol',
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao;
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
}

interface Estudante extends Pessoa {
    materias: string[]
}


const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 36,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'Programação', 'Portugues', 'Java']
}

function listar (lista: string[]){
    for (const item of lista) {
        console.log('- ',item);
    }
}

listar(Jessica.materias)