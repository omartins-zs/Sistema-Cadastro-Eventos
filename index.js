const nomeEvento = "Festa do Branco";

console.log(nomeEvento + "\n");

// Third request Palestrantes

let listaDeParticipantes = ["Helena", " Chico ", " Mário", " José", " Maria"];

let listaDePalestrante = [
  "Andrea Aparecida Novaes",
  "Nicolas Lorenzo Thales Aragão",
  "Otávio Henrique Souza",
];

let quantidadeDePalestrante = listaDePalestrante.length;
console.log("Estes são nosso palestrantes :" + "\n");
for (let indice = 0; indice < quantidadeDePalestrante; indice++) {
  const PalestranteDoEvento = listaDePalestrante[indice];
  console.log(PalestranteDoEvento);
}
//

// First request
let dataEvento = "20/08/2023";

if (dataEvento <= "20/08/2023") {
    console.log("Digite sua idade" + "\n");
} else {
    console.log(
      "O cadastro não pode ser efetuado, pois a data é inválida!" + "\n"
    );
}

// 

// Second request
let idade = 18;

if (idade >= 18) {
    console.log("Digite seu nome" + "\n");
} else {
    console.log("Voce não pode se cadastrar para o evento devido sua idade!");
} 
// 

