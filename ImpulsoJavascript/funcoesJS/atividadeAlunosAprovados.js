const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguel',
        nota: 4,
        turma: '2C'
    }
];


function alunosAprovados(alunos, mediaFinal) {
    let aprovados = [];

    for (let i in alunos) {
        const { nome, nota } = alunos[i];

        if (nota >= mediaFinal) {
            aprovados.push(nome)
        }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 6));

console.log("\nAtividade 2 \n\n");

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};
const pessoa2 = {
    nome: "Carla",
    idade: 26,
};
const animal = {
    nome: "Kiara",
    idade: 1,
    raca: 'vira-lata',
};

console.log(calculaIdade.apply(pessoa1, [30]));