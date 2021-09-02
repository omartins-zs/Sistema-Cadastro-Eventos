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
