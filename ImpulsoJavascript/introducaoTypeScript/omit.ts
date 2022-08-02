interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;

}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const braseileiro: Brasileiro = {
    nome: 'jose',
    idade: 14,
}

