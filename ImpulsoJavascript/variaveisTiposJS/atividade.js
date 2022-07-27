function palindromo(palavra) {
    if (!palavra) return "Palavra inexistente!";

    return palavra.split(" ").join("") === palavra.trim().split(" ").join("").split("").reverse().join("");
}


function juntaFrase(frase) {
    if (!frase) return "Palavra inexistente!";
    let newPalavra = ""
    for (const i of frase) {
        if (i !== " ") {
            newPalavra += i;
        }
    }
    return newPalavra
}

function palindromo2(palavra) {
    if (!palavra) return "Palavra inexistente!";

    return juntaFrase(palavra) === juntaFrase(palavra).split("").reverse().join("");

}


function palindromo3(string) {
    if (!string) return "Palavra inexistente!";
    
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        if (string[i] !== string[string.length -1 - i]){ 
            return false;
        }
    }
    return true;
}


console.log(palindromo("ovovo"))
console.log(palindromo2("ovovo"))
console.log(palindromo3("jose"))
