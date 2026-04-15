let idade = 17;
let nome = "joao";
let pedidoMinimo = 100;

if(idade >= 18 ){
   console.log("Você pode beber ");

}else {
    console.log("voce é menor de idade");
}

if(pedidoMinimo >= 100){
  console.log("voce ganhou frete gratis");

}else if(pedidoMinimo <= 100){
  console.log(" voce precisa gastar mais para ganhar frete gratis");
}else{
    console.log("valor invalido");
}