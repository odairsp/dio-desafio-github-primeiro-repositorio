let jogador1 = "Pedra";
let jogador2 = "Ataque";

// jogador1 = "Ataque";
// jogador2 = "Pedra";

if (jogador1.toUpperCase().trim() === "ATAQUE" && jogador2.toUpperCase().trim() === "ATAQUE"){ console.log("Aniquilacao mutua");}
else if (jogador1.toUpperCase().trim() === "PAPEL" && jogador2.toUpperCase().trim() === "PAPEL") {console.log("Ambos venceram");}
else if (jogador1.toUpperCase().trim() === "ATAQUE" && jogador2.toUpperCase().trim() === "PAPEL") {console.log("Jogador 1 venceu");}
else if (jogador1.toUpperCase().trim() === "ATAQUE" && jogador2.toUpperCase().trim() === "PEDRA") {console.log("Jogador 1 venceu");}
else if (jogador1.toUpperCase().trim() === "PAPEL" && jogador2.toUpperCase().trim() === "ATAQUE") {console.log("Jogador 2 venceu");}
else if (jogador1.toUpperCase().trim() === "PAPEL" && jogador2.toUpperCase().trim() === "PEDRA") {console.log("Jogador 2 venceu");}
else if (jogador1.toUpperCase().trim() === "PEDRA" && jogador2.toUpperCase().trim() === "PAPEL") {console.log("Jogador 1 venceu");}
else if (jogador1.toUpperCase().trim() === "PEDRA" && jogador2.toUpperCase().trim() === "ATAQUE") {console.log("Jogador 2 venceu");}

else console.log("Sem ganhador");