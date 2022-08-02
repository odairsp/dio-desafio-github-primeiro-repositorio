console.log("TypeScript");

function soma(a: number, b: number) {

    return a + b;
}


// interfaces

interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquatico";
    domestico: boolean;
    executarRugido(volume: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}
interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande'
}

type IDomestico = IFelino | ICanino; //types juntar diferentes interfaces 



const animal: IDomestico = {
    domestico: true,
    nome: 'Jonas',
    tipo: "terrestre",
    porte: "médio",
    visaoNoturna: false,
    executarRugido(volume) {
        
    },
}



const animal2: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre",
    domestico: false,
    executarRugido: (volume) => (`${volume}dB`),
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
    domestico: false,
    executarRugido: (volume) => (`${volume}dB`)
}



