function palindromo(string){
    if(!string) return "String inválida!";

    for(let i = 0; i < string.length; i++){
        console.log(string[i], string[string.length -1 -i]);
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }   
    return true;
}

console.log(palindromo("jose"));;