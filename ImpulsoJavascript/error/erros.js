// ESTRUTURA 

new Error(message, fileName, lineNunber)

// todos os parametros são opcionais

const MEU_ERRO = new Error("mensagem Inválida");
MEU_ERRO.name = 'InvalidMessage';
throw MEU_ERRO;