console.log("Estou vinculado ao index.HTML");

let botao = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;


function somar(num1: number, num2: number, devePrintar: boolean, frase: string) {
    if(devePrintar){
        console.log(frase+(num1+num2));
    }
    return num1 + num2;
}


let devePrintar = true;
let frase = "O valor é: "

if(botao){
    botao.addEventListener('click', () => {
        if(input1 && input2){
            console.log(somar(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
        
    })
}