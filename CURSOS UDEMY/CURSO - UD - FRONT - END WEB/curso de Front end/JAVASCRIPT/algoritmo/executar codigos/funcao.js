// funçoes em js - um conjunto de instruçoes que executa uma tarefa expecifica 

// function ação (parametro){ return resultado }
// ação() - chamada 

/* desligar a torneira
pedir copo de agua 
ir ao mercado comprar arroz 
*/

function desligar(){
    console.log("desligar torneira");
}

desligar();

function pedirAgua(){
    return "Copo de Agua"
}

let retorno = pedirAgua()
console.log(retorno);

function irMercadoArroz(dinheiro){
    
    return "arroz"
 
}

let retor = irMercadoArroz(10)
console.log(retor);

function calcularMedia(nota1, nota2){

    let totaNotas = nota1 + nota2;
    let media = totaNotas / 2;

    return media

}


let media = calcularMedia(8,8)
let novaMedia = media + 1;
console.log(novaMedia);