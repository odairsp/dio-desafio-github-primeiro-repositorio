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

