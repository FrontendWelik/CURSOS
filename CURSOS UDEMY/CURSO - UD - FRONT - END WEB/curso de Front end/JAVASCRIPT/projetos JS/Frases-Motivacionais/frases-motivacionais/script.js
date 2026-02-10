/* para criar essa função de gerar numeros ou frases aleatorias vamos utilizar uma lista de arrays 
 */


//criando uma função para que tudo isso seja acionado
//colocando o codigo dentro da função para q ela seja acionado quando for executados

function gerarFraseMotivacional(){
   
//declarando o array como constante
const frases = [
    "voce esta programando legal",
    "continue estudando",
    "progamar nao é facil",
    "tudo vai dar certo",
    "as coisas vao acontecer",
    "voce esta indo em um bom caminho",
    "não é e nunca foi sorte",
    "seu trabalho ainda vair ser bom pra voce",
    "os estudos sao imporantes nao pare",
    "saber,viver"

];

// criando outra constante com o nome de aleatorio
/*Math.floor(math.random() * 10) = é o comando que vai me fazer gerar numeros inteiros aleatorios em ate 10 vezes
e ele foi colocado na const de numeros  */
const numeroAleatorio = Math.floor(Math.random() * 10); //colocando o numero zero que é o item desse array
const frase = frases[numeroAleatorio];// vou pegar a frase selhecionada apartir desse array 
// o array contem as informaçoes , depois a primeira const vai chamar da posição zero
// a segunda const vai rprecer o valor da const frase onde esta o array e da const numero que vai 
// passar a posição chamada

// pegando o id para alterar seu valor 
document.getElementById("frase").innerHTML = frase;
}

