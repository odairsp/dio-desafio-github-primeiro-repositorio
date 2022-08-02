interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}


type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k];  // '+readonly' adicionando readonly para os atributos, "-?" remove os opcionais
}


class MeuCachorro implements CachorroSomenteLeitura{
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}


const meuCao = new MeuCachorro('Apolo', 14);

