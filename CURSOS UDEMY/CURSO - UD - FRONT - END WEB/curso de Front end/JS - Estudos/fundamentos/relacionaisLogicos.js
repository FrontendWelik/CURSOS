let idade = 17;
let nome = "joao";

if(idade >= 18 ){
   console.log("Você pode beber ");

}else {
    console.log("voce é menor de idade");
}



let pedidoMinimo = 300;
let descont =  pedidoMinimo * (20 / 300);

if(pedidoMinimo >= 100){
  console.log("voce ganhou " + descont + " % de desconto " + "sua compra ficou " + (pedidoMinimo - descont));

}else if(pedidoMinimo <= 100){
  console.log(" voce precisa gastar mais para ganhar frete gratis");
}else{
    console.log("valor invalido");
}