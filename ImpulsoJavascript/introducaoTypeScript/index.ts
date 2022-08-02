import $ from 'jquery';
 
$.fn.extend({
    novaFuncao() {
        console.log('Chamou função!');
    }
});
 
$('body').novaFuncao();

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})

// Generics types

function apendiceDeLista <T> (array: any[], valor: T){
    return array.map(item => + valor);
}

apendiceDeLista([1,2,3],1);



// verificando propriedade com varia interfaces

interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente'|'coordenador'|'supervisor';
}

function redirecione1(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        // redirecionar para administração
        
    // redirecionar para area do usuario
}
}


// outra possibilidade utilizando o operador ' ? '

interface IUsuario1{
    id: string;
    email: string;
    // '?' define propriedade como opcional
    cargo?: 'funcionario' | 'gerente'|'coordenador'|'supervisor'; 
}

function redirecione(usuario: IUsuario1 ){
    if(usuario.cargo){
        // redirecionar (usuario.cargo)
        
    }
    // redirecionar para area do usuario
}