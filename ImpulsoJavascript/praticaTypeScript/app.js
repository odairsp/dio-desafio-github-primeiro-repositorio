"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'Desenvolvedora',
};
pessoa.idade = 30;
const andre = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Programador'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
};
const Jessica = {
    nome: 'Jessica',
    idade: 36,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'Programação', 'Portugues', 'Java']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Jessica.materias);
