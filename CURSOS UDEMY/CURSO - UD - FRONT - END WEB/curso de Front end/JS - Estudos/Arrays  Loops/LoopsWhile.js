//Loop Laço de repetição é uma estrutura de programação que executa um bloco de codigo repetidamente
//  até que uma condição espesifica seja atendida
//estrutura 

/*  (condição ){
   Executa enquanto a condição é verdadeira

}

*/
 
let numero = 1;
while( numero <= 4){
  console.log("pedaço de piza " + numero)
  numero = numero + 1;
}

// listas de postagens 

let postagens = [
    " Hoje passeando pela av paulista  ",
    " Passeando em Campos do Jordão ",
    " Hoje fiz um curso de criação de site",
    "  Na casa da mãe , aproveitando o dia ",
    "  passeando por ai  ",
    "  andando na rua sosinho ",
    "post fim"
]

const totalPOstagens = postagens.length
let numeroPostagem = 0;

while( numeroPostagem < totalPOstagens){
    console.log("IMagem");
    console.log("----");
    console.log("Postagem");
    console.log(postagens[numeroPostagem]);
    console.log("-- fim post --");
    console.log(" ");
    numeroPostagem = numeroPostagem + 1;
}