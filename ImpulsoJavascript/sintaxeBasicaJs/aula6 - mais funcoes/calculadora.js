function calculadora() {
    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }
    function divisao() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }
    function resto() {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado ${n2} = ${resultado}`);
    }
    function nova() {
        let opcao = prompt("Deseja fazer outra operação? \n1-sim\n2-não")
        if (opcao == '1') {
            calculadora();
        } else if (opcao == '2') {
            alert("Bye!");
        } else {
            alert("Opção inválida!");
            nova();
        }
    }
    let operacao = Number(prompt('Escolha uma operação:\n1-Soma (+)\n2-Subtração (-)\n3-Multiplicação (*)\n4-Divisão (/)\n5-Resto da divisão (%)\n6-Potenciação (**)'))
    if (!operacao || operacao > 7 || operacao < 1) {
        alert("opção inválida!");
        calculadora()
    }
    let n1 = Number(prompt("Digite o primeiro numero!"));
    let n2 = Number(prompt("Digite o segundo numero!"));
    let resultado;
    if (!n1 || !n2) {
        alert("Parametros inválidos")
        calculadora();
    } else {
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potenciacao();
                break;
            default:
                alert("Digite uma opção válida!");
                calculadora();
                break;
        }

    }

    nova()
}
calculadora();


