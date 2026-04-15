let nota1 = 5;
let nota2 = 6;
let media = (nota1 + nota2) / 2;

if(media >= 5){
    console.log("Você foi aprovado! Sua media é " + media);
}else{
    console.log("voce esta reprovado! Sua media é " + media);
}

/* escolher opções de digitos */

let opcao = 4;

if(opcao == 1){
   console.log("voce escolhu a opção 1, que é para boletos, que saber mais escolha as opções de 1 a 4");
}else if(opcao == 2){
   console.log("voce escolhu a opção 2, que é para cartão de crédito, que saber mais escolha as opções de 1 a 4");
}else if(opcao == 3){
   console.log("voce escolhu a opção 3, que é para PIX, que saber mais escolha as opções de 1 a 4");
}else if(opcao == 4){
   console.log("voce escolhu a opção 4, que é para depósito bancário, que saber mais escolha volte as demais opções");
}else{
   console.log("opção inválida");
}